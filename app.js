const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

document.querySelectorAll('.care article').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 12px 24px rgba(37, 165, 200, 0.14)';
    card.style.transform = 'translateY(-3px)';
    card.style.transition = '200ms ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
    card.style.transform = 'translateY(0)';
  });
});
