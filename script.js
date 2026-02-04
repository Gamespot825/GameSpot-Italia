document.addEventListener('DOMContentLoaded', () => {
   
    const nav = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    let sliderInterval;

    function showSlide(index) {
        if (slides.length === 0) return;

        // Rimuove la classe active da tutte le slide
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    window.changeSlide = function(direction) {
        
        clearInterval(sliderInterval);
        
        showSlide(currentSlide + direction);
        
        startAutoPlay(); 
        console.log("Cambio manuale: Slide corrente " + (currentSlide + 1));
    };
    function startAutoPlay() {
        sliderInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 7000);
    }

    if (slides.length > 0) {
        showSlide(0);
        startAutoPlay();
    } else {
        console.error("Errore: Nessuna slide trovata nel DOM.");
    }
});