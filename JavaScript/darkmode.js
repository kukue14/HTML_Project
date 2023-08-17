// function myFunction() {


// }

function changeImage() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var image = document.getElementById('dark-light');
    if (image.src.match("dark")) {
        image.src = "./images/light.png";
    } else {
        image.src = "./images/dark.png";
    }
}