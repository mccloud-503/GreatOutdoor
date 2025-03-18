// Wait until the page is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    // Function to highlight the active tab when clicked
    function setActiveTab() {
        var currentPage = window.location.pathname.split('/').pop(); // Get the current filename
        var buttons = document.querySelectorAll('.tab button'); // Select all navigation buttons

        // Loop through all buttons to match with the current page
        buttons.forEach(function(button) {
            var pageLink = button.getAttribute('onclick').split("'")[1]; // Extract the link from onclick event

            if (pageLink === currentPage) {
                button.classList.add('active'); // Highlight the active tab
            } else {
                button.classList.remove('active'); // Remove highlight from inactive tabs
            }
        });
    }

    // Function to show image alt text centered on the image
    function showAlt(event) {
        let text = document.getElementById("alttext");
        text.innerHTML = event.target.alt; // Display the image alt text
        text.style.display = "block";

        // Get image position and dimensions
        let imgRect = event.target.getBoundingClientRect();

        // Position the text in the center of the image
        text.style.position = "absolute";
        text.style.top = (window.scrollY + imgRect.top + (imgRect.height / 2) - (text.offsetHeight / 2)) + "px"; // Center vertically
        text.style.left = (window.scrollX + imgRect.left + (imgRect.width / 2) - (text.offsetWidth / 2)) + "px"; // Center horizontally
    }

    // Function to hide image alt text when not hovering
    function hideAlt() {
        let text = document.getElementById("alttext");
        text.innerHTML = "";
        text.style.display = "none";
    }

    // Apply hover effects to all images
    var images = document.querySelectorAll("img");
    images.forEach(function(image) {
        image.addEventListener("mouseover", showAlt);
        image.addEventListener("mouseout", hideAlt);
    });

    // Run the function to set active tab highlighting
    setActiveTab();
});
