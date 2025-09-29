// Smooth scrolling para os botões CTA
function scrollToPlans() {
    document.getElementById('pricing').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// FAQ Toggle Function
function toggleFaq(questionElement) {
    const faqItem = questionElement.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const isActive = questionElement.classList.contains('active');
    
    // Fecha todos os outros FAQs
    document.querySelectorAll('.faq-question.active').forEach(activeQuestion => {
        if (activeQuestion !== questionElement) {
            activeQuestion.classList.remove('active');
            activeQuestion.parentElement.querySelector('.faq-answer').classList.remove('active');
        }
    });
    
    // Toggle do FAQ atual
    if (isActive) {
        questionElement.classList.remove('active');
        answer.classList.remove('active');
    } else {
        questionElement.classList.add('active');
        answer.classList.add('active');
    }
}

// Animações quando elementos entram na viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Adiciona classe de animação quando elemento entra na viewport
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.benefit-card, .testimonial-card, .bonus-card, .pricing-card');
    
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animate-in');
        }
    });
}

// Countdown Timer para Urgência
function startCountdown() {
    // Define o tempo para 24 horas a partir de agora
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        if (distance < 0) {
            // Se acabou o tempo, reinicia para 24h
            const newEndTime = new Date().getTime() + (24 * 60 * 60 * 1000);
            localStorage.setItem('countdownEndTime', newEndTime);
            return;
        }
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const timer = document.getElementById('countdown-timer');
        if (timer) {
            timer.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }
    
    // Atualiza a cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Executa imediatamente
}

// Contador de urgência (opcional - pode ser atualizado para data real)
function updateUrgencyCounter() {
    const examDate = new Date('2025-11-03'); // Data do ENEM 2025
    const now = new Date();
    const difference = examDate - now;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    if (days > 0) {
        const urgencyText = document.querySelector('.urgency-text');
        if (urgencyText && days <= 45) {
            // Mantém o texto de urgência atual para números menores
            urgencyText.innerHTML = `🚨 ÚLTIMAS 72H: Apenas 47 VAGAS restantes para o ENEM 2025 (${days} dias restantes)`;
        }
    }
}

// Efeito parallax suave no hero
function handleParallax() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
}

// Adiciona efeito de digitação ao título principal
function typeWriter() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const originalText = title.innerHTML;
    title.innerHTML = '';
    
    let i = 0;
    const speed = 50;
    
    function type() {
        if (i < originalText.length) {
            title.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    // Inicia após um pequeno delay
    setTimeout(type, 500);
}

// Adiciona efeito de hover nos cards
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.benefit-card, .testimonial-card, .bonus-card, .pricing-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Adiciona efeito de brilho nos botões CTA
function addButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button, .pricing-cta');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 32px rgba(0, 255, 136, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// Adiciona efeito de scroll suave para toda a página
function smoothScrolling() {
    // Para navegadores que não suportam scroll-behavior: smooth
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Adiciona loading state aos botões de compra
function addLoadingStates() {
    const purchaseButtons = document.querySelectorAll('.pricing-cta');
    
    purchaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSANDO...';
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            // Simula carregamento (remover em produção)
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 2000);
        });
    });
}

// Adiciona animação de entrada escalonada para os elementos
function staggeredAnimation() {
    const benefitCards = document.querySelectorAll('.benefit-card');
    const bonusCards = document.querySelectorAll('.bonus-card');
    
    benefitCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    bonusCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
}

