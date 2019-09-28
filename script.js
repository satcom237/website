
$(window).scroll(function(){
  $(".top").css("opacity", 1 - $(window).scrollTop() / 100);
});

$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.

	if ($(window).scrollTop() > 100 ){

 		$('.navlist').addClass('show');

  } else {

    $('.navlist').removeClass('show');

 	};
});

$('.scroll').on('click', function(e){
		e.preventDefault()

  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});

function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
