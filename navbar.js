const toggleSectionLinks = document.querySelector('.toggle-section-links');
const sectionLinks = document.querySelector('.sectionlinks');

toggleSectionLinks.addEventListener('click', () => {
  sectionLinks.classList.toggle('show');
});
