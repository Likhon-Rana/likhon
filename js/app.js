// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    // Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const htmlDoc = document.documentElement;
    const savedTheme = localStorage.getItem('life_os_theme') || 'light';
    htmlDoc.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = htmlDoc.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            htmlDoc.setAttribute('data-theme', next);
            localStorage.setItem('life_os_theme', next);
        });
    }

    // Live Clock Update
    const clockEl = document.getElementById('live-clock');
    const dateEl = document.getElementById('live-date');
    
    if (clockEl && dateEl) {
        setInterval(() => {
            const now = new Date();
            let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
            let ampm = h >= 12 ? 'PM' : 'AM';
            h = h % 12 || 12;
            clockEl.innerText = `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')} ${ampm}`;
            dateEl.innerText = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        }, 1000);
    }
});
