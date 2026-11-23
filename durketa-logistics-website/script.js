const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Website inquiry — Durketa Logistics');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nBusiness: ${data.get('business') || 'Not provided'}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\nInterested in: ${data.get('interest')}\n\nMessage:\n${data.get('message')}`
  );
  // Replace this placeholder with the company's real business email before launch.
  const businessEmail = '';
  if (!businessEmail) {
    status.textContent = 'The form is working, but it is not connected yet. Add your real business email in script.js (businessEmail) before publishing so inquiries can be sent.';
    status.classList.add('notice');
    return;
  }
  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
