// Check if the theme preference is stored in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
} else {
    // If no theme preference is found, use browser preference (light mode)
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light-mode';
    document.body.classList.add(preferredTheme);
    localStorage.setItem('theme', preferredTheme);
}

// Toggle between light and dark mode
document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';

    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);

    localStorage.setItem('theme', newTheme);
});
