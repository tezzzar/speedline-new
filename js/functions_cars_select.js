/*
 * Закрытие бокового окна при ресайзе
 */
 
if ($('.box_back #slide_window.callback2 .callback_close').length) {

$(window).on("resize", function () {
	
	$('.box_back #slide_window.callback2 .callback_close').trigger('click');

}).resize();
        
}


/*
 * Открытие окна выбора авто 
 */

$(".cars_select_button .button_text").click(function (ex11) {
		//alert();
	$('.callback_center2.cars-nav').show();
	$('#popup_window').show();
	$('.box_back').addClass('box_show');
	
	jQuery('.box_back').css('opacity', '1');
	$('.box_back').fadeIn(600);
});	
	


//Строка выбора автомобиля

resetCar();

$('#form_search_auto .form__checkbox').prop('checked', false);
	
var car_selected = false;
var fromfirst_selected = false;
var fromsecond_selected = false;
var onel = false;

var car_brand_str = '';
var car_model_str = '';
var car_fuel_str = '';
var car_engine_str = '';
var car_code_str = '';

$('.cars_select_modal #form_search_auto input.form__checkbox').change(function() {
	
	   $('#form_search input.search-form__input').val('');
	   
	   
	
$('.selection-step').each(function(step,element){

	var ind = $(element).index();
	if (!$(element).find('.form__checkbox:checked').length)  {
		return;
	}
	else {
		$(element).find('.selection-step__title').text($(element).find('.form__checkbox:checked').val());
		$('.button_row_element').eq( ind).text($(element).find('.form__checkbox:checked').val());
		
		if (ind < 2)  {
			fromfirst_selected = true;
		}
		else if (ind > 2)  {
			fromsecond_selected = true;
		}
	}
						
});   
	   
if ((fromfirst_selected == true) && (fromsecond_selected == true)) {		
	if (onel == false) {		
	$('.cars_select_button').removeClass('onel');
	onel = true;
	}
}
else {
	$('.cars_select_button').addClass('onel');
	onel = false;
}	
	
	
if (($('#form_search_auto [name=car_brand]:checked').length) && ($('#form_search_auto [name=car_model]:checked').length) && ($('#form_search_auto [name=car_fuel]:checked').length) && ($('#form_search_auto [name=car_engine]:checked').length) && ($('#form_search_auto [name=car_code]:checked').length)) {
	
	car_selected = true;
	
    $('.selection-step-car-brand .selection-step__header').trigger('click');
	
	 $('.box_back').trigger('click');
}
	

	$('.cars_select_button').addClass('selected');
	$('.cars_select_text_block').addClass('showtext');
	
});

$('.cars_select_modal .form__button').click(function(r) {
		
r.preventDefault();

	$('.callback_center2.cars-nav').hide();
	$('#popup_window').hide();
	$('.box_back').removeClass('box_show');
	
	jQuery('.box_back').css('opacity', '0');
	$('.box_back').fadeOut(600);
	
	
});


$('.box_back, .box_back .callback_close').click(function() {
		
if (car_selected == false) {		
	
resetCar();
$('.cars_select_button').removeClass('onel');
$('#form_search_auto .form__checkbox').prop('checked', false);
    $('.selection-step-car-brand .selection-step__header').trigger('click');


	$('.selection-step__title').each(function(stept,elementt){
	
		$(elementt).text($(elementt).data('steptitle'));
	});

}	
	
});


$('.button_row .callback_close').click(function() {

resetCar();
$('.cars_select_button').removeClass('onel');
$('#form_search_auto .form__checkbox').prop('checked', false);
    $('.selection-step-car-brand .selection-step__header').trigger('click');

	
	$('.selection-step__title').each(function(stept,elementt){
	
		$(elementt).text($(elementt).data('steptitle'));
	});
});



function resetCar() {
onel = false;	
fromfirst_selected = false;
fromsecond_selected = false;
	car_selected = false;
	$('.cars_select_button').removeClass('selected');
	$('.cars_select_text_block').removeClass('showtext');
    $('.button_row_element').text('');
	
	
}

$('.selection-step').each(function(){

	var inde = $(this).index();
	var box_selected = false;
	$(this).find('.cell_checkbox .checkbox-button').click(function() {
		box_selected = true;
		if (box_selected == true) {
		//alert(inde);
		
		$('.selection-step').eq( inde + 1 ).find('.selection-step__header').trigger('click');
		inde = '';
		box_selected = false;
		}
	});
						
});









































