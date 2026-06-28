// Função para rolar suavemente até uma seção
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Adicionar efeito de clique nos links da navegação
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

// Manipular envio do formulário de contato
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
    e.target.reset();
});

// Adicionar animação ao carregar a página
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.service-card');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animation = 'fadeIn 0.5s ease-in';
        }, index * 100);
    });
});

// Adicionar classe ao navbar quando scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});