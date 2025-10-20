  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Add hover effect to data cards
document.querySelectorAll('.data-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
});