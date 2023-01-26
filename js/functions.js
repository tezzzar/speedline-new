var domainName = window.location.hostname;
domainName = domainName.replace('www.','');

//Высота блока доставки товара
	
if ($('.product__delivery').length) {
	if ($(window).width() > 1180)  {
		$(window).on("resize", function () {
			var delh =  $('.product__delivery-inner').height();
			var purh =  $('.product__purchase').height();
			var charh =  $('.product__characteristics').height() + 30;
			var pchh = purh + charh;
			
			if (delh >= pchh)  {
				var deltah = delh - pchh;
				$('.product__characteristics').css('margin-bottom', deltah + 60);
			}
			else {
				$('.product__characteristics').css('margin-bottom', 20);
			} 	

		}).resize();
	}
}

//Отключение перемотки всей страницы на мобильных устройствах во время перемотки отдельных элементов с помощью касания

$('.selection-steps, .catalog-filters-list, .callback_center2.site-nav').on("touchstart",function(e) {
	var scrollPosition = [
		self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
		self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
	];
	$('body').data('scroll-position', scrollPosition);
	$('body').data('previous-overflow', $('body').css('overflow'));
	$('body').css('overflow', 'hidden');
	window.scrollTo(scrollPosition[0], scrollPosition[1]);
});
	
$('.selection-steps, .catalog-filters-list, .callback_center2.site-nav').on("touchend",function(e) {
	var scrollPosition = $('body').data('scroll-position');
	$('body').css('overflow', $('body').data('previous-overflow'));
	window.scrollTo(scrollPosition[0], scrollPosition[1]);
});	
	
	
//Галерея запчасти	
	
if ($('.part-item').length) {
	 
$('.part-item .imglist a').fancybox({
  baseClass: 'myFancyBox',
  thumbs: {
    autoStart: true,
    axis: 'x'
  }
});

}



/*
 * Добавление многоточий
 */
		
var dotspan = '<span class="dotspan">...</span>';  

if ($('.article-prw__content').length) {

$(window).on("resize", function () {
	
	$('.article-prw__inner').each(function(){

		var titleblock_h = $(this).find('.block-images-arttitle').height();
		var titlereal_h = $(this).find('.article-prw__title').height();

		var titledelta = titleblock_h / titlereal_h * 100;

		
		var textblock_h = $(this).find('.block-images-arttext').height();
		var textreal_h = $(this).find('.block-images-arttext p').height();

		var textdelta = textblock_h / textreal_h * 100;


		if (parseInt(titledelta) < 100) {
			var titleappto = $(this).find('.block-images-arttitle');	
			$(dotspan).appendTo(titleappto);
		}
		else {		
			$(this).find('.block-images-arttitle').find('.dotspan').remove();
		}
		
		if (parseInt(textdelta)  < 100) {
			var textappto = $(this).find('.block-images-arttext');	
			$(dotspan).appendTo(textappto);
		}
		else {		
			$(this).find('.block-images-arttext').find('.dotspan').remove();
		}
		
		textdelta = '';		
		textdelta = '';
		
	});

}).resize();
        
}
	
else if ($('.part-item').length) {

$(window).on("resize", function () {
	
	$('.part-item').each(function(){

		var partbrandblock_h = $(this).find('.block-images-partbrand').height();
		var partbrandreal_h = $(this).find('.partbrand__title').height();
		var partbranddelta = partbrandblock_h / partbrandreal_h * 100;
		if (parseInt(partbranddelta) < 100) {
			var partbrandappto = $(this).find('.block-images-partbrand');	
			$(dotspan).appendTo(partbrandappto);
		}
		else {		
			$(this).find('.block-images-partbrand').find('.dotspan').remove();
		}
		partbranddelta = '';
		
		var parttitleblock_h = $(this).find('.block-images-parttitle').height();
		var parttitlereal_h = $(this).find('.parttitle').height();
		var parttitledelta = parttitleblock_h / parttitlereal_h * 100;
		if (parseInt(parttitledelta) < 100) {
			var parttitleappto = $(this).find('.block-images-parttitle');	
			$(dotspan).appendTo(parttitleappto);
		}
		else {		
			$(this).find('.block-images-parttitle').find('.dotspan').remove();
		}
		parttitledelta = '';
		
		var partdescblock_h = $(this).find('.block-images-partdesc').height();
		var partdescreal_h = $(this).find('.partdesc').height();
		var partdescdelta = partdescblock_h / partdescreal_h * 100;
		if (parseInt(partdescdelta) < 100) {
			var partdescappto = $(this).find('.block-images-partdesc');	
			$(dotspan).appendTo(partdescappto);
		}
		else {		
			$(this).find('.block-images-partdesc').find('.dotspan').remove();
		}
		partdescdelta = '';
						
	});

}).resize();
        
}	


			

/*
 * Переключение форм оформления заказа
 */

