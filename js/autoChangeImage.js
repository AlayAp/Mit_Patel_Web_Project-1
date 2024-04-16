$(document).ready(function() {
    var images = ["appartment_header_img.webp", "bg_rent_img.jpg", "header_img4.jpg", "header_img3.jpg"];
    var currentIndex = 0;

    function changeBackground() {
        var imagePath = "url('/images/" + images[currentIndex] + "')";
        $("#header_image").css("background-image", imagePath); // Set background image without any fading effect
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Set an initial background image
    var initialImagePath = "url('/images/" + images[currentIndex] + "')";
    $("#header_image").css("background-image", initialImagePath);

    // Change background image at regular intervals
    setInterval(changeBackground, 3000); // Change image every 3 seconds (3000 milliseconds)
});