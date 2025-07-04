// ================================================================================================
// NECIB LUXE WASH - CLEAN JAVASCRIPT SYSTEM (FINAL VERSION)
// ================================================================================================

// Premium Clean Caractéristiques System
function initCleanCaracteristiquesSystem() {
    console.log('✨ Initializing Clean Caractéristiques System...');
    
    const featureCards = document.querySelectorAll('.feature-book-card');
    
    if (!featureCards.length) {
        console.log('📝 No book feature cards found');
        return;
    }
    
    console.log(`📝 Found ${featureCards.length} book feature cards`);
    
    // Add enhanced hover effects
    featureCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.boxShadow = '0 15px 40px rgba(255, 107, 53, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Enhanced Navigation System
function enhanceNavigation() {
    console.log('🧭 Enhancing navigation...');
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    console.log('✅ Navigation enhanced');
}

// PDF Download Enhancement
function enhancePDFDownloads() {
    console.log('📄 Enhancing PDF downloads...');
    
    document.querySelectorAll('a[href*=".pdf"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Add download tracking or analytics here if needed
            console.log(`📥 PDF download: ${this.href}`);
        });
    });
    
    console.log('✅ PDF downloads enhanced');
}

// Contact Form Enhancement
function enhanceContactForm() {
    console.log('📧 Enhancing contact form...');
    
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#ff6b35';
                    isValid = false;
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (isValid) {
                alert('Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.');
                form.reset();
            } else {
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
    }
    
    console.log('✅ Contact form enhanced');
}

// Newsletter Enhancement
function enhanceNewsletter() {
    console.log('📰 Enhancing newsletter...');
    
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const input = newsletterForm.querySelector('input[type="email"]');
        const button = newsletterForm.querySelector('button');
        
        if (input && button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const email = input.value.trim();
                if (email && email.includes('@')) {
                    alert('Merci pour votre inscription à notre newsletter!');
                    input.value = '';
                } else {
                    alert('Veuillez entrer une adresse email valide.');
                }
            });
        }
    }
    
    console.log('✅ Newsletter enhanced');
}

// Logo Navigation Enhancement
function enhanceLogoNavigation() {
    console.log('🏠 Enhancing logo navigation...');
    
    const logos = document.querySelectorAll('.nav-logo, .footer-logo');
    logos.forEach(logo => {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    console.log('✅ Logo navigation enhanced');
}

// Premium Back to Top Button
function createPremiumBackToTop() {
    console.log('⬆️ Creating premium back to top button...');
    
    // Check if button already exists
    if (document.querySelector('.back-to-top-premium')) {
        console.log('⬆️ Back to top button already exists');
        return;
    }
    
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top-premium';
    backToTop.innerHTML = `
        <div class="btn-bg"></div>
        <div class="btn-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 15l-6-6-6 6"></path>
            </svg>
        </div>
        <div class="btn-progress">
            <svg class="progress-ring" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"></circle>
                <circle cx="18" cy="18" r="16" fill="none" stroke="#ff6b35" stroke-width="2" stroke-dasharray="0 100"></circle>
            </svg>
        </div>
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
        // Update progress ring
        const progressRing = backToTop.querySelector('.progress-ring circle:last-child');
        if (progressRing) {
            progressRing.style.strokeDasharray = `${scrollPercent} 100`;
        }
    });
    
    // Click to scroll to top
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    console.log('✅ Premium back to top button created');
}

// Premium Loader (if needed)
function initPremiumLoader() {
    console.log('🎬 Starting Premium Loader...');
    
    const loader = document.querySelector('.loader');
    if (!loader) {
        console.log('⚠️ No loader found, skipping...');
        return;
    }
    
    // Simulate loading progress
    const progressBar = loader.querySelector('.progress-bar');
    if (progressBar) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                setTimeout(() => {
                    loader.classList.add('loaded');
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 1000);
                }, 500);
            }
            progressBar.style.width = progress + '%';
        }, 200);
    }
    
    console.log('✅ Premium Loader completed');
}

// GSAP ScrollTrigger Initialization (if GSAP is loaded)
function initGSAPScrollTrigger() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        console.log('✅ GSAP ScrollTrigger initialized');
        gsap.registerPlugin(ScrollTrigger);
        
        // Add scroll animations for feature cards
        gsap.from('.feature-book-card', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.features-grid-section',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    } else {
        console.log('⚠️ GSAP not found, skipping scroll animations');
    }
}

// Small Animations Enhancement
function smallAnimations() {
    console.log('✨ Initializing small animations...');
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-book-card, .document-card, .partner-card');
        
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial setup
    const elements = document.querySelectorAll('.feature-book-card, .document-card, .partner-card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
    });
    
    // Listen for scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    console.log(`✅ Enhanced small animations initialized with ${elements.length} elements`);
}

// Main Initialization Function
function initNecibLuxeWash() {
    console.log('🚀 Initializing Necib Luxe Wash...');
    
    // Initialize all systems
    initGSAPScrollTrigger();
    initPremiumLoader();
    initCleanCaracteristiquesSystem();
    smallAnimations();
    enhanceContactForm();
    enhanceNavigation();
    enhancePDFDownloads();
    enhanceNewsletter();
    enhanceLogoNavigation();
    createPremiumBackToTop();
    
    console.log('✅ Necib Luxe Wash initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNecibLuxeWash);
} else {
    initNecibLuxeWash();
}