if ($('.tabs_authorization').length) {

var authtab = 1;

$(".tabs_authorization").tabs({
	activate: function(event, ui) {
		if (getSelectedTabIndex() === 0) {
			authtab = 1;
			$('[name="form_type"]').val('page_order_new');
		}
		else {
			authtab = 2;
			$('[name="form_type"]').val('page_order_old');
		}
    }	
});


/*
 * Проверка данных формы заказа
 
 

	$('[name="radio_delivery"], [name="radio_pay"]').prop('checked', false); 
 
	$('#form_page_order [type="submit"]').on("click", function (eventord) {
		
		$('input, .radio__label, .radio_delivery__row .ui-selectmenu-button, .orders_checkbox_row').removeClass('input_error');	
			
		$('div.warning').remove();
		var warn;
		eventord.preventDefault();
		eventord.stopPropagation();
		if ((!$('[name="orders_name"]').val()) || (!$('[name="orders_surname"]').val()) || (!$('[name="orders_middlename"]').val()) || (!$('[name="orders_place"]').val()) || (!$('[name="orders_phone"]').val()) || (!$('[name="orders_email"]').val()) || (!$('[name="select_shop"]').val()) || (!$('[name="shop_adr"]').val())) {
			
			if (authtab == 1)   {
			
			if (!$('[name="orders_name"]').val())   {
				warn = '<div class="warning">Введите имя</div>';          
				$(warn).appendTo('.orders_name_row');
				$('[name="orders_name"]').addClass('input_error');
				$('.order-cart__content .warnall').remove();
				$('.orders_buttons_row').after('<div class="warning warnall">Заполните обязательные поля</div>');	
			}
			if (!$('[name="orders_place"]').val())   {
				warn = '<div class="warning">Введите город</div>';          
				$(warn).appendTo('.orders_place_row');
				$('[name="orders_place"]').addClass('input_error');
				$('.order-cart__content .warnall').remove();
				$('.orders_buttons_row').after('<div class="warning warnall">Заполните обязательные поля</div>');
			}
			if (!$('[name="orders_phone"]').val())   {
				warn = '<div class="warning">Введите телефон</div>';          
				$(warn).appendTo('.orders_phone_row');
				$('[name="orders_phone"]').addClass('input_error');
				$('.order-cart__content .warnall').remove();
				$('.orders_buttons_row').after('<div class="warning warnall">Заполните обязательные поля</div>');
			}
			if (!$('[name="orders_email"]').val())   {
				warn = '<div class="warning">Введите email</div>';          
				$(warn).appendTo('.orders_email_row');
				$('[name="orders_email"]').addClass('input_error');
				$('.order-cart__content .warnall').remove();
				$('.orders_buttons_row').after('<div class="warning warnall">Заполните обязательные поля</div>');
			}	
			}
			if (authtab == 2)   {
			if (!$('[name="form_login"]').val())   {
				warn = '<div class="warning">Введите логин или телефон</div>';          
				$(warn).appendTo('.login__row');
				$('[name="form_login"]').addClass('input_error');
				$('.order-cart__content .warnall').remove();
				$('.orders_buttons_row').after('<div class="warning warnall">Заполните обязательные поля</div>');
			}
			if (!$('[name="form_password"]').val())   {
				warn = '<div class="warning">Введите пароль</div>';          
				$(warn).appendTo('.password__row');
				$('[name="form_password"]').addClass('input_error');
				$('.order-cart__content .warnall').remove();
				$('.orders_buttons_row').after('<div class="warning warnall">Заполните обязательные поля</div>');
			}			
			}
			if ($('[name="radio_pay"]').prop('checked') == false)   {
				warn = '<div class="warning">Выберите способ оплаты</div>';          
				$(warn).appendTo('.radio_pay__row');
				$('.radio_pay__row .radio__label').addClass('input_error');
				$('.order-cart__content .warnall').remove();
				$('.orders_buttons_row').after('<div class="warning warnall">Заполните обязательные поля</div>');
			}
			if ($('[name="radio_delivery"]').prop('checked') == false)   {
				warn = '<div class="warning">Выберите способ доставки</div>';          
				$(warn).appendTo('.radio_delivery__row');
				$('.radio_delivery__row .radio__label').addClass('input_error');
				$('.order-cart__content .warnall').remove();
				$('.orders_buttons_row').after('<div class="warning warnall">Заполните обязательные поля</div>');	
			}
			if (!$('[name="select_shop"]').val())   {
				$('.ui-selectmenu-button').addClass('input_error');
				$('.order-cart__content .warnall2').remove();
				$('[name="shop_adr"]').after('<div class="warning warnall2">Выберите точку доставки</div>');				
				$('.order-cart__content .warnall').remove();
				$('.orders_buttons_row').after('<div class="warning warnall">Заполните обязательные поля</div>');	
			}	
			if (!$('[name="shop_adr"]').val())   {
				$('[name="shop_adr"]').addClass('input_error');
				$('.order-cart__content .warnall2').remove();
				$('[name="shop_adr"]').after('<div class="warning warnall2">Выберите точку доставки</div>');				
				$('.order-cart__content .warnall').remove();
				$('.orders_buttons_row').after('<div class="warning warnall">Заполните обязательные поля</div>');	
			}				
			if ($('#check_conditions_2').prop('checked') == false)   {
				warn = '<div class="warning">Выберите пункт соглашения</div>';          
				$(warn).appendTo('.orders_checkbox_row');
				$('.orders_checkbox_row').addClass('input_error');
			}			
			return false;
			
		}
		else {

			var orders_name = $('[name="orders_name"]').val();
			var orders_place = $('[name="orders_place"]').val();
			var orders_phone = $('[name="orders_phone"]').val();
			var orders_email = $('[name="orders_email"]').val();
			var form_login = $('[name="form_login"]').val();
			var form_password = $('[name="form_password"]').val();
			var radio_pay = $('[name="radio_pay"]').val();
			var radio_delivery = $('[name="radio_delivery"]').val();
			var select_shop = $('[name="select_shop"]').val();
			var shop_adr = $('[name="shop_adr"]').val();				
			var form_type = $('[name="form_type"]').val();

			$.ajax({
				url:"./result.php",
				method:"POST",
				data:{orders_name:orders_name,orders_place:orders_place,orders_phone:orders_phone,orders_email:orders_email,form_login:form_login,form_password:form_password,radio_pay:radio_pay,radio_delivery:radio_delivery,select_shop:select_shop,shop_adr:shop_adr,form_type:form_type},
				dataType:"JSON",
				success:function(order_ok) {

					$('div.warning').remove();
					$('input, .radio__label, .orders_checkbox_row, .radio_delivery__row .ui-selectmenu-button').removeClass('input_error');
				
					$('#form_page_order').submit();

				},
				error:function(){
					$('.orders_buttons_row').after('<div class="warning">Ошибка регистрации</div>');
				}
			});
		}
		
	});
*/



}






