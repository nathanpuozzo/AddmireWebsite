(function () {
  var burger = document.getElementById('navBurger');
  var mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
    });
  });

  var track = document.getElementById('projectsTrack');
  function scrollByCard(dir) {
    var card = track.querySelector('.proj-card');
    var gap = 32;
    var amount = card ? card.offsetWidth + gap : track.clientWidth / 3;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }
  document.getElementById('carouselPrev').addEventListener('click', function () { scrollByCard(-1); });
  document.getElementById('carouselNext').addEventListener('click', function () { scrollByCard(1); });

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = encodeURIComponent(('Projet immersif — ' + firstName + ' ' + lastName).trim());
    var body = encodeURIComponent('Nom : ' + firstName + ' ' + lastName + '\nEmail : ' + email + '\n\nMessage :\n' + message);
    window.location.href = 'mailto:nathan.puozzo@addmire.net?subject=' + subject + '&body=' + body;
  });
})();
