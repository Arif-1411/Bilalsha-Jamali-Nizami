// ============================================
// SAMPLE.JS - PRODUCTION READY v2.0
// Optimized, conflict-free, fully integrated
// ============================================

(function() {
    'use strict';

    // ===== WAIT FOR DOM & AOS =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100,
                disable: function() {
                    // Disable on mobile for performance
                    return window.innerWidth < 768;
                }
            });
        }

        // Initialize all modules
        initNavbar();
        initMobileMenu();
        initScrollEffects();
        initServiceScroll();
        initContactForm();
        initResponsiveFixes();
        initImageFallbacks();
        initAccessibility();
    }

    // ============================================
    // MODULE 1: NAVBAR FUNCTIONALITY
    // ============================================
    function initNavbar() {
        const navbar = document.getElementById('mainNav');
        if (!navbar) return;

        let lastScroll = 0;
        let ticking = false;

        function updateNavbar() {
            const currentScroll = window.pageYOffset;

            // Add/remove scrolled class
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Update active link
            updateActiveLink();

            lastScroll = currentScroll;
            ticking = false;
        }

        // Throttled scroll handler
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        });

        // Initial call
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

        if (!navToggle || !mobileMenu || !mobileOverlay) return;

        function openMenu() {
            navToggle.classList.add('active');
            mobileMenu.classList.add('active');
            mobileOverlay.classList.add('active');
            document.body.classList.add('menu-open');
            document.body.style.overflow = 'hidden';
            
            // Trap focus
            mobileMenu.querySelector('a, button')?.focus();
        }

        function closeMenu() {
            navToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
            
            // Return focus to toggle button
            navToggle?.focus();
        }

        function toggleMenu() {
            if (mobileMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        // Event listeners
        navToggle.addEventListener('click', toggleMenu);
        mobileClose?.addEventListener('click', closeMenu);
        mobileOverlay.addEventListener('click', closeMenu);

        // Close on link click
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    closeMenu();
                    
                    // Smooth scroll after menu closes
                    setTimeout(() => {
                        smoothScrollTo(href.substring(1));
                    }, 300);
                }
            });
        });

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Close on desktop resize
        window.addEventListener('resize', debounce(function() {
            if (window.innerWidth > 991 && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        }, 250));
    }

    // ============================================
    // MODULE 3: SCROLL EFFECTS
    // ============================================
    function initScrollEffects() {
        const navLinks = document.querySelectorAll('.nav-link:not(.nav-link-cta)');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        // Smooth scroll for desktop nav
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    smoothScrollTo(href.substring(1));
                }
            });
        });

        // Active link highlighting
        function updateActiveLink() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.pageYOffset + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    // Desktop nav
                    navLinks.forEach(link => {
                        link.classList.toggle('active', 
                            link.getAttribute('href') === '#' + sectionId
                        );
                    });

                    // Mobile nav
                    mobileNavLinks.forEach(link => {
                        link.classList.toggle('active', 
                            link.getAttribute('href') === '#' + sectionId
                        );
                    });
                }
            });
        }

        // Expose to global scope for navbar module
        window.updateActiveLink = updateActiveLink;
    }

    // Smooth scroll helper
    function smoothScrollTo(targetId) {
        const targetSection = document.getElementById(targetId);
        const navbar = document.getElementById('mainNav');
        
        if (!targetSection) return;

        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetSection.offsetTop - navHeight - 20;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // ============================================
    // MODULE 4: SERVICES HORIZONTAL SCROLL
    // ============================================
    function initServiceScroll() {
        const servicesRow = document.querySelector('#services-row');
        const indicators = document.querySelectorAll('#scroll-indicator span');

        if (!servicesRow || !indicators.length) return;

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
        });

        // Initial state
        updateIndicators();

        // Update on window resize
        window.addEventListener('resize', debounce(function() {
            if (window.innerWidth <= 767) {
                updateIndicators();
            }
        }, 250));
    }

    // ============================================
    // MODULE 5: CONTACT FORM
    // ============================================
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const successMessage = document.getElementById('successMessage');

        if (!contactForm || !submitBtn) return;

        // Handle form submission
        contactForm.addEventListener('submit', function(e) {
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending...
            `;

            // Safety timeout (10 seconds)
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
            }, 10000);
        });

        // Check for success parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        
        if (urlParams.get('success') === 'true' && successMessage) {
            successMessage.style.display = 'block';

            // Scroll to message
            setTimeout(() => {
                successMessage.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 100);

            // Auto-hide after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);

            // Clean URL
            window.history.replaceState({}, '', window.location.pathname);
        }

        // Real-time validation feedback
        const formInputs = contactForm.querySelectorAll('input, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() !== '') {
                    if (this.validity.valid) {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                    } else {
                        this.classList.remove('is-valid');
                        this.classList.add('is-invalid');
                    }
                }
            });

            input.addEventListener('input', function() {
                this.classList.remove('is-valid', 'is-invalid');
            });
        });
    }

    // ============================================
    // MODULE 6: RESPONSIVE FIXES
    // ============================================
    function initResponsiveFixes() {
        function applyFixes() {
            const isMobile = window.innerWidth <= 767;
            
            // Fix 1: YouTube Button
            fixYouTubeButton(isMobile);
            
            // Fix 2: Hero Section
            fixHeroSection(isMobile);
        }

        function fixYouTubeButton(isMobile) {
            const btnChannel = document.querySelector('.btn-channel');
            const sectionHeader = document.querySelector('.youtube-section .section-header');
            
            if (!btnChannel) return;

            if (isMobile) {
                btnChannel.style.cssText = `
                    width: 100%;
                    justify-content: center;
                    padding: 16px 24px;
                    font-size: 16px;
                    border-radius: 50px;
                    border: 2px solid #ff0000;
                    background: white;
                    color: #ff0000;
                    box-shadow: 0 4px 12px rgba(255, 0, 0, 0.15);
                `;

                if (sectionHeader) {
                    sectionHeader.style.cssText = `
                        flex-direction: column;
                        align-items: stretch;
                        gap: 20px;
                    `;
                }
            } else {
                btnChannel.style.cssText = '';
                if (sectionHeader) sectionHeader.style.cssText = '';
            }
        }

        function fixHeroSection(isMobile) {
            const heroSection = document.querySelector('.hero-premium');
            const photoContainer = document.querySelector('.photo-container');
            
            if (!heroSection) return;

            if (isMobile) {
                heroSection.style.cssText = `
                    padding-top: 40px;
                    padding-bottom: 40px;
                    min-height: auto;
                `;

                if (photoContainer) {
                    photoContainer.style.maxWidth = '280px';
                }
            } else {
                heroSection.style.cssText = '';
                if (photoContainer) photoContainer.style.cssText = '';
            }
        }

        // Apply on load
        applyFixes();

        // Apply on resize
        window.addEventListener('resize', debounce(applyFixes, 250));
        
        // Apply on orientation change
        window.addEventListener('orientationchange', function() {
            setTimeout(applyFixes, 200);
        });
    }

    // ============================================
    // MODULE 7: IMAGE FALLBACKS
    // ============================================
    function initImageFallbacks() {
        const images = document.querySelectorAll('img');

        images.forEach(img => {
            img.addEventListener('error', function() {
                // Prevent infinite loop
                if (this.dataset.fallbackApplied) return;
                this.dataset.fallbackApplied = 'true';

                // Generic fallback
                this.style.cssText = `
                    background-color: #e2e8f0;
                    padding: 20%;
                    min-height: 200px;
                `;

                // Hero photo specific fallback
                if (this.classList.contains('hero-photo')) {
                    this.style.display = 'none';
                    
                    const parent = this.parentNode;
                    if (parent && !parent.querySelector('.fallback-initials')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-initials';
                        fallback.textContent = 'BJ';
                        fallback.style.cssText = `
                            width: 100%;
                            aspect-ratio: 1/1;
                            background: linear-gradient(135deg, #059669, #10b981);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 3rem;
                            font-weight: 700;
                            color: white;
                            border-radius: 24px;
                        `;
                        parent.appendChild(fallback);
                    }
                }
            });
        });
    }

    // ============================================
    // MODULE 8: ACCESSIBILITY ENHANCEMENTS
    // ============================================
    function initAccessibility() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#hero';
        skipLink.className = 'skip-to-main';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--brand-primary);
            color: white;
            padding: 8px 16px;
            text-decoration: none;
            z-index: 9999;
            border-radius: 0 0 4px 0;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '0';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Announce page changes to screen readers
        const announcer = document.createElement('div');
        announcer.setAttribute('role', 'status');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0,0,0,0);
            white-space: nowrap;
            border: 0;
        `;
        document.body.appendChild(announcer);

        // Announce section changes
        window.addEventListener('hashchange', function() {
            const hash = window.location.hash.substring(1);
            const section = document.getElementById(hash);
            
            if (section) {
                const heading = section.querySelector('h1, h2, h3');
                if (heading) {
                    announcer.textContent = `Navigated to ${heading.textContent}`;
                }
            }
        });
    }

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================
    
    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Console welcome message
    console.log(
        '%c🌟 Bilalsha Jamali Nizami Portfolio',
        'font-size: 16px; font-weight: bold; color: #059669;'
    );
    console.log(
        '%cDeveloped with modern web standards',
        'font-size: 12px; color: #64748b;'
    );

})();
