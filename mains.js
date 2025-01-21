// Toggle Navigation Menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

// Add event listener for dark mode toggle
themeToggle.addEventListener('click', () => {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    // Update button icon for light/dark mode
    themeToggle.textContent = isDarkMode ? '☀️' : '🌗';
});

// Highlight Active Menu Item
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

// Smooth Scroll to Sections
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = item.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});