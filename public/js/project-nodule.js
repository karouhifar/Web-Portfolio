// Showing the project details in module

$(document).ready(function () {
  fetch("/data/swiper.json")
    .then((Response) => Response.json())
    .then((names) => {
      names.forEach((n) => {
        let childDiv = $("<div></div>").attr({
          class: "col-12 gs_reveal3",
        });
        let childDiv2 = $("<div></div>").attr("class", "card border-0 mb-3");

        let childDiv3_1 = $(`<div></div>`)
          .attr({
            class: "col-md-4",
            onclick: "goToLink('https://kamistore-60f52.web.app/')",
          })
          .css({ cursor: "pointer" });
        childDiv3_1.prepend(
          '<img width="100%" src="img/portfolio/kamiStore.png"  alt="kamiStore">'
        );
        let childDiv3_2 = $(`<div></div>`).attr("class", "col-md-8");
        let childDiv3_2_1 = $(`<div></div>`).attr("class", "card-body");
        let text = $("<h5 class='card-title'></h5>")
          .text(n.name)
          .css("color", "rgb(255, 255, 255)")
          .append("<i class='fa-solid fa-chevron-right'></i>");
        let text2 = $("<p class='card-text'></p>")
          .text("technologies used " + n.name)
          .prepend(
            '<img width="100%" src="img/portfolio/kamiStore.png"  alt="kamiStore">'
          )
          .css("color", "rgb(255, 255, 255)")
          .append("<i class='fa-solid fa-chevron-right'></i>");
        childDiv3_2_1.append(text).append(text2);
        childDiv3_2.append(childDiv3_2_1);
        childDiv2.append(childDiv3_1).append(childDiv3_2);
        childDiv.append(childDiv2);
        // $("#projectList").append(childDiv);
        // let text = $("<span></span>")
        //   .text(n.name)
        //   .css("color", "rgb(255, 255, 255)");
        // childDiv3.append(text);
        // childDiv2.append(childDiv4);
        // let childDiv5 = $("<div></div>").attr("class", "slideLists");

        // childDiv4.append(childDiv5);
        // let childDiv6 = $("<div class='TechnologiesSlide'></div>");
        // childDiv6.html("<h5>Technologies: </h5>");
        // n.techSrc.forEach((src) => {
        //   childDiv6.append(`<img src=${src} alt=${n.name} width='50' />`);
        // });
        // let childDiv7 = $("<div class='TaskCompleted'></div>");
        // childDiv7.html("<h5>Completed Tasks: </h5>");

        // childDiv5.append(childDiv6);
        // n.description.forEach((desc) => {
        //   childDiv7.append(
        //     `<div class='spanSlide'><i class="${desc.logo}"></i><span>${desc.name}</span></div>`
        //   );
        // });
        // childDiv5.append(childDiv7);
      });
    });
});

function goToLink(e) {
  window.open(e);
}
