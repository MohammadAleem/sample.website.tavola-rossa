// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Show a colorful emoji placeholder if a dish photo hasn't been added yet
document.querySelectorAll('.dish-photo img').forEach(img => {
  img.addEventListener('error', () => {
    img.closest('.dish-photo').classList.add('img-error');
  });
});

// Reveal dish cards on scroll
const revealItems = document.querySelectorAll('.dish-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(item => observer.observe(item));

// Demo reservation form (no backend — just confirms the flow)
const form = document.getElementById('reserveForm');
const status = document.getElementById('formStatus');

// Name field: letters and spaces only, block everything else as you type
const nameInput = document.getElementById('name');
nameInput.addEventListener('input', () => {
  nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, '');
});

// Phone field: digits only, block everything else as you type
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', () => {
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const date = document.getElementById('date').value;

  if (!name || !date) {
    status.textContent = 'Please fill in your name and a date.';
    status.style.color = '#A23B2E';
    return;
  }

  status.textContent = `Thanks, ${name}. This is a demo — in a live site, this would email or save your booking for ${date}.`;
  status.style.color = '#6B7A4F';
  form.reset();
});
