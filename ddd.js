function showMessage() {
    const messages = [
        'Ты можешь всё, что захочешь!',
        'Развивайся каждый день!',
        'Сайт становится всё круче!'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
