document.addEventListener('DOMContentLoaded', () => {
    // Inicialização segura dos Ícones Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Header fixo com sombra/fundo dinâmico ao fazer scroll
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Menu Mobile (Hambúrguer) otimizado
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.getElementById('menuIcon');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isActive = navLinks.classList.contains('active');
            
            // Alterna o ícone de forma segura alterando o atributo e recriando o ícone
            if (menuIcon) {
                menuIcon.setAttribute('data-lucide', isActive ? 'x' : 'menu');
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        });

        // Fechar menu ao clicar num item de navegação
        document.querySelectorAll('.nav-item, .nav-contact').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (menuIcon) {
                    menuIcon.setAttribute('data-lucide', 'menu');
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }
            });
        });
    }

    // Submissão e Validação do Formulário de Contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (!submitBtn) return;

            const originalText = submitBtn.innerHTML;

            // Feedback visual de envio
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'A enviar... <i data-lucide="loader-2" class="spin"></i>';
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            // Simulação de envio bem-sucedido (substituir por integração real se necessário)
            setTimeout(() => {
                alert('Obrigado pelo seu contacto! A equipa da Thadeu Systems responderá muito em breve.');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }, 1200);
        });
    }
});
