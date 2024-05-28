// JavaScript for toggling the menu
function toggleMenu() {
    var menuContainer = document.querySelector('.menu-container');
    var menuContent = document.querySelector('.menu-content');
    menuContainer.classList.toggle('open'); // Toggle the 'open' class on the menu container
    if (menuContainer.classList.contains('open')) {
        menuContent.style.display = 'block'; // Show the menu content when menu is open
        menuContainer.style.left = '0'; // Slide the menu open
    } else {
        menuContent.style.display = 'none'; // Hide the menu content when menu is closed
        menuContainer.style.left = '-200px'; // Slide the menu closed
    }
}

function goToPage(pageURL) {
    window.location.href = pageURL; // Redirect to the specified page URL
}

document.getElementById("upload-form").addEventListener("submit", function() {
    //event.preventDefault();
    var fileInput = document.getElementById("video-input");
    var file = fileInput.files[0];
    if (file) {
        var formData = new FormData();
        formData.append("video-input", file);
        
        // Send AJAX request to upload the video
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var predictedText = response.predicted_text;
                displayPredictedText(predictedText);
                // Update the content of an element with the predicted text
                var predictedTextElement = document.getElementById('predicted-text');
                predictedTextElement.innerText = "Predicted Text: " + predictedText.join(", ");
            }
        };
        xhr.send(formData);
        alert("Video has been uploaded.");
        console.log("Uploading file:", file.name);
    } else {
        alert("Please select a video file to upload.");
    }
}); 

document.getElementById("video-input").addEventListener("change", function() {
    var fileInput = document.getElementById("video-input");
    var filename = fileInput.value.split('\\').pop(); // Get the filename from the file input
    var buttonLabel = document.querySelector('.custom-file-input-label');
    buttonLabel.innerText = filename; // Set the button label to the filename
});

function uploadVideo() {
    var fileInput = document.getElementById("video-input");
    var file = fileInput.files[0];
    if (file) {
        var formData = new FormData();
        formData.append("video-input", file);
        
        // Send AJAX request to upload the video
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var predictedText = response.predicted_text;
                displayPredictedText(predictedText);
            }
        };
        xhr.send(formData);
        alert("Video has been uploaded.");
    } else {
        alert("Please select a video file to upload.");
    }
}

function displayPredictedText(predictedText) {
    var predictedTextElement = document.getElementById('predicted-text');
    predictedTextElement.innerText = predictedText;
}

// Function to display uploaded video and predicted text overlay
function displayVideo(videoPath, predictedText) {
    var video = document.createElement('video');
    video.src = videoPath;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.id = "uploaded-video";
    
    var videoContainer = document.querySelector('.video-container');
    var existingVideo = document.getElementById('uploaded-video');
    if (existingVideo) {
        videoContainer.removeChild(existingVideo);
    }
    videoContainer.insertBefore(video, videoContainer.firstChild);
    
    var predictedTextElement = document.getElementById('predicted-text');
    predictedTextElement.innerText = predictedText;
}
