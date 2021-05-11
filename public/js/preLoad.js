$(document).ready(function ()
{

    
    $(window).on("load", function ()
    {
        
        anime.timeline({})
            .add({
                targets: '.loading',
                translateY: ["0", "-50%"],
                opacity: [1, 0],
                easing: "easeOutExpo",
                duration: 1000
            })
            .add({
                targets: '.loader-container',
                opacity: [1, 0],
                easing: "easeOutExpo",
                zIndex: {
                    value: -1
                },
                duration: 1000
            });
          
            
    });
  

});