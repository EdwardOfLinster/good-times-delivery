$('.accordion__header').click(function(e) {
	e.preventDefault();
	var currentIsActive = $(this).hasClass('is-active');
	$(this).parent('.accordion').find('> *').removeClass('is-active');
	if(currentIsActive != 1) {
		$(this).addClass('is-active');
		$(this).next('.accordion__body').addClass('is-active');
	}
});

var viewportWidth = jQuery(window).width();
if (viewportWidth <= 768) {
    $(".vendors").slick({
        centerMode: true,
        arrows: false,
        slidesToShow: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        focusOnSelect: true,
        swipeToSlide: true
    });
}
  jQuery(window).resize(function() {
    viewportWidth = jQuery(window).width();
      console.log(viewportWidth);
    if (viewportWidth > 768) {
        $('.vendors').slick("unslick");
    }
    else {
        $(".vendors").slick({
            centerMode: true,
            arrows: false,
            slidesToShow: 2,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 1500,
            focusOnSelect: true,
            swipeToSlide: true
        })
    }
});