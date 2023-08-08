function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var fadeElements = document.querySelectorAll('.fade-container .fade-in');
  fadeElements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