/*
 * Проверка данных формы кредита

 
	$('#form_page_credit [type="submit"]').on("click", function (eventcred) {
		
		$('input, #ui-id-4-button, .orders_checkbox_row').removeClass('input_error');	
			
		$('div.warning').remove();
		var warn;
		eventcred.preventDefault();
		eventcred.stopPropagation();
		if ((!$('[name="orders_name"]').val()) || (!$('[name="orders_surname"]').val()) || (!$('[name="orders_middlename"]').val()) || (!$('[name="orders_bday"]').val()) || (!$('[name="orders_bmonth"]').val()) || (!$('[name="orders_byear"]').val()) || (!$('[name="orders_ipn"]').val()) || (!$('[name="orders_place"]').val()) || (!$('[name="orders_phone"]').val()) || (!$('[name="orders_email"]').val())) {
			
			if (!$('[name="orders_name"]').val())   {
				warn = '<div class="warning">Введите имя</div>';          
				$(warn).appendTo('.orders_name_row');
				$('[name="orders_name"]').addClass('input_error');
			}
			if (!$('[name="orders_surname"]').val())   {
				warn = '<div class="warning">Введите фамилию</div>';          
				$(warn).appendTo('.orders_surname_row');
				$('[name="orders_surname"]').addClass('input_error');
			}
			if (!$('[name="orders_middlename"]').val())   {
				warn = '<div class="warning">Введите отчество</div>';          
				$(warn).appendTo('.orders_middlename_row');
				$('[name="orders_middlename"]').addClass('input_error');
			}	
			if (!$('[name="orders_bday"]').val())   {
				warn = '<div class="warning">Введите дату рождения</div>';          
				$(warn).appendTo('.orders_date_row');
				$('[name="orders_bday"]').addClass('input_error');
			}
			if (!$('[name="orders_bmonth"]').val())   {
				warn = '<div class="warning">Введите дату рождения</div>';          
				$(warn).appendTo('.orders_date_row');
				$('#ui-id-4-button').addClass('input_error');
			}
			if (!$('[name="orders_byear"]').val())   {
				warn = '<div class="warning">Введите дату рождения</div>';          
				$(warn).appendTo('.orders_date_row');
				$('[name="orders_byear"]').addClass('input_error');
			}	
			if (!$('[name="orders_ipn"]').val())   {
				warn = '<div class="warning">Введите ИНН</div>';          
				$(warn).appendTo('.orders_ipn_row');
				$('[name="orders_ipn"]').addClass('input_error');
			}	
			if (!$('[name="orders_place"]').val())   {
				warn = '<div class="warning">Введите город</div>';          
				$(warn).appendTo('.orders_place_row');
				$('[name="orders_place"]').addClass('input_error');
			}
			if (!$('[name="orders_phone"]').val())   {
				warn = '<div class="warning">Введите телефон</div>';          
				$(warn).appendTo('.orders_phone_row');
				$('[name="orders_phone"]').addClass('input_error');
			}
			if (!$('[name="orders_email"]').val())   {
				warn = '<div class="warning">Введите email</div>';          
				$(warn).appendTo('.orders_email_row');
				$('[name="orders_email"]').addClass('input_error');
			}	
			if ($('#orders_checkbox').prop('checked') == false)   {
				warn = '<div class="warning">Выберите пункт соглашения</div>';          
				$(warn).appendTo('.orders_checkbox_row');
				$('.orders_checkbox_row').addClass('input_error');
			}			
			return false;
			
		}
		else {

			var orders_name = $('[name="orders_name"]').val();
			var orders_surname = $('[name="orders_surname"]').val();
			var orders_middlename = $('[name="orders_middlename"]').val();	
			var orders_bday = $('[name="orders_bday"]').val();
			var orders_bmonth = $('[name="orders_bmonth"]').val();
			var orders_byear = $('[name="orders_byear"]').val();	
			var orders_ipn = $('[name="orders_ipn"]').val();	
			var orders_place = $('[name="orders_place"]').val();
			var orders_phone = $('[name="orders_phone"]').val();
			var orders_email = $('[name="orders_email"]').val();			
			var form_type = $('[name="form_type"]').val();

			$.ajax({
				url:"./result.php",
				method:"POST",
				data:{orders_name:orders_name,orders_surname:orders_surname,orders_middlename:orders_middlename,orders_bday:orders_bday,orders_bmonth:orders_bmonth,orders_byear:orders_byear,orders_ipn:orders_ipn,orders_place:orders_place,orders_phone:orders_phone,orders_email:orders_email,form_type:form_type},
				dataType:"JSON",
				success:function(credit_ok) {

					$('div.warning').remove();
					$('input, #ui-id-4-button, .orders_checkbox_row').removeClass('input_error');
				
					$('#form_page_credit').submit();

				},
				error:function(){
					$('#form_page_credit').after('<div class="warning">Ошибка регистрации</div>');
				}
			});
		}
		
	});
*/











//Работа чекбоксов соглашения

	$('.confirm_button').on("click", function (eventagr) {
		$('.agreement-nav .checkbox__label').removeClass('input_error');	
			
		$('.agreement-nav div.warning').remove();
		var warn;
		eventagr.preventDefault();
		eventagr.stopPropagation();
		if (($('#agreement_3').prop('checked') == false) || ($('#agreement_4').prop('checked') == false)){
			
			if ($('#agreement_3').prop('checked') == false)   {
				$('.agreement_3').addClass('input_error');
			}
			if ($('#agreement_4').prop('checked') == false)   {
				$('.agreement_4').addClass('input_error');
			}
			
			warn = '<div class="warning">Выберите все пункты соглашения</div>';          
			$(warn).appendTo('.modal-footer__buttons');
			
			return false;
			
		}
		else {

			$('[name="orders_checkbox"]').prop('checked', true);
			$('.callback_close').trigger('click');

		}
		
	});



		
//Фильтрация ввода телефона, дня, года и инн
		
$('[name="orders_bday"],  [name="orders_byear"], [name="orders_phone"]').on('input', function() {
			
	var c = this.selectionStart;
	var r;
	r = /[^0-9]/gi;
	var inpval = $(this).val();
	if(r.test(inpval)) {
		$(this).val(inpval.replace(r, ''));
		c--;
	}
	this.setSelectionRange(c, c);
	
	var curyear = new Date().getFullYear();
	
	var len = inpval.length;
	if (($(this).hasClass('input_day')) && (inpval > 31)) {
		$(this).val(31);
	}
	else if (($(this).hasClass('input_year')) && (len > 3) && (inpval < 1940)) {
		$(this).val(1940);
	}
	else if (($(this).hasClass('input_year')) && (len > 3) && (inpval > curyear - 17)) {
		$(this).val(curyear - 17);
	}
	
});
		
//Фильтрация ввода фио и города
		
$('[name="orders_name"], [name="orders_surname"], [name="orders_middlename"], [name="orders_place"]').on('input', function() {
			
	var c = this.selectionStart;
	var r;
	r = /[^А-ЩЬЮЯҐЄІЇа-щьюяґєії-’]/gi;
	var inpval = $(this).val();
	if(r.test(inpval)) {
		$(this).val(inpval.replace(r, ''));
		c--;
	}
	this.setSelectionRange(c, c);
	
});
	
		
//Фильтрация ввода email 
		
$('[name="orders_email"]').on('input', function() {
			
	var c = this.selectionStart;
	var r;
	r = /[^a-zA-Z0-9-_@.]/gi;
	var inpval = $(this).val();
	if(r.test(inpval)) {
		$(this).val(inpval.replace(r, ''));
		c--;
	}
	this.setSelectionRange(c, c);
	
});

		
//Фильтрация ввода логина 
		
$('[name="form_login"]').on('input', function() {
			
	var c = this.selectionStart;
	var r;
	r = /[^a-zA-Zа-яА-Я0-9-_@.]/gi;
	var inpval = $(this).val();
	if(r.test(inpval)) {
		$(this).val(inpval.replace(r, ''));
		c--;
	}
	this.setSelectionRange(c, c);
	
});



/*
 * Проверка данных формы авторизации
 
 
	$('#form_page_login [type="submit"]').on("click", function (eventlog) {
		
		$('input').removeClass('input_error');	
			
		$('div.warning').remove();
		var warn;
		eventlog.preventDefault();
		eventlog.stopPropagation();
		if ((!$('[name="form_login"]').val()) || (!$('[name="form_password"]').val())){
			
			if (!$('[name="form_login"]').val())   {
				warn = '<div class="warning">Введите логин или телефон</div>';          
				$(warn).appendTo('#form_page_login .login__row');
				$('[name="form_login"]').addClass('input_error');
			}
			if (!$('[name="form_password"]').val())   {
				warn = '<div class="warning">Введите пароль</div>';          
				$(warn).appendTo('#form_page_login .password__row');
				$('[name="form_password"]').addClass('input_error');
			}			
			return false;
			
		}
		else {

			var form_login = $('[name="form_login"]').val();
			var form_password = $('[name="form_password"]').val();
			var form_type = $('[name="form_type"]').val();

			$.ajax({
				url:"./result.php",
				method:"POST",
				data:{form_login:form_login,form_password:form_password,form_type:form_type},
				dataType:"JSON",
				success:function(login_ok) {

					$('div.warning').remove();
					$('input').removeClass('input_error');
				
					$('#form_page_login').submit();

				},
				error:function(){
					$('#form_page_login').after('<div class="warning">Ошибка регистрации</div>');
				}
			});
		}
		
	});
*/














