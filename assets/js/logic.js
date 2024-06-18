// Check if the theme preference is stored in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    document.getElementById('theme-slider').checked = currentTheme === 'dark-mode';
} else {
    // If no theme preference is found, use browser preference (light mode)
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light-mode';
    document.body.classList.add(preferredTheme);
    localStorage.setItem('theme', preferredTheme);
    document.getElementById('theme-slider').checked = preferredTheme === 'dark-mode';
}

// Toggle between light and dark mode
document.getElementById('theme-slider').addEventListener('change', function() {
    const newTheme = this.checked ? 'dark-mode' : 'light-mode';

    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(newTheme);

    localStorage.setItem('theme', newTheme);
});
