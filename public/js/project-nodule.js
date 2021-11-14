// Showing the project details in module

$( document ).ready(function() {

var exampleModal = document.getElementById('projectModal');

exampleModal.addEventListener('show.bs.modal', function (event) {

var button = event.relatedTarget;

var recipient = button.getAttribute('data-bs-whatever');
var bodyFormat = document.querySelector('.model-info-project');
var bodyFormatImg = document.querySelector('.model-img-project');
var bodyFormatGithub = document.querySelector('.model-info-project-github');



TitleArray = [{React:"React", Angular:"Angular", JS:"JavaScript", Java:"Java", DotNet:"ASP.Net"}];
bodyTextAnchor = {ReactText:"https://kamyabreactrestaurant.netlify.app",AngularText:"https://kamyab-spotify.vercel.app/", JS:"https://fast-castle-87951.herokuapp.com", Java:"N/A",DotNet:"http://www.invoiceline.somee.com/"};
bodyTextGithub = {ReactText:"https://github.com/krouhifar/ReactRestaurantAPI",AngularText:"https://github.com/krouhifar/web422-a6", JS:"https://github.com/krouhifar/Final-Web322", Java:"https://github.com/krouhifar/JavaFX-Serialization"};
bodyText = {ReactText:"Click React app",AngularText:"Click Angular app", JS:"Click Vanilla JavaScript", Java:"N/A No live server",DotNet:"Click ASP.NET"};
bodyImage = {ReactText:"img/portfolio/Restaurant.PNG",AngularText:"img/portfolio/Spotify.PNG", JS:"img/portfolio/KamiB&B.PNG", Java:"img/portfolio/Deserialization_1.JPG",DotNet:"img/portfolio/DotNet.png"};

bodyFormat.style.textDecoration = "none";

TitleArray.forEach ((TitleArrays) => {
    switch (recipient) {
        case "Nodejs App":
        bodyFormat.style.color = "blue";
        dataText = `${TitleArrays.JS} project information`;
        bodyFormat.setAttribute("href",bodyTextAnchor.JS);
        bodyFormat.textContent = bodyText.JS;
        bodyFormatGithub.setAttribute("href",bodyTextGithub.JS);
        bodyFormatGithub.textContent = bodyTextGithub.JS;  
        bodyFormatImg.setAttribute("src",bodyImage.JS);
        break;
        case "React App":
        bodyFormat.style.color = "blue";    
        dataText = `${TitleArrays.React} project information`;
        bodyFormat.setAttribute("href",bodyTextAnchor.ReactText);
        bodyFormat.textContent = bodyText.ReactText;
        bodyFormatGithub.setAttribute("href",bodyTextGithub.ReactText);
        bodyFormatGithub.textContent= bodyTextGithub.ReactText;
        bodyFormatImg.setAttribute("src",bodyImage.ReactText);
        break;
        case "Angular App":
        bodyFormat.style.color = "blue";
        dataText = `${TitleArrays.Angular} project information`;
        bodyFormat.setAttribute("href",bodyTextAnchor.AngularText);
        bodyFormat.textContent = bodyText.AngularText;
        bodyFormatGithub.setAttribute("href",bodyTextGithub.AngularText); 
        bodyFormatGithub.textContent= bodyTextGithub.AngularText;
        bodyFormatImg.setAttribute("src",bodyImage.AngularText);
        break;
        case "Java App":
        bodyFormat.style.color = "black";
        dataText = `${ TitleArrays.Java } project information`;
        bodyFormat.removeAttribute("href");
        bodyFormat.textContent = bodyText.Java;
        bodyFormatGithub.setAttribute("href",bodyTextGithub.Java); 
        bodyFormatGithub.textContent= bodyTextGithub.Java;
        bodyFormatImg.setAttribute("src",bodyImage.Java);
        break;
        case "Net App":
            bodyFormat.style.color = "blue";
            dataText = `${TitleArrays.DotNet} project information`;
            bodyFormat.setAttribute("href",bodyTextAnchor.AngularText);
            bodyFormat.textContent = bodyText.AngularText;
            bodyFormatGithub.setAttribute("href",bodyTextGithub.AngularText); 
            bodyFormatGithub.textContent= bodyTextGithub.AngularText;
            bodyFormatImg.setAttribute("src",bodyImage.AngularText);
        break;
    }
})

var modalTitle = exampleModal.querySelector('.modal-title');
var modalBody = exampleModal.querySelector('.modal-body');

modalTitle.textContent =  dataText;
modalBody
})
});