//Таймер акции

if ($('.product__special').length) {
/*
var timestamp;

	$.getJSON('./config/time.json', function(json) {
				
		$.each(json, function(k, v) {
			
				if (json[k].id.indexOf($('.product').attr('data-product-id')) >= 0) {
					//alert (json[k].timestamp);
					timestamp = json[k].timestamp;
					
					

timestamp = new Date(timestamp * 1000);

var end = new Date(timestamp);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            //document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
		    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

        document.getElementById('countd').innerHTML = days;
        document.getElementById('counth').innerHTML = hours;
        document.getElementById('countm').innerHTML = minutes;
        document.getElementById('counts').innerHTML = seconds;
    }

    timer = setInterval(showRemaining, 1000);
					
					
					
					
					
				}
			
		});
	});
*/	

//Галерея товара	
	

     $(document).ready(function (){
        var a = function(self){
           self.anchor.fancybox();
        };
        $("#pikame").PikaChoose({buildFinished:a, autoPlay:false, showCaption:false, carousel:true});
     });	
	
	
	
	
	

}




//Подсказка

$('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
         $(this).find('.tooltip').clone().appendTo('body').delay(100)
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip:not(.tool_pool .tooltip)').remove();
}).mousemove(function(e) {

        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
			//var tipw = mousex + pos_to_neg(parseInt($(this).attr("data-tipw")));
        $('.tooltip:not(.tool_pool .tooltip)').css({ top: mousey-5, right: $(window).width() - mousex});
		//console.log(tipw);
}); 









/*
 * Навигация по вкладкам товара
 */
if ($('.product__gallery').length) {
	
$('.showmore-comments, .showmore-comments2').on('click', function(eventcom2){
		eventcom2.preventDefault();
		eventcom2.stopPropagation();	
	$('a[href="#comments"]').trigger('click');
    $([document.documentElement, document.body]).animate({
        scrollTop: $('a[href="#comments"]').offset().top - 70
    }, 500);
});




$(".tabs").tabs({
    beforeActivate: function (event, ui) {
		if ( $(ui.newTab).find('a').attr('href') == "#about" ) {
			history.pushState("", document.title, window.location.pathname);
		}
		else {
			if(history.pushState) {
				history.pushState(null, null, $(ui.newTab).find('a').attr('href'));
			}
			else {
				location.hash = $(ui.newTab).find('a').attr('href');
			}
		}
    },
	activate: function(event, ui) {
		if (getSelectedTabIndex() === 2) {
			$('.comments').addClass('hidebottom');
		}
		else {
			$('.comments').removeClass('hidebottom');
		}
    }	
});

}

if (location.hash) {
  setTimeout(function() {
    if (location.hash === "#comments") {
		$('.comments').addClass('hidebottom');
    }
    window.scrollTo(0, 0);
  }, 1);
};



function getSelectedTabIndex() { 
    return $(".tabs").tabs('option', 'active');
}




if ($('#barrating').length) {
	$('#barrating option:selected').prop("selected", false);
}

 
/*
 * Функции переключения типов форм комментариев
 */



function fartcommSwitch() {
	$('.comments-form .title_2').html('Написать комментарий');
	$('.comments-form').removeClass('showfield');	
	$('.comments-form').removeClass('hidefield');
	$('.comments-form').addClass('hidefield');
	$('.form__cell_title.tswitch').text('Комментарий:');
	$('.comment_field[name="comment"]').attr('data-comment', ' комментарий ');
	$('.comment_field[name="form_type"]').val('comm');
	$('.comments-form button').text('Оставить комментарий');	
}


function freplySwitch() {
	$('.comments-form .title_2').html('Ответить на комментарий');
	$('.comments-form').removeClass('showfield');	
	$('.comments-form').removeClass('hidefield');
	$('.comments-form').addClass('hidefield');
	$('.form__cell_title.tswitch').text('Ответ:');
	$('.comment_field[name="comment"]').attr('data-comment', ' ответ ');
	$('.comment_field[name="form_type"]').val('comm');	
	$('.comments-form button').text('Ответить');	
}


function freviewSwitch() {
	$('.comments-form .title_2').html('Отзыв <span class="normal">на товар</span>');
	$('.comments-form').removeClass('showfield');	
	$('.comments-form').removeClass('hidefield');
	$('.comments-form').addClass('showfield');
	$('.form__cell_title.tswitch').text('Отзыв:');
	$('.comment_field[name="comment"]').attr('data-comment', ' отзыв ');
	$('.comment_field[name="form_type"]').val('rev');
	$('.comments-form button').text('Оставить отзыв');	
}


function fquestionSwitch() {
	$('.comments-form .title_2').html('Задать вопрос');	
	$('.comments-form').removeClass('showfield');	
	$('.comments-form').removeClass('hidefield');
	$('.comments-form').addClass('hidefield');
	$('.form__cell_title.tswitch').text('Вопрос:');
	$('.comment_field[name="comment"]').attr('data-comment',  ' вопрос ');
	$('.comment_field[name="form_type"]').val('comm');	
	$('.comments-form button').text('Задать вопрос');	
}


$('.comments-form .form__cell .comment_field').val('');

