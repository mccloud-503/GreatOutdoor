// Wait until the page is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    /**
     * Function to show the selected section and hide the others.
     * Ensures only one section is visible at a time when clicking on a tab.
     */
    function showSection(event) {
        var sectionID = event.currentTarget.getAttribute("data-section"); // Get the section ID from the clicked button
        var sections = document.querySelectorAll(".section"); // Get all sections

        // Hide all sections
        sections.forEach(function(section) {
            section.style.display = "none";
        });

        // Show the selected section
        var selectedSection = document.getElementById(sectionID);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }

        // Update active tab styling
        var buttons = document.querySelectorAll(".tab button");
        buttons.forEach(function(button) {
            button.classList.remove("active");
        });

        event.currentTarget.classList.add("active");
    }

    /**
     * Function to display the alternative text of an image when hovered over.
     * It now updates the correct section's hover text instead of a single global text box.
     */
    function showAlt(event) {
        var altText = event.target.alt; // Get alt text from hovered image
        var section = event.target.closest(".section"); // Find the parent section of the image

        if (section) {
            var altTextContainer = section.querySelector(".alttext"); // Find the corresponding text container in the same section

            if (altTextContainer) {
                altTextContainer.textContent = altText; // Display the alt text in the correct location
            }
        }
    }

    /**
     * Function to hide the alternative text when the mouse is no longer hovering over the image.
     * It correctly clears only the alt text in the respective section.
     */
    function hideAlt(event) {
        var section = event.target.closest(".section"); // Find the parent section of the image

        if (section) {
            var altTextContainer = section.querySelector(".alttext"); // Find the correct text container

            if (altTextContainer) {
                altTextContainer.textContent = ""; // Remove the alt text
            }
        }
    }

    /**
     * Attach event listeners to the tab buttons for navigation.
     */
    var buttons = document.querySelectorAll(".tab button");
    buttons.forEach(function(button) {
        button.addEventListener("click", showSection);
    });

    /**
     * Attach event listeners to images for hover effects.
     */
    var images = document.querySelectorAll("img");
    images.forEach(function(image) {
        image.addEventListener("mouseover", showAlt);
        image.addEventListener("mouseout", hideAlt);
    });

    /**
     * Initially, hide all sections except the first one (Home section).
     */
    var sections = document.querySelectorAll(".section");
    sections.forEach(function(section, index) {
        if (index === 0) {
            section.style.display = "block"; // Show first section (Home) by default
        } else {
            section.style.display = "none"; // Hide all other sections
        }
    });
});
