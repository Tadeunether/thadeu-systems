document.addEventListener("DOMContentLoaded", () => {
    // 1. Efeito de Scroll no Header
    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 2. Menu Mobile Toggle (Expansão futura)
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // 3. Controlo do Formulário de Contacto
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Captura dos dados
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value;

            // Alerta temporário / Feedback
            alert(`Obrigado pelo contacto, ${name}! Recebemos a sua mensagem sobre "${service}" e responderemos em breve.`);

            // Limpa o formulário
            contactForm.reset();
        });
    }
});