/*
 * Проверка данных формы комментария
 
 
	$('#form_comment [type="submit"]').on("click", function (eventcom) {
		$('div.warning').remove();
		var warn;
		eventcom.preventDefault();
		eventcom.stopPropagation();
		if ((!$('.showfield [name="rating"]').val()) || (!$('.showfield [name="pros"]').val())  || (!$('.showfield [name="cons"]').val()) || (!$('[name="comment"]').val()) || (!$('[name="user_name"]').val())  || (!$('[name="user_email"]').val())){
			
			if (!$('.showfield [name="rating"]').val())   {
				warn = '<div class="warning">Выберите рейтинг товара</div>';          
				$(warn).appendTo('#form_comment .barrating');
			}
			if (!$('.showfield [name="pros"]').val())   {
				warn = '<div class="warning">Введите достоинства товара</div>';          
				$(warn).appendTo('#form_comment .form__pros');
			}
			if (!$('.showfield [name="cons"]').val())   {
				warn = '<div class="warning">Введите недостатки товара</div>';          
				$(warn).appendTo('#form_comment .form__cons');
			}			
			if (!$('[name="comment"]').val())   {
				warn = '<div class="warning">Введите'+ $('[name="comment"]').attr("data-comment") +'</div>';          
				$(warn).appendTo('#form_comment .form__comment');
			}
			if (!$('[name="user_name"]').val())   {
				warn = '<div class="warning">Введите имя</div>';          
				$(warn).appendTo('#form_comment .form__user_name');
			}
			if (!$('[name="user_email"]').val())   {
				warn = '<div class="warning">Введите email</div>';          
				$(warn).appendTo('#form_comment .form__user_email');
			}				
			return false;
			
		}
		else {

			var rating = $('.showfield [name="rating"]').val();
			var pros = $('.showfield [name="pros"]').val();
			var cons = $('.showfield [name="cons"]').val();
			var comment = $('[name="comment"]').val();			
			var user_name = $('[name="user_name"]').val();
			var user_email = $('[name="user_email"]').val();
			var form_type = $('[name="form_type"]').val();

			$.ajax({
				url:"./result.php",
				method:"POST",
				data:{rating:rating,pros:pros,cons:cons,comment:comment,user_name:user_name,user_email:user_email,form_type:form_type},
				dataType:"JSON",
				success:function(comment_ok) {

					$('div.warning').remove();
				warn = '<div class="warning green">Ваш'+ $('[name="comment"]').attr("data-comment") +'отправлен на модерацию</div>';          
				$(warn).appendTo('#form_comment [type="submit"]');	
				$('.comments-form .form__cell .comment_field').val('');

				},
				error:function(){
					$('#form_search_auto').after('<div class="warning">Ошибка регистрации</div>');
				}
			});
		}
		
	});
*/






/*
 * Проверка данных формы поиска в каталоге
 */

$(document).ready(function(){

$('.filters-bage-block').on('click', '.filters-bage .comments-form__close', function() { 
	if ($(this).data('fsel') != 0) {
		
		$( '.filters-input.select[data-fsel='+ $(this).data('fsel') +']' ).selectmenu().selectmenu('destroy');
		$( '.filters-input.select[data-fsel='+ $(this).data('fsel') +']' ).prop('selectedIndex',0);
		$( '.filters-input.select[data-fsel='+ $(this).data('fsel') +']' ).selectmenu();	
		ajaxFilter();
	}
	if ($(this).data('fcheck') != 0) {
		
		$( '.filters-input.form__checkbox[data-fcheck="'+ $(this).data('fcheck') +'"]' ).prop('checked', false);
		ajaxFilter();
	}
	if ($(this).data('fslide') != 0) {
		  var options = $( "#slider-price" ).slider( 'option' );

	$( "#slider-price" ).slider( 'values', [ options.min, options.max ] );

    $( ".price-slider__value.value_min" ).val(  $( "#slider-price" ).slider( "values", 0 )  + " грн.");
	$( ".price-slider__value.value_max" ).val(  $( "#slider-price" ).slider( "values", 1 )  + " грн." );
		ajaxFilter();
	}	
 
});	 
 
}); 
 
 
 
 
 
 
 
if ($('#slider-price').length) {
	var  slider_price_min = '0 грн.';
	var  slider_price_max = '99999 грн.';;	
	//alert(slider_price_min + slider_price_max);
} 

 
//$('.filters-input.form__checkbox').prop('checked', false); 
/*
var  slider_price_active = false; 

$( "#slider-price" ).slider({
    change: function() {
		if (slider_price_active == true) {
			ajaxFilter();
		}
    }
});
 
$(document).ready(function(){

$('.filters-input.form__checkbox').on('input', function(){ 
	ajaxFilter();
}); 

$( ".filters-input.select" ).selectmenu({
  change: function(event, ui) {
	ajaxFilter();	
  }
});	
	
}); 
 
 
function ajaxFilter() {
	var filter_check = true;

	$.ajax({
		url:"./result.php",
		method:"POST",
		data:{filter_check:filter_check},
		dataType:"JSON",
		success:function(filter_ok) {

			//alert();
			$('.filters-bage').remove();
			
			$('.filters-input.select option:selected:not(:first-child)').each(function(){
				var this_fsel;
				this_fsel = '<span class="filters-bage"><span class="comments-form__close" data-fslide="0" data-fcheck="0" data-fsel="' + $(this).closest('.filters-input.select').data('fsel') + '"></span><span class="filters-bage-text">' + $(this).closest('.filters-input.select').data('fsel') + ' ' + $(this).val() + '</span></span>';
				$(this_fsel).appendTo('.filters-bage-block'); 
			});				
			
			$('.filters-input.form__checkbox:checked').each(function(){
				var this_fcheck;
				this_fcheck = '<span class="filters-bage"><span class="comments-form__close" data-fslide="0" data-fsel="0" data-fcheck="' + $(this).data('fcheck') + '"></span><span class="filters-bage-text">' + $(this).val() + '</span></span>';
				$(this_fcheck).appendTo('.filters-bage-block'); 
			});
			
			if (($('.price-slider__value[name=filters-pricemin]').val() != slider_price_min) || ($('.price-slider__value[name=filters-pricemax]').val() != slider_price_max)) {
				var this_fslide;
				this_fslide = '<span class="filters-bage"><span class="comments-form__close" data-fsel="0" data-fcheck="0" data-fslide="fslide"></span><span class="filters-bage-text">' + $('.price-slider__value[name=filters-pricemin]').val() + ' - ' + $('.price-slider__value[name=filters-pricemax]').val() + '</span></span>';
				$(this_fslide).appendTo('.filters-bage-block'); 			
			
			
			}

		},
		error:function(){
			//alert();
			return false;
		}
	});	
} 

*/




//Добавление класса к body

if ($('.content-filters').length) {
	$('body').addClass('catalog-page');
}



//Переключение подменю
	
$('.li-switch-block').each(function(index) {

var hideHeight = 40;
var showHeight = $(this).closest('li').outerHeight(true);	


$(this).on('click', function(){
	
		if ($(this).closest('li').hasClass('li-switch-closed')) {
		    $(this).closest('li').removeClass('li-switch-closed');
			$(this).closest('li').addClass('li-switch-opened');

		}
		else if ($(this).closest('li').hasClass('li-switch-opened')) {
		    $(this).closest('li').removeClass('li-switch-opened');
			$(this).closest('li').addClass('li-switch-closed');	
		
		}

	});

	});
	


//Строка выбора автомобиля

$('#form_search input.search-form__input').val('');

var car_brand_str = '';
var car_year_str = '';
var car_model_str = '';
var car_type_str = '';
var car_modification_str = '';

