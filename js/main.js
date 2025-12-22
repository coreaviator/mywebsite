// Core Aviator Training - Main JavaScript
// Handles navigation, dark mode, animations, and interactive elements

(function() {
  'use strict';
  
  // ============================================
  // THEME MANAGEMENT (Dark/Light Mode)
  // ============================================
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  
  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  
  // Update theme toggle icon
  function updateThemeIcon() {
    const currentTheme = body.getAttribute('data-theme');
    const icon = themeToggle.querySelector('svg use');
    if (icon) {
      icon.setAttribute('href', currentTheme === 'dark' ? '#sun-icon' : '#moon-icon');
    }
  }
  
  // Theme toggle handler
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon();
    });
    
    updateThemeIcon();
  }
  
  // ============================================
  // MOBILE NAVIGATION
  // ============================================
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  // Toggle mobile menu
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (navMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });
  }
  
  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
      }
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (hamburger && navMenu) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
      }
    }
  });
  
  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // ============================================
  // SCROLL ANIMATIONS
  // ============================================
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  };
  
  // Initialize scroll animations when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateOnScroll);
  } else {
    animateOnScroll();
  }
  
  // ============================================
  // ACTIVE NAVIGATION LINK
  // ============================================
  const setActiveNavLink = () => {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-menu a');
    
    navItems.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      
      if (linkPath === currentPath || 
          (currentPath === '/' && linkPath.includes('index.html')) ||
          (currentPath === '/core_aviator_training/' && linkPath.includes('index.html'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };
  
  setActiveNavLink();
  
  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // ============================================
  // FORM HANDLING
  // ============================================
  const contactForm = document.querySelector('#contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      
      // Disable button and show loading state
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      
      try {
        const formData = new FormData(contactForm);
        
        // Combine firstName and lastName into a single "name" field for Google Apps Script
        const firstName = formData.get('firstName') || '';
        const lastName = formData.get('lastName') || '';
        const fullName = `${firstName} ${lastName}`.trim();
        
        // Create new FormData with combined name field
        const submissionData = new FormData();
        submissionData.append('name', fullName);
        submissionData.append('email', formData.get('email'));
        submissionData.append('phone', formData.get('phone') || '');
        submissionData.append('interest', formData.get('interest') || '');
        submissionData.append('comments', formData.get('comments') || '');
        
        const scriptURL = contactForm.getAttribute('action');
        
        console.log('Submitting form data:', {
          name: fullName,
          email: formData.get('email'),
          phone: formData.get('phone'),
          interest: formData.get('interest'),
          comments: formData.get('comments')
        });
        
        const response = await fetch(scriptURL, {
          method: 'POST',
          body: submissionData
        });
        
        if (response.ok) {
          // Show success message
          showMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon!', 'success');
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        // Show error message
        showMessage('Oops! Something went wrong. Please try again or contact us directly.', 'error');
        console.error('Form submission error:', error);
      } finally {
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }
  
  // Message display function
  function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.style.cssText = `
      padding: 1rem;
      margin-top: 1rem;
      border-radius: 0.5rem;
      background: ${type === 'success' ? '#10B981' : '#EF4444'};
      color: white;
      text-align: center;
      animation: fadeIn 0.3s ease-out;
    `;
    messageDiv.textContent = message;
    
    contactForm.appendChild(messageDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      messageDiv.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
  }
  
  // ============================================
  // AVIATION DECORATIVE ELEMENTS
  // ============================================
  
  // Create floating clouds
  function createClouds() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 3; i++) {
      const cloud = document.createElement('div');
      cloud.className = 'cloud';
      cloud.style.cssText = `
        position: absolute;
        width: ${100 + Math.random() * 100}px;
        height: ${40 + Math.random() * 40}px;
        background: var(--cloud-color);
        border-radius: 100px;
        top: ${10 + Math.random() * 60}%;
        left: ${Math.random() * 100}%;
        opacity: 0.3;
        pointer-events: none;
        animation-delay: ${Math.random() * 3}s;
      `;
      hero.appendChild(cloud);
    }
  }
  
  // Create airflow lines
  function createAirflowLines() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 5; i++) {
      const line = document.createElement('div');
      line.className = 'airflow-line';
      line.style.cssText = `
        top: ${20 + Math.random() * 60}%;
        left: 0;
        width: ${30 + Math.random() * 40}%;
        animation-delay: ${Math.random() * 3}s;
      `;
      hero.appendChild(line);
    }
  }
  
  // Initialize decorative elements
  createClouds();
  createAirflowLines();
  
  // ============================================
  // LAZY LOADING FOR IMAGES
  // ============================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // ============================================
  // BACK TO TOP BUTTON
  // ============================================
  const createBackToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--primary-blue);
      color: white;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s;
      z-index: 999;
      box-shadow: 0 4px 12px rgba(15, 171, 215, 0.3);
    `;
    
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        button.style.opacity = '1';
        button.style.visibility = 'visible';
      } else {
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
      }
    });
    
    document.body.appendChild(button);
  };
  
  createBackToTop();
  
  // ============================================
  // PERFORMANCE OPTIMIZATION
  // ============================================
  
  // Debounce function for scroll events
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
  
  // ============================================
  // INITIALIZATION
  // ============================================
  console.log('Core Aviator Training - Website Loaded Successfully');
  console.log('Safety, Proficiency, Professionalism ✈️');
  
})();