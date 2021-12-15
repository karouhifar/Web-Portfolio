// Showing the project details in module

$(document).ready(function () {
  fetch("/data/swiper.json")
    .then((Response) => Response.json())
    .then((names) => {
      let motherSwiper = $(".swiper-wrapper");
      let animeData;
      names.forEach((n) => {
        let childDiv = $("<div></div>").attr("class", "swiper-slide");
        childDiv.css("background-image", `url(${n.src})`);
        motherSwiper.append(childDiv);
        let childDiv2 = $("<div></div>").attr("class", "details");
        childDiv.append(childDiv2);
        let childDiv3 = $(`<a href=${n.url} target="_blank"></a>`).attr(
          "class",
          "desc-details"
        );
        let childDiv4 = $("<div></div>").attr("class", "desc-lists");
        childDiv2.append(childDiv3);
        let text = $("<span></span>")
          .text(n.name)
          .css("color", "rgb(255, 255, 255)");
        childDiv3.append(text);
        childDiv2.append(childDiv4);
        let childDiv5 = $("<div></div>").attr("class", "slideLists");

        childDiv4.append(childDiv5);
        let childDiv6 = $("<div class='TechnologiesSlide'></div>");
        childDiv6.html("<h5>Technologies: </h5>");
        n.techSrc.forEach((src) => {
          childDiv6.append(`<img src=${src} alt=${n.name} width='50' />`);
        });
        let childDiv7 = $("<div class='TaskCompleted'></div>");
        childDiv7.html("<h5>Completed Tasks: </h5>");

        childDiv5.append(childDiv6);
        n.description.forEach((desc) => {
          childDiv7.append(
            `<div class='spanSlide'><i class="${desc.logo}"></i><span>${desc.name}</span></div>`
          );
        });
        childDiv5.append(childDiv7);
        childDiv.hover(
          () => {
            animeData = null;
            childDiv4.css("display", `block`);
            animeData = anime
              .timeline({ duration: 1100 })
              .add({
                targets: childDiv2[0],
                height: "100%",
              })
              .add(
                {
                  targets: childDiv3[0],
                  backgroundColor: "#FFF",
                  width: "60%",
                  borderRadius: "10px",
                },
                "-=1000"
              )
              .add(
                {
                  targets: text[0],
                  color: "#000",
                },
                "-=1000"
              )
              .add(
                {
                  targets: childDiv4[0],
                  opacity: 1,
                },
                "-=500"
              );
          },
          () => {
            anime
              .timeline({ duration: 1000 })
              .add({
                targets: childDiv2[0],
                height: "15%",
              })
              .add(
                {
                  targets: text[0],
                  color: "#FFF",
                },
                "-=1000"
              );
            animeData.restart();
            animeData.pause();
          }
        );
      });
    });
});
