// function myFunction() {


// }

function changeImage() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var image = document.getElementById('dark-light');
    if (image.src.match("turnOff")) {
        image.src = "./images/turnOn.png";
    } else {
        image.src = "./images/turnOff.png";
    }

}
