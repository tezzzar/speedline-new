
$(function () {
	
	$('.link_search').click(function(){
	  	$('.search-form').addClass("opened");
		$('.search-form__close').addClass("opened");
	  	return false;
	});	
	$('.search-form__close').click(function(){
	  	$('.search-form').removeClass("opened");
		$(this).removeClass("opened");
	  	return false;
	});
	$('.mob-nav').click(function(){
	  	$('.site-nav').toggleClass("opened");
	  	return false;
	});
	$('.chars-all').click(function(){
		$(this).toggleClass("active");
	  	$('.chars-table tr').toggleClass("active");
	  	return false;
	});	
});

$( function() {
	$(".select").selectmenu();
	$(".form__select").selectmenu();
	$( ".content__tabs" ).tabs();
	$( ".tabs" ).tabs();
		
	$( "#slider-firstpay" ).slider({
		range: "min",
      	min: 0,
      	max: 50,
		step: 5,
      	value: 5,
      	slide: function( event, ui ) {
        	$( "#input-firstpay" ).val( ui.value );
      	}
    });
    $( "#input-firstpay" ).val( $( "#slider-firstpay" ).slider( "value" ) );
	
	$( "#slider-terms" ).slider({
		range: "min",
      	min: 3,
      	max: 36,
		step: 1,
      	value: 6,
      	slide: function( event, ui ) {
        	$( "#input-terms" ).val( ui.value );
      	}
    });
    $( "#input-terms" ).val( $( "#slider-terms" ).slider( "value" ) );
	
});

jQuery(document).ready(function($) {
	$('a.quantity-form__minus').click(function () {
    	var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
	});
    $('a.quantity-form__plus').click(function () {
    	var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
	});
});

$(document).ready(function() { 
	$('.radio_delivery').click(function() { 
    	var inputValue = $(this).attr("value"); 
        var targetBox = $("." + inputValue); 
        $(".sub-form").not(targetBox).hide(); 
		$(targetBox).show(); 
    }); 
}); 

$(document).ready(function(){
	$('.credit-info__link').click(function(){
		if(!$(this).parent().hasClass('active')){
			$('.credit-info__item').removeClass('active'); 
			$(this).parent().addClass('active');
		} else {
			$(this).parent().removeClass('active');
		}
	});
});

jQuery(document).ready(function(){
   $(".input_date").mask("99.99.9999");
   $(".input_phone").mask("+38 0(99) 999 99 99");
   $(".input_ipn").mask("999999999");
});

$(function() {
    var calc = $(".calculator_credit");
	var result = $(".credits-result");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll > 200) {
            calc.addClass("fixed").fadeIn('fast');
			result.addClass("calc-fixed").fadeIn('fast');
	    } else {
           calc.removeClass("fixed").fadeIn('fast');
		   result.removeClass("calc-fixed").fadeIn('fast');
	    }
    });
});