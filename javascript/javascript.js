// donate.js

document.getElementById('donateButton').addEventListener('click', function () {
    // Redirige a la página de donación
    window.location.href = './donacion.html';
});


$(document).ready(function(){
    $('.slick-carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  });