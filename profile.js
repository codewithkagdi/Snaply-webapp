// profile.js

document.addEventListener('DOMContentLoaded', function() {
    const searchToggle = document.getElementById('search-toggle');
    const popupMenu = document.getElementById('popup-menu');
    const closePopup = document.getElementById('close-popup');

    searchToggle.addEventListener('click', function() {
        popupMenu.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        popupMenu.style.display = 'none';
    });
});
