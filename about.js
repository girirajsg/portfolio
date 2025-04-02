// var images = [
//     "cricket.jpg","ornaments.jpg","logo.jpeg"
// ];
// var i=0;
// function showSlides(){
//     document.getElementById("slides").src = images[i];
//     if(i<(images.length-1))
//     i++;
//     else
//     i=1;
// }
// setInterval(showSlides,2000);

let play=document.getElementById("play");
function playSound(){
    let audio=new Audio("audio.mp3");
    audio.play()
}
play.addEventListener("click",playSound);