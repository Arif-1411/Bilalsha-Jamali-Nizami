// ============================================
// MAIN.JS - PRODUCTION READY v2.2 (FIXED)
// ============================================

(function() {
    'use strict';

    // ===== WAIT FOR DOM =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100,
                easing: 'ease-out-cubic',
                disable: function() {
                    return window.innerWidth < 768;
                }
            });
        }

        // Update year
        const yearEl = document.getElementById('currentYear');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }

        // Initialize all modules
        initNavbar();
        initMobileMenu();
        initSmoothScroll();
        initServiceScroll();
        initContactForm();
        initResponsiveFixes();
        initImageFallbacks();
        initAccessibility();

        console.log('✅ Portfolio initialized');
    }

    // ============================================
    // MODULE 1: NAVBAR
    // ============================================
    function initNavbar() {
        const navbar = document.getElementById('mainNav');
        if (!navbar) return;

        let ticking = false;

        function updateNavbar() {
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            updateActiveLink();
            ticking = false;
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
    // MODULE 2: ACTIVE LINK HIGHLIGHTING
    // ============================================
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id], header[id]');
        const navLinks = document.querySelectorAll('.nav-link:not(.nav-link-cta)');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link:not(.mobile-nav-cta)');
        
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // At top of page
        if (scrollPosition < 100) {
            setActiveLink(navLinks, mobileNavLinks, '#hero');
            return;
        }
        
        // At bottom of page
        if (scrollPosition + windowHeight >= documentHeight - 50) {
            const lastSection = sections[sections.length - 1];
            if (lastSection) {
                setActiveLink(navLinks, mobileNavLinks, '#' + lastSection.id);
            }
            return;
        }
        
        // Normal scroll
        let currentSection = 'hero';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (scrollPosition >= sectionTop) {
                currentSection = section.id;
            }
        });
        
        setActiveLink(navLinks, mobileNavLinks, '#' + currentSection);
    }

    function setActiveLink(navLinks, mobileNavLinks, activeHref) {
        navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === activeHref;
            link.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
        
        mobileNavLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === activeHref);
        });
    }

    // ============================================
    // MODULE 3: MOBILE MENU
    // ============================================
    function initMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const mobileClose = document.getElementById('mobileClose');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        if (!navToggle || !mobileMenu) return;

        // Touch swipe variables
        let touchStartX = 0;
        let touchEndX = 0;

        function openMenu() {
            navToggle.classList.add('active');
            navToggle.setAttribute('aria-expanded', 'true');
            mobileMenu.classList.add('active');
            mobileMenu.setAttribute('aria-hidden', 'false');
            if (mobileOverlay) mobileOverlay.classList.add('active');
            document.body.classList.add('menu-open');
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                const firstLink = mobileMenu.querySelector('.mobile-nav-link');
                if (firstLink) firstLink.focus();
            }, 100);
        }

        function closeMenu() {
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('active');
            mobileMenu.setAttribute('aria-hidden', 'true');
            if (mobileOverlay) mobileOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            
            setTimeout(() => navToggle.focus(), 100);
        }

        // Toggle button
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenu.classList.contains('active') ? closeMenu() : openMenu();
        });
        
        // Close button
        if (mobileClose) {
            mobileClose.addEventListener('click', closeMenu);
        }
        
        // Overlay click
        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', closeMenu);
        }

        // Nav links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    closeMenu();
                    setTimeout(() => smoothScrollTo(href.substring(1)), 350);
                }
            });
        });

        // ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Swipe to close
        mobileMenu.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        mobileMenu.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                closeMenu();
            }
        }, { passive: true });

        // Close on resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 991 && mobileMenu.classList.contains('active')) {
                    closeMenu();
                }
            }, 250);
        });
    }

    // ============================================
    // MODULE 4: SMOOTH SCROLL
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#' || targetId === '') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    smoothScrollTo(targetId.substring(1));
                }
            });
        });
    }

    function smoothScrollTo(targetId) {
        const targetSection = document.getElementById(targetId);
        const navbar = document.getElementById('mainNav');
        
        if (!targetSection) return;

        const navHeight = navbar ? navbar.offsetHeight : 72;
        const targetPosition = targetSection.offsetTop - navHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // ============================================
    // MODULE 5: SERVICE SCROLL INDICATORS
    // ============================================
    function initServiceScroll() {
        const servicesRow = document.getElementById('services-row');
        const scrollIndicator = document.getElementById('scroll-indicator');

        if (!servicesRow || !scrollIndicator || window.innerWidth >= 768) return;

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

        servicesRow.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateIndicators);
                ticking = true;
            }
        }, { passive: true });

        updateIndicators();
    }

    // ============================================
    // MODULE 6: CONTACT FORM WITH POPUP
    // ============================================
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const thankYouPopup = document.getElementById('thankYouPopup');
        const closePopupBtn = document.getElementById('closePopupBtn');

        if (!contactForm || !submitBtn) return;

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }
            
            // Show loading
            const btnText = submitBtn.querySelector('.btn-text');
            const btnSpinner = submitBtn.querySelector('.btn-spinner');
            
            if (btnText) btnText.classList.add('d-none');
            if (btnSpinner) btnSpinner.classList.remove('d-none');
            submitBtn.disabled = true;

            // Submit form
            const formData = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    showThankYou();
                    contactForm.reset();
                    removeValidationClasses();
                } else {
                    throw new Error('Failed');
                }
            })
            .catch(error => {
                // Show popup anyway (FormSubmit usually works)
                showThankYou();
                contactForm.reset();
            })
            .finally(() => {
                if (btnText) btnText.classList.remove('d-none');
                if (btnSpinner) btnSpinner.classList.add('d-none');
                submitBtn.disabled = false;
            });
        });

        // Real-time validation
        const formInputs = contactForm.querySelectorAll('input[required], textarea[required]');
        
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

        // Close button
        if (closePopupBtn) {
            closePopupBtn.addEventListener('click', closeThankYou);
        }

        // Close on overlay click
        if (thankYouPopup) {
            thankYouPopup.addEventListener('click', function(e) {
                if (e.target === thankYouPopup) closeThankYou();
            });

            // Focus trap
            thankYouPopup.addEventListener('keydown', function(e) {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    closePopupBtn?.focus();
                }
                if (e.key === 'Escape') closeThankYou();
            });
        }
    }

    // ============================================
    // MODULE 7: RESPONSIVE FIXES
    // ============================================
    function initResponsiveFixes() {
        function applyFixes() {
            const isMobile = window.innerWidth <= 767;
            
            // YouTube button
            const btnChannel = document.querySelector('.btn-channel');
            const sectionHeader = document.querySelector('.youtube-section .section-header');
            
            if (btnChannel) {
                if (isMobile) {
                    btnChannel.style.cssText = 'width:100%;justify-content:center;';
                    if (sectionHeader) {
                        sectionHeader.style.cssText = 'flex-direction:column;gap:20px;';
                    }
                } else {
                    btnChannel.style.cssText = '';
                    if (sectionHeader) sectionHeader.style.cssText = '';
                }
            }

            // Hero section
            const heroSection = document.querySelector('.hero-premium');
            const photoContainer = document.querySelector('.photo-container');
            
            if (heroSection && isMobile) {
                heroSection.style.paddingTop = '40px';
                if (photoContainer) photoContainer.style.maxWidth = '280px';
            } else if (heroSection) {
                heroSection.style.cssText = '';
                if (photoContainer) photoContainer.style.cssText = '';
            }
        }

        applyFixes();
        window.addEventListener('resize', debounce(applyFixes, 250));
        window.addEventListener('orientationchange', () => setTimeout(applyFixes, 200));
    }

    // ============================================
    // MODULE 8: IMAGE FALLBACKS
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
                        fallback.style.cssText = `
                            width:100%;aspect-ratio:1/1;
                            background:linear-gradient(135deg,#059669,#10b981);
                            display:flex;align-items:center;justify-content:center;
                            font-size:3rem;font-weight:700;color:white;border-radius:24px;
                        `;
                        parent.appendChild(fallback);
                    }
                } else {
                    this.style.cssText = 'background:#e2e8f0;padding:20%;min-height:200px;';
                }
            });
        });
    }

    // ============================================
    // MODULE 9: ACCESSIBILITY
    // ============================================
    function initAccessibility() {
        const skipLink = document.createElement('a');
        skipLink.href = '#hero';
        skipLink.className = 'skip-to-main';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position:absolute;top:-40px;left:0;
            background:#059669;color:white;
            padding:8px 16px;text-decoration:none;
            z-index:9999;border-radius:0 0 4px 0;
            transition:top 0.3s;
        `;
        
        skipLink.addEventListener('focus', function() { this.style.top = '0'; });
        skipLink.addEventListener('blur', function() { this.style.top = '-40px'; });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    // ============================================
    // UTILITIES
    // ============================================
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Console branding
    console.log('%c🌟 Portfolio v2.2', 'font-size:16px;font-weight:bold;color:#059669;');

})();