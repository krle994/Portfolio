//Particles styles

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5AD9A8',
    lineColor: '#f1f1f1',
    directionX: 'center',
    particleRadius: 2,
    lineWidth: 0.2,
    proximity: 100,
    density: 11500,
    parallax: true,
    parallaxMultiplier: 5
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop =- intro.offsetHeight / 2 + 'px';
}, false);

//Responsive navbar dropdown

function dropdown() {
  var mainNav = document.getElementById("mainNav");
  var x = document.getElementById("dropdownClick");
  if (x.className === "topnav") {
  x.className += " responsive";
  mainNav.style.backgroundColor = "#101010";
  } else {
  x.className = "topnav";
  }
    }


$(document).ready(function(){

  //Progress bar animation

$(window).scroll(function() {
   var offT = $('#scroll-to').offset().top,
       outH = $('#scroll-to').outerHeight(),
       winH = $(window).height(),
       scrT = $(this).scrollTop();
   if (scrT > (offT+outH-winH)){
	 $('.skillbar').each(function(){
		 $(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		 },2000);
	 });
   }
  });


  //Fade in navbar background color on scroll

  var start = 0;
    $(document).scroll(function () {
        start = $(this).scrollTop();
        if (start > 70) {
            $(".topnav").css('background-color', '#101010');
        } else {
            $(".topnav").css('background-color', 'transparent');
        }
    });

  // Smooth transition when anchor is clicked

  $(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

});