// Observador de interseção para animações
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Para animações especiais em seções específicas
                if (entry.target.classList.contains('benefits')) {
                    entry.target.querySelectorAll('.benefit-card').forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('slide-in-left');
                        }, index * 100);
                    });
                }
                
                if (entry.target.classList.contains('bonus')) {
                    entry.target.querySelectorAll('.bonus-card').forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('slide-in-up');
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observa todas as seções principais
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Adiciona CSS para animações
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .slide-in-left {
            animation: slideInLeft 0.6s ease forwards;
        }
        
        .slide-in-up {
            animation: slideInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        /* Scroll suave para toda a página */
        html {
            scroll-behavior: smooth;
        }
        
        /* Animação de loading */
        .fa-spinner {
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona estilos de animação
    addAnimationStyles();
    
    // Configura observador de interseção
    setupIntersectionObserver();
    
    // Inicia contadores
    startCountdown();
    updateUrgencyCounter();
    
    // Adiciona efeitos
    addCardHoverEffects();
    addButtonEffects();
    smoothScrolling();
    addLoadingStates();
    staggeredAnimation();
    
    // Atualiza contador de urgência a cada hora
    setInterval(updateUrgencyCounter, 3600000);
});

// Controle do botão flutuante
function handleFloatingCTA() {
    const floatingCTA = document.getElementById('floating-cta');
    const heroSection = document.querySelector('.hero');
    const pricingSection = document.getElementById('pricing');
    
    if (!floatingCTA || !heroSection || !pricingSection) return;
    
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const pricingTop = pricingSection.offsetTop;
    const scrollPosition = window.pageYOffset;
    
    // Mostra o botão depois do hero e antes da seção de preços
    if (scrollPosition > heroBottom && scrollPosition < pricingTop - 200) {
        floatingCTA.classList.add('show');
    } else {
        floatingCTA.classList.remove('show');
    }
}

// Event listeners para scroll
window.addEventListener('scroll', function() {
    handleScrollAnimations();
    handleParallax();
    handleFloatingCTA();
});

// Previne o comportamento padrão dos links de exemplo
document.addEventListener('click', function(e) {
    if (e.target.closest('button[onclick*="#"]') || e.target.closest('a[href="#"]')) {
        e.preventDefault();
    }
});

// Adiciona feedback visual para cliques
document.addEventListener('click', function(e) {
    if (e.target.matches('.cta-button, .pricing-cta')) {
        // Cria efeito ripple
        const button = e.target;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// CSS para o efeito ripple
document.addEventListener('DOMContentLoaded', function() {
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .cta-button, .pricing-cta {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Configurar popup de saída
    setupExitIntent();
});

// Sistema de Exit Intent
let exitIntentShown = false;
let exitTimer;

function setupExitIntent() {
    // Detecta quando mouse sai da janela
    document.addEventListener('mouseleave', handleExitIntent);
    
    // Configurar botões do popup
    const closeButton = document.querySelector('.exit-popup-close');
    const noButton = document.querySelector('.exit-cta-no');
    const overlay = document.querySelector('.exit-popup-overlay');
    
    if (closeButton) {
        closeButton.addEventListener('click', closeExitPopup);
    }
    
    if (noButton) {
        noButton.addEventListener('click', closeExitPopup);
    }
    
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeExitPopup();
            }
        });
    }
}

function handleExitIntent(e) {
    // Verificar se o mouse realmente saiu da janela (topo da página)
    if (e.clientY <= 0 && !exitIntentShown) {
        showExitPopup();
        exitIntentShown = true;
    }
}

function showExitPopup() {
    const overlay = document.querySelector('.exit-popup-overlay');
    if (overlay) {
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        startExitTimer();
    }
}

function closeExitPopup() {
    const overlay = document.querySelector('.exit-popup-overlay');
    if (overlay) {
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
        clearInterval(exitTimer);
    }
}

function startExitTimer() {
    const timerElement = document.getElementById('exit-timer');
    if (!timerElement) return;
    
    let timeLeft = 10 * 60; // 10 minutos
    
    exitTimer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        timerElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(exitTimer);
            timerElement.textContent = "00:00";
            // Opcional: fechar popup automaticamente
            setTimeout(closeExitPopup, 2000);
        }
    }, 1000);
}

// Função para redirecionar do popup de saída
function exitRedirectToPayment() {
    // Redireciona para a opção mais barata
    window.open('https://app.cakto.com.br/checkout/re-ret-final', '_blank');
    closeExitPopup();
}