export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth',
  });
}
