// Toggle the navigation menu on small screens
const collapseBtn = document.getElementById('collapse-btn');
const navLinks = document.getElementById('nav-links');

collapseBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
