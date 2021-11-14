

$(document).ready(function ()
{
    // --- Scrolling the header
       let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop,
    isVisible = true;

        function show(dom1, dom2){
        if(!isVisible){
            let rule = CSSRulePlugin.getRule(".bg-light");
            TweenLite.to(dom1, 1, {ease:Power1.easeInOut ,width:"150px"}, 0);
            TweenLite.to(dom1, 1, {ease:Power1.easeInOut, filter:"none"}, 0);
            TweenLite.to(rule, 1, {backgroundColor: "#f8f9fa"}, 0);
            TweenLite.to(".nav-link", 1, {color:"#141313"}, 0);
            dom2.style.width= "auto";
            dom2.style.position= "static";
            isVisible = true;
        }
        }

        function hide(dom1 ,dom2){
        if(isVisible){
            let rule = CSSRulePlugin.getRule(".bg-light");
            TweenLite.to(dom1, 1, {width:"70px"}, 0);
            TweenLite.to(dom1, 1, {filter:"brightness(0) invert(1)"}, 0);
            TweenLite.to(rule, 1, {backgroundColor: "black"}, 0);
            TweenLite.to(".nav-link", 1, {color:"white"}, 0);
            dom2.style.width= "100%";
            dom2.style.position= "sticky";
            dom2.style.top = 0;
            dom2.style.zIndex = "1000";
            isVisible = false;

        }
        }

        window.addEventListener("scroll", () =>{
            let DOMHeader = document.querySelector(".headerMain");
            let DOMImg = document.getElementById("imgLogo");
            if (DOMHeader.scrollHeight < window.document.documentElement.scrollTop)
             hide(DOMImg, DOMHeader);
            else 
             show(DOMImg , DOMHeader);
            
        });

  
//-------------------------------------------------------------------------------------------
// --- scrolling main
var path = window.location.pathname;
var page = path.split('/').pop();
if (page == "index") {


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
        start:"6% 90%", // Start Scroll event
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
        }
        });
