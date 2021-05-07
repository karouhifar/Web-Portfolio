

$(document).ready(function ()
{
    // let nav_offset_top = $('.headerMain').height() +60;
    //   function navbarFixed() {
    //        if ($('.headerMain').length) {
    //            $(window).scroll(function () {
    //                let scroll = $(window).scrollTop();
    //                if (scroll >= nav_offset_top) {
                
    //                    $('.headerMain').addClass('fixed-top');
    //                    $('.navbar-brand').children().addClass('img_small');
    //                } else {
    //                    $('.headerMain').removeClass('fixed-top');
    //                      $('.navbar-brand').children().removeClass('img_small');
    //                }
    //            })
    //        }
    //    }
   
    //    navbarFixed();



       let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop,
    isVisible = true;

        function show(){
        if(!isVisible){
            TweenLite.to(".headerMain", 1, { y: "0%" }, 0);
            isVisible = true;
        }
        }

        function hide(){
        if(isVisible){
            TweenLite.to(".headerMain", 1, { y: "-100%" }, 0);
            isVisible = false;
        }
        }

        window.addEventListener("scroll", () =>{

            var newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (newScrollTop > currentScrollTop) {
                hide();
            } else if (newScrollTop < currentScrollTop) {
                show();
            }
            currentScrollTop = newScrollTop;

        });


// --- scrolling main
gsap.registerPlugin(ScrollTrigger);


var targets = [
    { scrollPosition :{ x: "#scrollPosition", y: ".gs_reveal"}},
    { scrollPosition :{ x: "#scrollPosition2", y: ".gs_reveal2"}},
    { scrollPosition :{ x: "#scrollPosition3", y: ".gs_reveal3"}}
];

targets.forEach(function(target, i){

let tl = gsap.timeline(  {
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: target.scrollPosition.x,
      start:"6% 85%", // Start Scroll event
      end:"bottom 25%", // End Scroll event
      // events : OnEnter  OnLeave  OnEnterBack  OnLeaveBack
      toggleActions: "restart none none reverse"
    }
  });

  // add animations and labels to the timeline
tl.from(target.scrollPosition.y, {y:100, opacity:0, ease:"back.out(1.7)", duration:1, stagger:0.5});
});
  
    anime.timeline({})
        .add({
            targets: '.title-text',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
            delay:1000
        })
        .add({
            targets: '.letters-animate',
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: anime.stagger(400),
            offset: '-=300'
        }).add({
        targets: '.animate-text  .line',
        opacity: [0.5,1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
            duration: 700,
            offset: '-=300'
        }).add({
        targets: '.animate-text  .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
        }).add({
        targets: '.animate-text  .letters-left',
        opacity: [0,1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
        }).add({
        targets: '.animate-text  .letters-right',
        opacity: [0,1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
        }).add({
        targets: '.animate-text  .line',
        opacity: [1,0],
        easing: "easeOutExpo",
        duration: 600
        });
    });
