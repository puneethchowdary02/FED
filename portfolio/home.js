document.getElementById('toggleModeBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('specificLink').addEventListener('click', (event) => {
    alert('You clicked to view the Resume!');
});