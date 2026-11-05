function cardRandomAction() {
    const card = document.querySelector('.card');
    const cappy = document.getElementById('cappy');
    if (!card || !cappy) return;

    card.style.translate = `${(Math.random() - 0.5) * 4}px ${(Math.random() - 0.5) * 4}px`;
    
    cappy.style.filter = 'drop-shadow(0 0 25px rgba(255, 0, 60, 0.8)) brightness(1.2)';
    setTimeout(() => {
        cappy.style.filter = 'drop-shadow(0 0 15px rgba(255, 0, 60, 0.3)) brightness(1)';
    }, 150);

    setTimeout(() => { 
        card.style.translate = ''; 
    }, 120);
}

function initCardClick() {
    const card = document.querySelector('.card');
    if (!card) return;
    
    card.addEventListener('click', () => {
        card.style.translate = `${(Math.random() - 0.5) * 15}px ${(Math.random() - 0.5) * 15}px`;
        setTimeout(() => {
            card.style.translate = '';
        }, 150);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initCardClick();
    setInterval(cardRandomAction, 8000);
});