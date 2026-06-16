// Aguarda que todo o DOM (HTML) esteja carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. Efeito Dinâmico no Cabeçalho ao fazer Scroll
    // ==========================================================================
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
            header.style.padding = '15px 10px'; // Diminui ligeiramente a altura
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            header.style.padding = '20px 10px'; // Volta ao tamanho original
        }
    });

    // ==========================================================================
    // 2. Scroll Suave para as Secções (Links do Menu)
    // ==========================================================================
    const linksMenu = document.querySelectorAll('nav ul li a, .btn');

    linksMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Verifica se o link é uma âncora interna (começa com #)
            if (targetId.startsWith('#')) {
                e.preventDefault(); // Evita o comportamento padrão de salto abrupto
                
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    // Calcula a posição descontando a altura do header fixo
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================================================
    // 3. Validação e Simulação de Envio do Formulário de Contacto
    // ==========================================================================
    const formContacto = document.querySelector('.contact-container form');

    if (formContacto) {
        formContacto.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página

            // Captura os dados dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const interesse = document.getElementById('interesse').value;
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação simples de segurança
            if (nome === '' || email === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Simulação de envio (aqui ligarias à tua API ou Backend futuramente)
            console.log('--- Novo Contacto Recebido ---');
            console.log(`Nome: ${nome}`);
            console.log(`E-mail: ${email}`);
            console.log(`Interesse: ${interesse}`);
            console.log(`Mensagem: ${mensagem}`);

            // Exibe mensagem de sucesso ao utilizador
            alert(`Obrigado pelo seu contacto, ${nome}!\nA equipa da Thadeu Systems responderá ao seu e-mail (${email}) o mais breve possível.`);

            // Limpa o formulário após o envio bem-sucedido
            formContacto.reset();
        });
    }
});
