var images = ['./images/pic1.jpg', './images/pic2.jpg', './images/pic3.jpg', './images/pic4.jpg', './images/pic5.jpg', './images/pic6.jpg'];
var imgIndex = 0;
var imgDuration = 3000;


function forward() {

    document.getElementById('slider').className += "fadeOut";
    setTimeout(function () {
        document.getElementById('slider').src = images[imgIndex];
        document.getElementById('slider').className = "";
    }, 1000);

    imgIndex = imgIndex + 1;
    if (imgIndex>images.length- 1) {
        imgIndex = 0
    }
    document.getElementById("slider").src = images[imgIndex];
    setTimeout(forward, imgDuration);

}
forward();
