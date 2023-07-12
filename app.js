const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.querySelector("form.register").addEventListener("submit", function() {
    alert("I've been submitted.");
  }, false);

  function confirmInput() {
    fname = document.forms[0].name.value;
    alert("Hello " + fname + "! You will now be redirected to the homepage.");
  }

  
