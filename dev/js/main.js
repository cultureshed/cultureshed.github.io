$(document).ready(function(){
  
  svgeezy.init(false, 'gif'); // this will let the plugin check all images
  
  resizeSignupCard();
  
  // Use smooth scrolling in navigation
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
  
  // Fix scroll stutter
  $.waypoints.settings.scrollThrottle = 100;
  $.waypoints.settings.resizeThrottle = 200;
  
  // Update navbar on scroll
  $('header, header h1, #about, #about-section, #about-section h2, #about-section p, #about-section ul').waypoint(function() {
     $('nav ul li').removeClass('active');
     $('nav').removeClass('signup-active');
     $('#nav-about').addClass('active');
  },{offset: 100});
  $('#press, #press-section, #press-section h2, #press-section h2, #press-section p, #bio, #bio-section, #bio-section h2, #bio-section p').waypoint(function() {
     $('nav ul li').removeClass('active');
     $('nav').removeClass('signup-active');
     $('#nav-press').addClass('active');
  },{offset: 100});
  $('#signup, #signup-section, #signup-section h2, #signup-section div').waypoint(function() {
     $('nav ul li').removeClass('active');
     $('#nav-signup').addClass('active');
     $('nav').addClass('signup-active');
  },{offset: 100});
  
});

$(window).resize(function(){
  resizeSignupCard();
});

function resizeSignupCard(){
  // Resize Thank You card to fill screen
  $("#signup-section").height($(window).height());
  $("#signup-section").css("padding", 0);
  var signupPadding = ($(window).height() * .25) - ($("#signup .content").height() * 1);
  $("#signup-section h2").css("padding-top", signupPadding + "px");
}