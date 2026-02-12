// ============================================
// SAMPLE.JS - FINAL CLEAN VERSION
// All conflicts resolved, all fixes implemented
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    "use strict";
    
    // ===== DOM ELEMENTS =====
    const navbar = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileClose = document.getElementById('mobileClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // ===== FIX 1: Navbar underline fix =====
    function fixNavbarUnderline() {
        document.querySelectorAll('.nav-link').forEach(link => {
            if (!link.classList.contains('nav-link-cta')) {
                link.style.position = 'relative';
            }
        });
    }
    fixNavbarUnderline();
    
    // ===== FIX 2: YouTube button mobile fix =====
    function fixYouTubeButtonOnMobile() {
        const btnChannel = document.querySelector('.btn-channel');
        if (!btnChannel) return;
        
        if (window.innerWidth <= 767) {
            // Mobile styles
            btnChannel.style.width = '100%';
            btnChannel.style.justifyContent = 'center';
            btnChannel.style.padding = '16px 24px';
            btnChannel.style.fontSize = '16px';
            btnChannel.style.borderRadius = '50px';
            btnChannel.style.border = '2px solid #ff0000';
            btnChannel.style.background = 'white';
            btnChannel.style.color = '#ff0000';
            btnChannel.style.boxShadow = '0 4px 12px rgba(255, 0, 0, 0.15)';
            
            const icon = btnChannel.querySelector('i');
            if (icon) {
                icon.style.fontSize = '20px';
                icon.style.color = '#ff0000';
            }
            
            // Section header adjustments
            const sectionHeader = document.querySelector('.youtube-section .section-header');
            if (sectionHeader) {
                sectionHeader.style.flexDirection = 'column';
                sectionHeader.style.alignItems = 'stretch';
                sectionHeader.style.gap = '20px';
            }
            
            const headerLeft = document.querySelector('.header-left');
            if (headerLeft) {
                headerLeft.style.width = '100%';
                headerLeft.style.textAlign = 'center';
            }
            
            const sectionBadge = document.querySelector('.section-badge');
            if (sectionBadge) {
                sectionBadge.style.marginLeft = 'auto';
                sectionBadge.style.marginRight = 'auto';
            }
            
            const sectionTitle = document.querySelector('.section-title');
            if (sectionTitle) {
                sectionTitle.style.textAlign = 'center';
            }
            
        } else {
            // Desktop styles - reset
            btnChannel.style.width = '';
            btnChannel.style.justifyContent = '';
            btnChannel.style.padding = '14px 24px';
            btnChannel.style.fontSize = '14px';
            btnChannel.style.borderRadius = '12px';
            btnChannel.style.border = '1px solid var(--neutral-200)';
            btnChannel.style.background = 'white';
            btnChannel.style.color = 'var(--neutral-800)';
            btnChannel.style.boxShadow = 'none';
            
            const icon = btnChannel.querySelector('i');
            if (icon) {
                icon.style.fontSize = '18px';
                icon.style.color = '#ff0000';
            }
            
            // Reset section header
            const sectionHeader = document.querySelector('.youtube-section .section-header');
            if (sectionHeader) {
                sectionHeader.style.flexDirection = '';
                sectionHeader.style.alignItems = 'flex-end';
                sectionHeader.style.gap = '24px';
            }
            
            const headerLeft = document.querySelector('.header-left');
            if (headerLeft) {
                headerLeft.style.width = '';
                headerLeft.style.textAlign = '';
            }
            
            const sectionBadge = document.querySelector('.section-badge');
            if (sectionBadge) {
                sectionBadge.style.marginLeft = '';
                sectionBadge.style.marginRight = '';
            }
            
            const sectionTitle = document.querySelector('.section-title');
            if (sectionTitle) {
                sectionTitle.style.textAlign = '';
            }
        }
    }

    // ===== FIX 3: Mobile Hero Spacing =====
    function fixMobileHeroSpacing() {
        if (window.innerWidth <= 767) {
            // Hero section adjustments
            const heroSection = document.querySelector('.hero-premium');
            if (heroSection) {
                heroSection.style.paddingTop = '40px';
                heroSection.style.paddingBottom = '40px';
                heroSection.style.minHeight = 'auto';
            }
            
            const heroRow = document.querySelector('.hero-premium .row');
            if (heroRow) {
                heroRow.style.minHeight = 'auto';
            }
            
            const contentWrapper = document.querySelector('.hero-content-wrapper');
            if (contentWrapper) {
                contentWrapper.style.paddingTop = '0';
                contentWrapper.style.paddingBottom = '20px';
            }
            
            const visualWrapper = document.querySelector('.hero-visual-wrapper');
            if (visualWrapper) {
                visualWrapper.style.marginBottom = '0';
                visualWrapper.style.padding = '10px';
            }
            
            const photoContainer = document.querySelector('.photo-container');
            if (photoContainer) {
                photoContainer.style.maxWidth = '280px';
            }
            
            const heroLabel = document.querySelector('.hero-label');
            if (heroLabel) {
                heroLabel.style.marginBottom = '16px';
                heroLabel.style.padding = '8px 16px';
            }
            
            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                heroTitle.style.marginBottom = '12px';
            }
            
            const titlePrimary = document.querySelector('.title-primary');
            if (titlePrimary) {
                titlePrimary.style.fontSize = '1.9rem';
                titlePrimary.style.marginBottom = '2px';
            }
            
            const titleAccent = document.querySelector('.title-accent');
            if (titleAccent) {
                titleAccent.style.fontSize = '1.9rem';
            }
            
            const heroDesc = document.querySelector('.hero-description');
            if (heroDesc) {
                heroDesc.style.marginBottom = '24px';
                heroDesc.style.fontSize = '0.95rem';
                heroDesc.style.lineHeight = '1.5';
            }
            
            const heroCta = document.querySelector('.hero-cta');
            if (heroCta) {
                heroCta.style.gap = '12px';
            }
            
        } else {
            // Reset desktop styles
            const elements = [
                '.hero-premium', '.hero-premium .row', '.hero-content-wrapper',
                '.hero-visual-wrapper', '.photo-container', '.hero-label',
                '.hero-title', '.title-primary', '.title-accent',
                '.hero-description', '.hero-cta'
            ];
            
            elements.forEach(selector => {
                const el = document.querySelector(selector);
                if (el) {
                    if (selector === '.hero-premium') {
                        el.style.paddingTop = '';
                        el.style.paddingBottom = '';
                        el.style.minHeight = '';
                    } else if (selector === '.hero-premium .row') {
                        el.style.minHeight = '';
                    } else if (selector === '.hero-content-wrapper') {
                        el.style.paddingTop = '';
                        el.style.paddingBottom = '';
                    } else if (selector === '.hero-visual-wrapper') {
                        el.style.marginBottom = '';
                        el.style.padding = '';
                    } else if (selector === '.photo-container') {
                        el.style.maxWidth = '';
                    } else if (selector === '.hero-label') {
                        el.style.marginBottom = '';
                        el.style.padding = '';
                    } else if (selector === '.hero-title') {
                        el.style.marginBottom = '';
                    } else if (selector === '.title-primary') {
                        el.style.fontSize = '';
                        el.style.marginBottom = '';
                    } else if (selector === '.title-accent') {
                        el.style.fontSize = '';
                    } else if (selector === '.hero-description') {
                        el.style.marginBottom = '';
                        el.style.fontSize = '';
                        el.style.lineHeight = '';
                    } else if (selector === '.hero-cta') {
                        el.style.gap = '';
                    }
                }
            });
            
            // Reset buttons
            const btnPrimary = document.querySelector('.btn-primary-glow');
            if (btnPrimary) btnPrimary.style.padding = '';
            
            const btnSecondary = document.querySelector('.btn-secondary-glass');
            if (btnSecondary) btnSecondary.style.padding = '';
        }
    }

    // ===== FIX 4: Services Scroll Indicator =====
    function initScrollIndicator() {
        if (window.innerWidth <= 767) {
            const servicesRow = document.querySelector('#services-row');
            const indicators = document.querySelectorAll('#scroll-indicator span');
            
            if (servicesRow && indicators.length) {
                // Remove existing listener if any
                servicesRow.removeEventListener('scroll', handleServicesScroll);
                // Add new listener
                servicesRow.addEventListener('scroll', handleServicesScroll);
                // Initial update
                handleServicesScroll.call(servicesRow);
            }
        }
    }
    
    function handleServicesScroll() {
        const indicators = document.querySelectorAll('#scroll-indicator span');
        if (!indicators.length) return;
        
        const scrollLeft = this.scrollLeft;
        const maxScroll = this.scrollWidth - this.clientWidth;
        
        // Prevent division by zero
        if (maxScroll <= 0) return;
        
        const scrollPercent = scrollLeft / maxScroll;
        const activeIndex = Math.min(
            Math.floor(scrollPercent * indicators.length),
            indicators.length - 1
        );
        
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === activeIndex);
        });
    }

    // ===== FIX 5: Contact Form =====
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = document.getElementById('submitBtn');
            if (!submitBtn) return;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
            
            // Re-enable after 10 seconds (safety net)
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
            }, 10000);
        });
        
        // Check for success parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('success')) {
            const successMsg = document.getElementById('successMessage');
            if (successMsg) {
                successMsg.style.display = 'block';
                
                // Scroll to message
                setTimeout(() => {
                    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
                
                // Hide after 5 seconds
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
                
                // Clean URL
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
    }

    // ===== FIX 6: Mobile Menu Toggle =====
    function openMobileMenu() {
        if (navToggle) navToggle.classList.add('active');
        if (mobileMenu) mobileMenu.classList.add('active');
        if (mobileOverlay) mobileOverlay.classList.add('active');
        document.body.classList.add('menu-open');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        if (navToggle) navToggle.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (mobileOverlay) mobileOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
    
    // Mobile menu event listeners
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
    
    if (mobileClose) {
        mobileClose.addEventListener('click', closeMobileMenu);
    }
    
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close mobile menu on link click
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't close if it's the CTA button (let smooth scroll happen first)
            if (this.classList.contains('mobile-nav-cta')) {
                setTimeout(closeMobileMenu, 300);
            } else {
                closeMobileMenu();
            }
        });
    });

    // ===== FIX 7: Navbar Scroll Effect =====
    function handleScroll() {
        if (!navbar) return;
        
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    // ===== FIX 8: Active Link on Scroll =====
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100; // Offset
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Update desktop nav
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
                
                // Update mobile nav
                mobileNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call

    // ===== FIX 9: Smooth Scrolling =====
    function smoothScrollTo(targetId) {
        const targetSection = document.getElementById(targetId);
        if (!targetSection || !navbar) return;
        
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
    
    // Desktop nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(href.substring(1));
            }
        });
    });
    
    // Mobile nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                setTimeout(() => {
                    smoothScrollTo(href.substring(1));
                }, 300); // Delay for menu close animation
            }
        });
    });

    // ===== FIX 10: Keyboard Navigation =====
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // ===== FIX 11: Window Resize Handler =====
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Fix functions
            fixYouTubeButtonOnMobile();
            fixMobileHeroSpacing();
            initScrollIndicator();
            
            // Close mobile menu on desktop
            if (window.innerWidth > 991 && mobileMenu && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        }, 250);
    });

    // ===== FIX 12: Orientation Change =====
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            fixYouTubeButtonOnMobile();
            fixMobileHeroSpacing();
            initScrollIndicator();
        }, 200);
    });

    // ===== FIX 13: Image Error Handling =====
    function handleBrokenImages() {
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', function() {
                // Don't remove, just add fallback class
                this.style.backgroundColor = '#e2e8f0';
                this.style.padding = '20%';
                this.alt = this.alt || 'Image not available';
                
                // If it's a profile image, add a placeholder with initials
                if (this.classList.contains('hero-photo')) {
                    this.style.display = 'none';
                    const parent = this.parentNode;
                    if (parent && !parent.querySelector('.fallback-initials')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-initials';
                        fallback.innerHTML = 'BJ';
                        fallback.style.cssText = 'width:100%; aspect-ratio:1/1; background:linear-gradient(135deg, #059669, #10b981); display:flex; align-items:center; justify-content:center; font-size:3rem; font-weight:700; color:white; border-radius:24px;';
                        parent.appendChild(fallback);
                    }
                }
            });
        });
    }
    handleBrokenImages();

    // ===== INITIALIZATION =====
    // Run all fix functions on page load
    function initAll() {
        fixYouTubeButtonOnMobile();
        fixMobileHeroSpacing();
        initScrollIndicator();
        initContactForm();
    }
    
    initAll();

}); // ✅ END - ONE LISTENER ONLY