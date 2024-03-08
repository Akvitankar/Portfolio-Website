// Add this to the end of script.js

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Check if user has a preference for dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme based on user preference
    if (prefersDarkMode) {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode when the button is clicked
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
