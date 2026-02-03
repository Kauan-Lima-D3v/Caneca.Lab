window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 1500);
});

// Efeito de Menu Sticky (Gruda no topo ao rolar)
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// 1. Scroll Suave Corrigido
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, 
                behavior: 'smooth'
            });
        }
    });
});

// 2. Loader Ultra-Lento (9 Segundos de Imersão)
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const body = document.body;

    // Impede o scroll durante a apresentação da marca
    body.style.overflow = 'hidden';
    
    // 9000ms = 9 segundos
    setTimeout(() => {
        loader.classList.add('finished');
        
        // Libera o scroll suavemente após a cortina começar a subir
        setTimeout(() => {
            body.style.overflow = 'auto';
        }, 1500);

        // Remove o loader após as camadas subirem
        setTimeout(() => {
            loader.style.display = 'none';
        }, 3000); 
    }, 9000); 
});