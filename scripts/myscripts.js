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

    // Function to show image alt text on hover
    function showAlt(event) {
        document.getElementById("alttext").innerHTML = event.target.alt;
    }

    // Function to hide image alt text when not hovering
    function hideAlt() {
        document.getElementById("alttext").innerHTML = "";
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
