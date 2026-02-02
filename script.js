// Effetto trasparenza Navbar allo scorrimento
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Opzionale: Chiusura menu su mobile (se aggiungerai un hamburger menu)
console.log("Game Spot Website Caricato correttamente.");