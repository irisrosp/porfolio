document.addEventListener("DOMContentLoaded", () => {

    const arrow = document.getElementById("nextArrow");
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Mostrar flecha tras 2 segundos
    setTimeout(() => {
        arrow.classList.add("show");
    }, 2000);

    // Función para actualizar el icono de la flecha según el slide actual
    function updateArrowIcon() {
        if (currentSlide === 0) {
            // Slide 1: flecha derecha (avanzar)
            arrow.innerHTML = "&#10095;"; // >
            arrow.style.right = "30px";
            arrow.style.left = "auto";
        } else if (currentSlide === 1) {
            // Slide 2: flecha izquierda (retroceder)
            arrow.innerHTML = "&#10094;"; // <
            arrow.style.left = "30px";
            arrow.style.right = "auto";
        }
    }

    // Función para cambiar de slide
    function changeSlide(direction) {
        if (totalSlides === 0) return;
        
        slides[currentSlide].classList.remove("active");
        
        if (direction === "next") {
            currentSlide = (currentSlide + 1) % totalSlides;
        } else if (direction === "prev") {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        }
        
        slides[currentSlide].classList.add("active");
        updateArrowIcon();
    }

    // Al hacer clic en la flecha, decidir si avanzar o retroceder según el slide
    arrow.addEventListener("click", () => {
        if (currentSlide === 0) {
            changeSlide("next");
        } else if (currentSlide === 1) {
            changeSlide("prev");
        }
    });

    // Inicializar icono correcto (por si acaso)
    updateArrowIcon();

    // LÓGICA DE LOS BOTONES
    const botones = document.querySelectorAll(".project-button");
    
    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const proyecto = boton.getAttribute("data-proyecto");
            
            if (proyecto === "teatraviesa") {
                window.open("teatraviesa.html", "_blank");
            } else if (proyecto === "dios-coche") {
                alert("Pendiente de subirse a la web");
            }
        });
    });
});
