$(document).ready(function ()
{

    
    function removeLoading () 
    {
        
        anime.timeline({})
            .add({
                targets: '.loader-container',
                opacity: [1, 0],
                easing: "easeOutExpo",
                zIndex: {
                    value: -1
                },
                duration: 1000
            });
              async function demo() {   
                await new Promise(r => setTimeout(r, 1000));
                let loaderContainer = document.querySelector('.loader-container');
                loaderContainer.parentElement.removeChild(loaderContainer);
              }
              
              demo();
         
    };
  
    removeLoading();
});