$('#form_search_auto input.form__checkbox').change(function() {
	
	   $('#form_search input.search-form__input').val('');
	
if (!$('#form_search_auto [name=car_brand]:checked').length)  {
	car_brand_str = '';
}
else {
	car_brand_str = $('#form_search_auto [name=car_brand]:checked').val();
}

if (!$('#form_search_auto [name=car_year]:checked').length)  {
	car_year_str = '';
}
else {
	car_year_str = $('#form_search_auto [name=car_year]:checked').val();
}

if (!$('#form_search_auto [name=car_model]:checked').length)  {
	car_model_str = '';
}
else {
	car_model_str = $('#form_search_auto [name=car_model]:checked').val();
}

if (!$('#form_search_auto [name=car_type]:checked').length)  {
	car_type_str = '';
}
else {
	car_type_str = $('#form_search_auto [name=car_type]:checked').val();
}

if (!$('#form_search_auto [name=car_modification]:checked').length)  {
	car_modification_str = '';
}
else {
	car_modification_str = $('#form_search_auto [name=car_modification]:checked').val();
}	
	
	
    $('#form_search input.search-form__input').val(car_brand_str + ' ' + car_year_str + ' ' + car_model_str + ' ' + car_type_str + ' ' + car_modification_str);	
});






//Пропорции иконок в новостях


	
if ($('.article-prw__photo').length) {
$(window).on("resize", function () {	
	$('.article-prw__photo').each(function(){
		
		var portrait_w = $(this).width();
		var portrait_h = $(this).height();

		var portrait_img_h = $(this).find('img').height();

		$(this).css('height', portrait_w * 0.55);
		var portrait_par_h = portrait_w * 0.55;

		//console.log(portrait_par_h + ' ' + portrait_img_h);
		
		if (portrait_img_h < portrait_par_h) {
			setTimeout(function(){
			$(this).find('img').css({"height": portrait_h * 1.2});
			$(this).find('img').css({"max-width": "none"});

			$(this).find('img').css({"width": portrait_w * 1.2});
			}, 100);
		}
		
	});
}).resize();	
}




/*
 * Адаптация под моб. экраны
 */
 
  if ($(window).width() < 1160)  {
		$('.product__delivery').insertAfter($('.product__main'));
		$('.filter-block').appendTo('body');		
	} 
 
 
  if ($(window).width() < 880)  {
		$('ul.catalog-filters-list').appendTo('#slide_window .callback_center2.filter-nav');
		$('.filter-block').appendTo('body');		
	}
 
 
 if ($(window).width() < 1260)  {
		$('.footer__about').insertAfter($('.footer__feedback'));
		$('.menu-ul').appendTo('#slide_window .callback_center2.site-nav'); 
		$('.search-form').appendTo('.site-nav.desk');
	}
	
	
$(window).resize(function(){
	   if ($(document.activeElement).prop('type') === 'text') {
      return;
   } else {
	
	setTimeout(function(){
	if ($(window).width() >= 1160)  {
		$('.product__delivery').appendTo('.product__main');
		$('.filter-block').appendTo('body');		
	} 	
	else  if ($(window).width() < 1160)  {
		$('.product__delivery').insertAfter($('.product__main'));
		$('.filter-block').appendTo('body');		
	} 	
		
		
	//window.location.reload();
	if ($(window).width() >= 880)  {
		$('ul.catalog-filters-list').appendTo('.catalog-filters');
		$('.filter-block').appendTo('.catalog-filters');
		
	}
	else  if ($(window).width() < 880)  {
		$('ul.catalog-filters-list').appendTo('#slide_window .callback_center2.filter-nav');
		$('.filter-block').appendTo('body');
		$(".box_back #slide_window.callback2 .callback_close").trigger('click');
	}



	if ($(window).width() >= 1260)  {
		$('.footer__about').insertBefore($('.footer-nav'));
		$('.menu-ul').appendTo('.site-nav.desk'); 
		$('.search-form').insertAfter($('.site-header .logo'));
	}
	else if ($(window).width() < 1260)  {
		$('.footer__about').insertAfter($('.footer__feedback'));
		$('.menu-ul').appendTo('#slide_window .callback_center2.site-nav'); 
		$('.search-form').appendTo('.site-nav.desk');
	}
	
  
  
});

}

});






/*
 * Проверка данных формы поиска автомобиля


	$('#form_search_auto [type=submit]').on("click", function (event) {
		$('div.warning').remove();
		event.preventDefault();
		if ((!$('[name=car_brand]:checked').length) || (!$('[name=car_year]:checked').length)  || (!$('[name=car_model]:checked').length) || (!$('[name=car_type]:checked').length) || (!$('[name=car_modification]:checked').length) ){
			
			
			if (!$('[name=car_brand]:checked').length)  {
				$('#form_search_auto .selection-step-car-brand .selection-step__title').after('<div class="warning">Введите марку автомобиля</div>');
			}
			if (!$('[name=car_year]:checked').length)  {
				$('#form_search_auto .selection-step-car-year .selection-step__title').after('<div class="warning">Введите год выпуска</div>');
			}
			if (!$('[name=car_model]:checked').length)  {
				$('#form_search_auto .selection-step-car-model .selection-step__title').after('<div class="warning">Введите модель</div>');
			}
			if (!$('[name=car_type]:checked').length)  {
				$('#form_search_auto .selection-step-car-type .selection-step__title').after('<div class="warning">Введите тип кузова</div>');
			}
			if (!$('[name=car_modification]:checked').length)  {
				$('#form_search_auto .selection-step-car-modification .selection-step__title').after('<div class="warning">Введите модификацию</div>');
			}			
			
			return false;
			
		}
		else {

			var car_brand = $('#form_search_auto [name=car_brand]:checked').val();
			var car_year = $('#form_search_auto [name=car_year]:checked').val();
			var car_model = $('#form_search_auto [name=car_model]:checked').val();
			var car_type = $('#form_search_auto [name=car_type]:checked').val();
			var car_modification = $('#form_search_auto [name=car_modification]:checked').val();	

			$.ajax({
				url:"./result.php",
				method:"POST",
				data:{car_brand:car_brand,car_year:car_year,car_model:car_model,car_type:car_type,car_modification:car_modification},
				dataType:"JSON",
				success:function(step_ok) {

					$('div.warning').remove();
					$('#form_search_auto').submit();

				},
				error:function(){
					$('#form_search_auto').after('<div class="warning">Ошибка регистрации</div>');
				}
			});
		}
	});


	$('#form_search [type=submit]').on("click", function (event) {
		$('.sub-search-element').remove();
		event.preventDefault();
		if (!$('[name=search_input]').val().length) {
			
			
			if (number_active == true)  {
				$('.sub-search').append('<div class="sub-search-element"><div class="warning">Введите номер запчасти</div></div>');
			}
			if (vin_active == true)  {
				$('.sub-search').append('<div class="sub-search-element"><div class="warning">Введите VIN код</div></div>');
			}
			
			return false;
			
		}
		else {
			//Объявление переменных для запроса
			var search_input = $('[name=search_input]').val();
			$.ajax({
				url:"./result.php",
				method:"POST",
				data:{search_input:search_input},
				dataType:"JSON",
				success:function(step_ok) {

					$('.sub-search-element').remove();
					$('#form_search').submit();

				},
				error:function(){
					$('.sub-search').append('<div class="sub-search-element"><div class="warning">Ошибка</div></div>');
				}
			});
		}
	});
 */

