// function to change the color on mouseover
function changeColorToGreen(linkId){
    link = document.getElementById(linkId);
    link.addEventListener('mouseover', function(){
        link.style.color = 'green';
    });

}
changeColorToGreen('home-link');
changeColorToGreen('about-link');
changeColorToGreen('interests-link');
changeColorToGreen('contact-link');
