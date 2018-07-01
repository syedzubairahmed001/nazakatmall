$(document).ready(function (){
  $('nav').on('click', function() {
    $("#sec-nav-menu-icon").toggleClass('is-active');
    $(".nav-bg").toggleClass("nav-bg-clicked");
    $(".menu-item-container").fadeToggle();
    $(".menu-item-container ul li").css('opacity','1');
    $(".menu-item-container ul li a").click(function() {
      $("#sec-nav-menu-icon").removeClass('is-active');
      $(".nav-bg").fadeToggle("fast");
      $(".menu-item-container").fadeToggle("fast");
      $(".menu-item-container ul li").fadetoggle("fast");
      });
  });
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
      scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
      }
    });
    // $("h1").fitText(1.2,{ minFontSize: '50px', maxFontSize: '190px' });
})