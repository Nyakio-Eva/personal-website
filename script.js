// Add a simple interactive feature
document.addEventListener('DOMContentLoaded', function (){
    const welcomeSection = document.getElementById('home')
    // Change text color on mouseover
    welcomeSection.addEventListener('mouseover',function (){
        this.style.color = getRandomColor();
    });
    // change color back on mouseout
    welcomeSection.addEventListener('mouseout',function(){
        this.style.color = '';
    });
    
})