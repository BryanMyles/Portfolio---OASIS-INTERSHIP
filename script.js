// Initialize Lucide Icons
lucide.createIcons();

// Add simple scroll effect for navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('shadow-sm', 'bg-white/95');
    navbar.classList.remove('bg-white/80');
  } else {
    navbar.classList.remove('shadow-sm', 'bg-white/95');
    navbar.classList.add('bg-white/80');
  }
});