/*
 * Селект в шапке
 */
 
$('#form_search_auto .form__checkbox').prop('checked', false); 

$(".select.topselect").selectmenu().selectmenu('destroy');
$(".select.topselect").prop('selectedIndex',0);

$('.search-form__input.boxfade').val('');
var number_active = true;
var vin_active = false;
var popup_active = false;

//console.log(popup_active);

var pholder_sel1 = $('.pholder-sel1').text();                
var pholder_sel2 = $('.pholder-sel2').text();   
var pholder_sel3 = $('.pholder-sel3').text();   
$('.search-form__input.boxfade').attr("placeholder", pholder_sel1);
$('.search-form__input.boxfade').attr("maxlength", "100");

$( ".select.topselect" ).selectmenu({
  change: function(event, ui) {
	$('.search-form__input.boxfade').val('');  
	if (ui.item.element.data('seltype') == 'sel3') {
		number_active = false;
		vin_active = false;
		popup_active = true;
		$('.search-form__input.boxfade').attr("placeholder", pholder_sel3);		
		$("option.popup-button.carsearch").trigger('click');
		$('.search-form__input.boxfade').attr("maxlength", "100");
		}
	else if (ui.item.element.data('seltype') == 'sel1') {
		$('.search-form__input.boxfade').attr("placeholder", pholder_sel1);	
		number_active = true;
		vin_active = false;		
		popup_active = false;
		$('#form_search_auto .form__checkbox').prop('checked', false);	
		$('.search-form__input.boxfade').attr("maxlength", "100");	
		}
	else if (ui.item.element.data('seltype') == 'sel2') {
		$('.search-form__input.boxfade').attr("placeholder", pholder_sel2);
		number_active = false;
		vin_active = true;
		popup_active = false;
		$('#form_search_auto .form__checkbox').prop('checked', false);
		$('.search-form__input.boxfade').attr("maxlength", "17");	
		}	
  }
});

/*
 * Селект сортировки в каталоге
 */
 
$( ".select.select_dashed" ).selectmenu({
  change: function(event, ui) {
	$(".content-filters__views form").submit();	
  }
});




/*		
//Фильтрация ввода номера запчасти и VIN кода
		
$('.search-form__input.boxfade').on('input', function() {
			
	var c = this.selectionStart;
	var r;
	if (number_active == true) {
		r = /[^a-zA-Zа-яА-Я0-9]/gi;
	}
	else if (vin_active == true) {
		r = /[^A-HJ-NPR-Za-hj-npr-z0-9]/gi;
	}
	var inpval = $(this).val();
	if(r.test(inpval)) {
		$(this).val(inpval.replace(r, ''));
		c--;
	}
	this.setSelectionRange(c, c);
	
	var len = inpval.length;
	if ((number_active == true) && (len > 2)) {
		loadDataJson(inpval);
		//alert();
	}

	$('.sub-search-element').detach();
		
});


//Загрузка и распределение данных из файла при вводе номера запчасти 

function loadDataJson(that) {
					
	$.getJSON('./config/test.json', function(json) {
				
		$.each(json, function(k, v) {
			
				if (json[k].number.indexOf(that) >= 0) {
					var rnum = json[k].number.replace(that, '<span class="sub-search-hi">' + that + '</span>');
					var ssel = '<div class="sub-search-element"><a href="#" class="search-element">' + json[k].title + ' (' + rnum + ') - ' + json[k].price + ' грн. </a></div>';
					$('.sub-search').append(ssel);
					//alert(json[k].title);
				}
			
		});
	});
}





/*
 * Рейтинг
 */


	$('.product__reviews.prodrev, .product__reviews.comrev').each(function(cit){

		var rate_raw = $(this).data('rating');      
		var rate_int = parseInt(rate_raw, 10);
		var rate_dem = rate_raw.toString().split('.');
		var dem =  parseInt(rate_dem[1], 10);
		//alert(rate_int + dem);
		$(this).find('.star_icon').each(function(phimg,element){
			
			
			if (phimg <= rate_int - 1) {
				//alert(phimg);
				$(element).removeClass('star_empty');
				$(element).addClass('star_full');
			}			
			
		});
		
		if (dem >= 5) {
			$(this).find('.star_icon').eq(rate_int).removeClass('star_empty');
			$(this).find('.star_icon').eq(rate_int).addClass('star_half');
		}
		
	});


//Красная цена скидки
		
if ($('.product-item').find('.label_discount').length)  {
	$('.product-item').find('.price_actual').addClass('price-red');
}



/*
 * Попап и боковое меню
 */

	$('#slide_window').hide().removeClass('slide');
	$('#popup_window').hide();
	$('.callback_center2.filter-nav').hide();
	$('.callback_center2.site-nav').hide();	
	$('.callback_center2.cars-nav').hide();
	$('.callback_center2.commentsform-nav').hide();
	$('.callback_center2.agreement-nav').hide();
	$('.callback_center2.servinfo-nav').hide();
	$('.callback_center2.partsnum-nav').hide();


	$('[name="orders_checkbox"]').prop('checked', false);
	$('#agreement_3').prop('checked', false);
	$('#agreement_4').prop('checked', false);	
	
	$(".callback_close, .agreement-nav .form__button.red").on('click',function (e) {
		$('.box_back').trigger('click');

	});
	  
	
	$('.box_back').click(function() {
		
	if ($(".box_back").hasClass("box_show")) {		
		
	$('.box_back').fadeOut(600);
	$('#form_search input.search-form__input').val('');
	$('#slide_window').hide().removeClass('slide');
	$('#popup_window').hide();
	$('.callback_center2.filter-nav').hide();
	$('.callback_center2.site-nav').hide();	
	$('.callback_center2.cars-nav').hide();
	$('.callback_center2.commentsform-nav').hide();	
	$('.callback_center2.agreement-nav').hide();
	$('.callback_center2.servinfo-nav').hide();
	$('.callback_center2.partsnum-nav').hide();
	
	popup_active = false;
	
	$('#form_search_auto .form__checkbox').prop('checked', false);
	}
	});

	$('.box_back .callback2').click(function(eventx){
    eventx.stopPropagation();
	});


	$(".boxfade").click(function (ex) {
		if (($(this).hasClass('carsearch')) && (popup_active == false)) {
			//alert();
			return;
		}
		else {	
		
		ex.preventDefault();
		 ex.stopPropagation();
	$('.box_back').addClass('box_show');
	
	if (($(this).hasClass('popup-button')) && (popup_active == true)) {
		if ($(this).hasClass('carsearch')) {
			$('.callback_center2.cars-nav').show();
		}
		
		$('#popup_window').show();
		
	}
	else if (($(this).hasClass('popup-button')) && (popup_active == false)) {

		if ($(this).hasClass('fcomment')) {
			
			if ($(this).hasClass('fartcomm')) {
				fartcommSwitch();
			}
			else if ($(this).hasClass('freply')) {
				freplySwitch();
			}
			else if ($(this).hasClass('freview')) {
				freviewSwitch();
			}
			else if ($(this).hasClass('fquestion')) {
				fquestionSwitch();
			}
						
			$('.callback_center2.commentsform-nav').show();
		}
		else if ($(this).hasClass('polit')) {
						
			$('.callback_center2.agreement-nav').show();
		}		
		else if ($(this).hasClass('servinfo')) {
			
			$('.callback_center2.servinfo-nav .modal--title').text($(this).text());						
			$('.callback_center2.servinfo-nav .modal-content-inner').text($(this).closest('.order-td__name').find('.cart-modal__note').text());
			$('.callback_center2.servinfo-nav').show();
		}
		else if ($(this).hasClass('part-line-button')) {
						
			$('.callback_center2.partsnum-nav').show();
		}
		
		$('#popup_window').show();
	}
	else {
		if ($(this).hasClass('menufade')) {
			$('.callback_center2.site-nav').show();
		}
		else if ($(this).hasClass('filter-button')) {
			$('.callback_center2.filter-nav').show();
		}
		
		
		$('#slide_window').show().addClass('slide');
		
	}
	
	jQuery('.box_back').css('opacity', '1');
	$('.box_back').fadeIn(600);

}
	});
	













