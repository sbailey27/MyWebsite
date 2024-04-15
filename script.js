// Front page slider
// Force script to wait for the content to be fully loaded
/*document.addEventListener("DOMContentLoaded", function() {
    var slides = 0;
    var frontVideos = document.getElementsByClassName("frontvideo");
    frontVideoSlide();

    function frontVideoSlide() {
        frontVideos[slides].style.display = "block"; // Show current video
        frontVideos[slides].play(); // Start playing current video

        // Wait for the current video to finish playing
        frontVideos[slides].addEventListener('ended', function() {
            frontVideos[slides].style.display = "none"; // Hide current video
            slides++; // Move to the next video
            if (slides >= frontVideos.length) {
                slides = 0; // Reset index to loop back to the first video
            }
            setTimeout(frontVideoSlide, 2); //small delay
        });
    }
});*/


document.addEventListener("DOMContentLoaded", function() {
    var slides = 0;
    var frontVideos = document.getElementsByClassName("frontvideo");
    var sliderButtons = document.querySelectorAll(".sliderImages");

    frontVideoSlide();

    function frontVideoSlide() {
        frontVideos[slides].style.display = "block"; // Show current video
        frontVideos[slides].play(); // Start playing current video

        // Highlight the corresponding image
        highlightImage(slides);

        // Wait for the current video to finish playing
        frontVideos[slides].addEventListener('ended', function() {
            frontVideos[slides].style.display = "none"; // Hide current video
            slides++; // Move to the next video
            if (slides >= frontVideos.length) 
            {
                slides = 0; // Reset index to loop back to the first video
            }
            setTimeout(frontVideoSlide, 2); // small delay
        });
    }

    // Add click event listeners to the slider navigation images
    sliderButtons.forEach(function(image, index) {
        image.addEventListener('click', function() {
            // Stop the current video
            frontVideos[slides].pause();
            frontVideos[slides].currentTime = 0;

            // Hide all videos
            for (var i = 0; i < frontVideos.length; i++) 
            {
                frontVideos[i].style.display = "none";
            }

            // Show and play the clicked video
            slides = index;
            frontVideos[slides].style.display = "block";
            frontVideos[slides].play();

            // Highlight the clicked image
            highlightImage(slides);
        });
    });

    // Function to highlight the clicked image
    function highlightImage(index) {
        // Reset all images to default opacity and color
        sliderButtons.forEach(function(image) {
            image.style.opacity = ".5";
            image.style.backgroundColor = "transparent";
        });

        // Highlight the clicked image
        sliderButtons[index].style.opacity = "1";
        sliderButtons[index].style.border = "3px solid #ff1053"; // Change to your desired highlight color
    }
});



// Games Page Video Slideshow
// Force script to wait for the content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
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

