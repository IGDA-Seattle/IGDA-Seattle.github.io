document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('js-mobile-nav-toggle').addEventListener('click', function() {
    this.classList.toggle('is-active');
    this.nextSibling.classList.toggle('is-active');
  });

});
