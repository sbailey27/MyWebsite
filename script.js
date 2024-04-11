
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

// Script for game card videos on games.html page. On mouseover, video starts playing, then resets when the mouse leaves the element
document.addEventListener("DOMContentLoaded", function() {
    var myVideo = document.getElementsByClassName("game_card_video");
    
    // Iterate over each video element
    for (var i = 0; i < myVideo.length; i++) {
        // Event listener for mouseover on element
        myVideo[i].addEventListener("mouseover", function() {
            // Play the video when mouseover 
            this.play();
        });
        // Event listener for when mouse leaves the element
        myVideo[i].addEventListener("mouseleave", function()
        {
            // Pause the video and reset it to the beginning
            this.pause();
            this.currentTime = 0;
        });
    
    }
});

