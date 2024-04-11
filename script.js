
// Force script to wait for the content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Games Page Video Slideshow
    var myIndex = 0;
    var videos = document.getElementsByClassName("gamesPageVideo");
    carousel();

    function carousel() {
        videos[myIndex].style.display = "block"; // Show current video
        videos[myIndex].play(); // Start playing current video

        // Wait for the current video to finish playing
        videos[myIndex].addEventListener('ended', function() {
            videos[myIndex].style.display = "none"; // Hide current video
            myIndex++; // Move to the next video
            if (myIndex >= videos.length) {
                myIndex = 0; // Reset index to loop back to the first video
            }
            setTimeout(carousel, 2); //small delay
        });
    }
});