/*
 * Фиксация шапки при скролле
 */
 

var top_reached = false;

	
	//var distance = $('.navigation-top').offset().top;
    $window = $(window);
	
	var navHeight = $('.site-nav.desk').height();
	var branding = $('.site-header').height();
	var topbar = $('.topbar').height();	
	var distance =  branding + topbar + 15;
	var contleft = $('.site-header').offset().left


	$window.scroll(function() {
    if ( $window.scrollTop() > distance ) {
		
		
		$('.site-nav.desk').css({ "position":"fixed", "top":0 });
		$('.site-content').css({ "margin-top":55 });
	
/*
	
	if( $(window).width() > 1279) {		
		$('.site-nav.desk').css({ "margin-left": contleft});		 
	}
	else {		
		$('.site-nav.desk').css({ "padding-left": contleft});		 
	}
*/
		
	top_reached = true;
	}
	
	
	if ((top_reached == true) && ( $window.scrollTop() < distance )) {
		
		$('.site-nav.desk').css({'position':'relative', 'top':'auto' });
		$('.site-content').css({ "margin-top": 0 });	

/*		
	if( $(window).width() > 1279) {		
		$('.site-nav.desk').css({ "margin-left": "auto"});		 
	}
	else {		
		$('.site-nav.desk').css({ "padding-left": 0});		 
	}
*/	
	
	}
	
	
	}); 





/*
$(document).ready(function (){
	$("#pikame").PikaChoose({autoPlay:false});
});
*/

/*
 * Replace all SVG images with inline SVG
 */
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');
        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        // Replace image with new SVG
        $img.replaceWith($svg);
    }, 'xml');
});



$(document).ready(function() {
	
	var owlslideshow = $('.slideshow');
    owlslideshow.owlCarousel({
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
		autoplay:true,
		autoplaytimeout:1000,
		dots: true,
		nav: true,
		margin: 0,
    	loop: true,
		items: 1
    });
	var owlcarousel = $('.catalog-carousel');
    owlcarousel.owlCarousel({
		autoplaytimeout:1000,
		dots: true,
		nav: true,
		margin: 0,
		loop: true,
        responsive: {
          270: {
            dots: false,
			items: 2
          },
		  490: {
			dots: false,
            items: 2
          },
          820: {
			dots: false,
            items: 3
          },
          1080: {
            items: 4
          },
          1280: {
            items: 5
          }		  
        }
    });
	
});

$(function () {
	$('#barrating').barrating({ showSelectedRating:false });
	
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
	/*
	$('.comments-form__open').click(function(){
	  	$('.comments-form').addClass("active");
	  	return false;
	});
	$('.comments-form__close').click(function(){
	  	$('.comments-form').removeClass("active");
	  	return false;
	});
	*/
	
});

$( function() {
	$(".select").selectmenu();
	$( ".tabs" ).tabs();
	$( "#datepicker" ).datepicker();
	
	
	$( "#slider-wheels" ).slider({
		range: "min",
      	min: 1,
      	max: 20,
		step: 1,
      	value: 4,
      	slide: function( event, ui ) {
        	$( "#input-wheels" ).val( ui.value );
      	}
    });
    $( "#input-wheels" ).val( $( "#slider-wheels" ).slider( "value" ) );
	
	
	
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
	
	$( "#slider-price" ).slider({
		
    	range: true,
		min: 0,
		max: 99999,
      	values: [ 0, 99999 ],
		slide: function( event, ui ) {
        	$( ".price-slider__value.value_min" ).val( ui.values[ 0 ]  + " грн.");
			$( ".price-slider__value.value_max" ).val( ui.values[ 1 ]  + " грн.");
			slider_price_active = true;
		}

    });
    $( ".price-slider__value.value_min" ).val(  $( "#slider-price" ).slider( "values", 0 )  + " грн.");
	$( ".price-slider__value.value_max" ).val(  $( "#slider-price" ).slider( "values", 1 )  + " грн." );
	//$('.ui-slider-handle').draggable();
	
	$(".row__checkboxes").on("change", ":checkbox", function() {
    var $all   = $(".row__checkboxes").find(":checkbox");
    var $first = $all.eq(0);
    if ($first.is(":checked")) { 
        $all.not(this).prop("checked", false);
    }
});

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
/*
(function($){
	$(window).on("load",function(){
		$(".selection-step__content").mCustomScrollbar();
		$(".table-wrap").mCustomScrollbar();
	});
})(jQuery);
*/
$(document).ready(function(){
	$('.selection-step__header').click(function(){
		if(!$(this).parent().hasClass('active')){
			$('.selection-step').removeClass('active'); 
			$(this).parent().addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});
});


$(document).ready(function() { 

 
		$( '[name="select_shop"]' ).selectmenu().selectmenu('destroy');
		$( '[name="select_shop"]' ).prop('selectedIndex',0);
		$( '[name="select_shop"]' ).selectmenu();	 
		$( '[name="select_shop"]' ).val('');

	$('.radio_delivery').click(function() { 
	
		$( '[name="select_shop"]' ).selectmenu().selectmenu('destroy');
		$( '[name="select_shop"]' ).prop('selectedIndex',0);
		$( '[name="select_shop"]' ).selectmenu();	 
		$( '[name="shop_adr"]' ).val('');
	
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
    
        if (scroll > 250) {
            calc.addClass("fixed").fadeIn('fast');
			result.addClass("calc-fixed").fadeIn('fast');
	    } else {
           calc.removeClass("fixed").fadeIn('fast');
		   result.removeClass("calc-fixed").fadeIn('fast');
	    }
    });
});


