// ============================================
// MAIN.JS - PRODUCTION READY v3.0 (CLEANED)
// ============================================

(function() {
    'use strict';

    // ===== CONFIG =====
    const CONFIG = {
        navScrollThreshold: 50,
        mobileBreakpoint: 991,
        scrollOffset: 20,
        animationDelay: 100
    };

    // ===== INITIALIZATION =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Update year
        const yearEl = document.getElementById('currentYear');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Initialize modules
        initNavbar();
        initMobileMenu();
        initSmoothScroll();
        initScrollReveal();
        initServiceScroll();
        initContactForm();
        initImageFallbacks();
        initAccessibility();

        // AOS (if available)
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100,
                easing: 'ease-out-cubic',
                disable: window.innerWidth < 768
            });
        }
    }

    // ============================================
    // MODULE 1: NAVBAR
    // ============================================
    function initNavbar() {
        const navbar = document.getElementById('mainNav');
        if (!navbar) return;

        let ticking = false;
        let currentSection = 'hero';

        function updateNavbar() {
            // Scrolled state
            navbar.classList.toggle('scrolled', window.pageYOffset > CONFIG.navScrollThreshold);
            
            // Active link
            updateActiveLink();
            ticking = false;
        }

        function updateActiveLink() {
            const sections = document.querySelectorAll('section[id], header[id]');
            const navLinks = document.querySelectorAll('.nav-link:not(.nav-link-cta)');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link:not(.mobile-nav-cta)');
            
            const scrollPos = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            
            // At top
            if (scrollPos < 100) {
                currentSection = 'hero';
            }
            // At bottom
            else if (scrollPos + windowHeight >= docHeight - 50) {
                const lastSection = sections[sections.length - 1];
                if (lastSection) currentSection = lastSection.id;
            }
            // Normal scroll
            else {
                sections.forEach(section => {
                    if (scrollPos >= section.offsetTop - 150) {
                        currentSection = section.id;
                    }
                });
            }

            // Update links
            const activeHref = '#' + currentSection;
            
            navLinks.forEach(link => {
                const isActive = link.getAttribute('href') === activeHref;
                link.classList.toggle('active', isActive);
                isActive ? link.setAttribute('aria-current', 'page') : link.removeAttribute('aria-current');
            });
            
            mobileNavLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === activeHref);
            });
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        }, { passive: true });

        updateNavbar();
    }

    // ============================================
    // MODULE 2: MOBILE MENU
    // ============================================
    function initMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const mobileClose = document.getElementById('mobileClose');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        if (!navToggle || !mobileMenu) return;

        let touchStartX = 0;
        let scrollPosition = 0;

        function openMenu() {
            scrollPosition = window.pageYOffset;
            
            navToggle.classList.add('active');
            navToggle.setAttribute('aria-expanded', 'true');
            mobileMenu.classList.add('active');
            mobileMenu.setAttribute('aria-hidden', 'false');
            if (mobileOverlay) mobileOverlay.classList.add('active');
            
            document.body.classList.add('menu-open');
            document.body.style.top = `-${scrollPosition}px`;
            
            setTimeout(() => {
                const firstLink = mobileMenu.querySelector('.mobile-nav-link');
                if (firstLink) firstLink.focus();
            }, CONFIG.animationDelay);
        }

        function closeMenu() {
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('active');
            mobileMenu.setAttribute('aria-hidden', 'true');
            if (mobileOverlay) mobileOverlay.classList.remove('active');
            
            document.body.classList.remove('menu-open');
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition);
            
            setTimeout(() => navToggle.focus(), CONFIG.animationDelay);
        }

        function toggleMenu() {
            mobileMenu.classList.contains('active') ? closeMenu() : openMenu();
        }

        // Event listeners
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });
        
        if (mobileClose) mobileClose.addEventListener('click', closeMenu);
        if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

        // Nav links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    closeMenu();
                    setTimeout(() => scrollToTarget(href.substring(1)), 350);
                }
            });
        });

        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Swipe to close
        mobileMenu.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        mobileMenu.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            if (touchEndX - touchStartX > 50) closeMenu();
        }, { passive: true });

        // Close on resize to desktop
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > CONFIG.mobileBreakpoint && mobileMenu.classList.contains('active')) {
                    closeMenu();
                }
            }, 250);
        });
    }

    // ============================================
    // MODULE 3: SMOOTH SCROLL
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (!href || href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    scrollToTarget(href.substring(1));
                    history.pushState(null, null, href);
                }
            });
        });
    }

    function scrollToTarget(targetId) {
        const target = document.getElementById(targetId);
        const navbar = document.getElementById('mainNav');
        
        if (!target) return;

        const navHeight = navbar ? navbar.offsetHeight : 72;
        const targetPosition = target.offsetTop - navHeight - CONFIG.scrollOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // ============================================
    // MODULE 4: SCROLL REVEAL SYSTEM
    // ============================================
    function initScrollReveal() {
        // Create scroll progress indicator
        const scrollProgress = document.createElement('div');
        scrollProgress.className = 'scroll-progress';
        document.body.appendChild(scrollProgress);

        // Section reveal observer
        const sections = document.querySelectorAll(
            '.about-section, #services, #engagement, .youtube-section, #contact'
        );

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                    entry.target.classList.add('in-view');
                }
            });
        }, {
            rootMargin: '-10% 0px -10% 0px',
            threshold: [0, 0.1, 0.2]
        });

        sections.forEach(section => sectionObserver.observe(section));

        // Individual element reveal observer
        const revealElements = document.querySelectorAll(
            '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-fade'
        );

        const elementObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    elementObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        });

        revealElements.forEach(el => elementObserver.observe(el));

        // Stagger children
        const staggerContainers = document.querySelectorAll('.stagger-children');
        
        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    staggerObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        staggerContainers.forEach(container => staggerObserver.observe(container));

        // Scroll progress update
        let ticking = false;

        function updateScrollProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = scrollPercent + '%';
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollProgress);
                ticking = true;
            }
        }, { passive: true });

        updateScrollProgress();
    }

    // ============================================
    // MODULE 5: SERVICE SCROLL INDICATORS
    // ============================================
    function initServiceScroll() {
        if (window.innerWidth >= 768) return;

        const servicesRow = document.getElementById('services-row');
        const scrollIndicator = document.getElementById('scroll-indicator');

        if (!servicesRow || !scrollIndicator) return;

        const indicators = scrollIndicator.querySelectorAll('span');
        let ticking = false;

        function updateIndicators() {
            const scrollLeft = servicesRow.scrollLeft;
            const maxScroll = servicesRow.scrollWidth - servicesRow.clientWidth;

            if (maxScroll <= 0) {
                ticking = false;
                return;
            }

            const scrollPercent = scrollLeft / maxScroll;
            const activeIndex = Math.min(
                Math.round(scrollPercent * (indicators.length - 1)),
                indicators.length - 1
            );

            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === activeIndex);
            });

            ticking = false;
        }

        servicesRow.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateIndicators);
                ticking = true;
            }
        }, { passive: true });

        updateIndicators();
    }

    // ============================================
    // MODULE 6: CONTACT FORM
    // ============================================
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const thankYouPopup = document.getElementById('thankYouPopup');
        const closePopupBtn = document.getElementById('closePopupBtn');

        if (!contactForm || !submitBtn) return;

        const btnText = submitBtn.querySelector('.btn-text');
        const btnSpinner = submitBtn.querySelector('.btn-spinner');
        const formInputs = contactForm.querySelectorAll('input[required], textarea[required]');

        // Form submission
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }
            
            // Show loading
            setLoading(true);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: { 'Accept': 'application/json' }
                });

                showThankYou();
                contactForm.reset();
                removeValidationClasses();
            } catch (error) {
                // Show popup anyway (FormSubmit usually works)
                showThankYou();
                contactForm.reset();
            } finally {
                setLoading(false);
            }
        });

        function setLoading(loading) {
            submitBtn.disabled = loading;
            if (btnText) btnText.classList.toggle('d-none', loading);
            if (btnSpinner) btnSpinner.classList.toggle('d-none', !loading);
        }

        // Real-time validation
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() !== '') {
                    this.classList.toggle('is-valid', this.validity.valid);
                    this.classList.toggle('is-invalid', !this.validity.valid);
                }
            });

            input.addEventListener('input', function() {
                this.classList.remove('is-valid', 'is-invalid');
            });
        });

        function removeValidationClasses() {
            formInputs.forEach(input => {
                input.classList.remove('is-valid', 'is-invalid');
            });
        }

        // Popup functions
        function showThankYou() {
            if (thankYouPopup) {
                thankYouPopup.classList.add('show');
                document.body.style.overflow = 'hidden';
                setTimeout(() => closePopupBtn?.focus(), 400);
            }
        }

        function closeThankYou() {
            if (thankYouPopup) {
                thankYouPopup.classList.remove('show');
                document.body.style.overflow = '';
            }
        }

        // Make globally available
        window.showThankYou = showThankYou;
        window.closeThankYou = closeThankYou;

        // Close handlers
        if (closePopupBtn) closePopupBtn.addEventListener('click', closeThankYou);

        if (thankYouPopup) {
            thankYouPopup.addEventListener('click', (e) => {
                if (e.target === thankYouPopup) closeThankYou();
            });

            thankYouPopup.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    closePopupBtn?.focus();
                }
                if (e.key === 'Escape') closeThankYou();
            });
        }
    }

    // ============================================
    // MODULE 7: IMAGE FALLBACKS
    // ============================================
    function initImageFallbacks() {
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', function() {
                if (this.dataset.fallbackApplied) return;
                this.dataset.fallbackApplied = 'true';

                if (this.classList.contains('hero-photo')) {
                    this.style.display = 'none';
                    const parent = this.parentNode;
                    
                    if (parent && !parent.querySelector('.fallback-initials')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-initials';
                        fallback.textContent = 'BJ';
                        Object.assign(fallback.style, {
                            width: '100%',
                            aspectRatio: '1/1',
                            background: 'linear-gradient(135deg, #059669, #10b981)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            fontWeight: '700',
                            color: 'white',
                            borderRadius: '24px'
                        });
                        parent.appendChild(fallback);
                    }
                } else {
                    Object.assign(this.style, {
                        background: '#e2e8f0',
                        padding: '20%',
                        minHeight: '200px'
                    });
                }
            });
        });
    }

    // ============================================
    // MODULE 8: ACCESSIBILITY
    // ============================================
    function initAccessibility() {
        // Skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#hero';
        skipLink.className = 'skip-to-main';
        skipLink.textContent = 'Skip to main content';
        
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Focus management for reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.scrollBehavior = 'auto';
        }
    }

})();



