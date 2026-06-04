document.addEventListener("DOMContentLoaded", () => {

    const arrow = document.getElementById("nextArrow");
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Mostrar flecha tras 2 segundos
    setTimeout(() => {
        arrow.classList.add("show");
    }, 2000);

    // Función para cambiar de slide
    function nextSlide() {
        if (totalSlides === 0) return;
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add("active");
    }

    // Al hacer clic en la flecha, avanzar al slide 2
    arrow.addEventListener("click", () => {
        nextSlide();
    });

    // LÓGICA DE LOS BOTONES
    const botones = document.querySelectorAll(".project-button");
    
    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const proyecto = boton.getAttribute("data-proyecto");
            
            if (proyecto === "teatraviesa") {
                // Abre TEAtraviesa en nueva pestaña
                window.open("teatraviesa.html", "_blank");
            } else if (proyecto === "dios-coche") {
                // TODAVÍA NO REDIRIGE A NADA (por ahora)
                alert("Próximamente: proyecto sobre fetichismo de la mercancía");
                // window.open("dios-coche.html", "_blank"); // lo activas cuando esté listo
            }
        });
    });
});
