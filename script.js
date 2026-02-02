function scrollToContact(){
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const messageResponse = document.getElementById('messageResponse');
  
  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Formspree will handle the submission automatically
      // Show a success message after form submits
      setTimeout(function() {
        messageResponse.style.display = 'block';
        messageResponse.style.color = '#4CAF50';
        messageResponse.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        contactForm.reset();
        setTimeout(function() {
          messageResponse.style.display = 'none';
        }, 5000);
      }, 500);
    });
  }
});
