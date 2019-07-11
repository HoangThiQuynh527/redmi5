(function($){
	$(document).ready(function (){

		$('.of-iconmntop').click(function(){
			$('.of-menutop').toggleClass('of-mnshow');
		});

		$('.of-search').click(function(){
			$('.of-searchbox').show(200);
		});

		$('.of-closesearch').click(function(){
			$('.of-searchbox').hidse(200);
		});
	});
	var swiper = new Swiper('.slide_1', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.remi13-2-next',
        prevEl: '.remi13-2-prev',
      },
    });
   
 $('.remi1_2').countdown('2019/07/05', function(event){
  var $this=$(this).html(event.strftime(''
    + 'Còn<span>%H</span>Giờ '
    + '<span>%M</span>Phút'
    + '<span>%S</span>Giây'));
});
 // var slickMini = {
 //        init: function () {
 //            slickMini.events();
 //        },
 //        events: function () {
 //            $('.slide_1').swiper({
 //                nextButton: '.remi13-2-next',
 //                prevButton: '.remi13-2-prev',
 //                pagination: '.remi13-2-count',
 //                paginationType: 'fraction'
 //            });
 //        }
 //    };

 //    if ($(".slide_1").length > 0) {
 //        slickMini.init();
 //    }
 //    
   $(document).ready(function() {
  $("a[href*='#']:not([href='#])").click(function() {
    let target = $(this).attr("href");
    $('html,body').stop().animate({
      scrollTop: $(target).offset().top
    }, 500);
    event.preventDefault();
  });
});
   $(window).bind('scroll', function () {
        var navHeight = $(window).height() ;
        if ($(window).scrollTop() > navHeight) {
            $('.remi2').addClass('fixed');
             // $('.oppo_f2ss1').css('background','black');
        } else {
            $('.remi2').removeClass('fixed');
            // $('.oppo_f2ss1').css('background','none');
        }
    });
})(window.jQuery);