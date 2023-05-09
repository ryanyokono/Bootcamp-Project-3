const accordionItems = document.querySelectorAll('.accordion-item');

function toggleAccordion() {
  this.classList.toggle('active');
  const accordionContent = this.querySelector('.accordion-content');
  if (this.classList.contains('active')) {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
  } else {
    accordionContent.style.maxHeight = 0;
  }
}

accordionItems.forEach(item => {
  item.addEventListener('click', toggleAccordion);
});
