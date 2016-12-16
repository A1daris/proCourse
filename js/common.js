$(document).ready(function() {

	$.stellar({
		responsive: true,
	});

	$('.popup').magnificPopup({type:'image'});
	$('.popup_c').magnificPopup({closeBtnInside: true});

$(".carousel").owlCarousel({
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});

	//$(".carousel").owlCarousel({
	//		loop : true,		
	//		navigation : true, // Show next and prev buttons
//    slideSpeed : 300,
//    paginationSpeed : 400,
//    singleItem : true,
//    navigationText: ""
//});

	function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize();
	});


	//tabs phone
	$(".top_phone .tab_item").not(":first").hide();
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//tabs
	$(".tabs_wrap .tab_item").not(":first").hide();
	$(".tabs_wrap .wrapper .tab_btn").click(function() {
		$(".tabs_wrap .wrapper .tab_btn").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_wrap .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".contacts .wrapper .tab_item").not(":first").hide();
	$(".contacts .tab").click(function() {
		$(".contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".contacts .wrapper .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$("footer .wrapper .tab_item").not(":first").hide();
	$("footer .tab").click(function() {
		$("footer .tab").removeClass("active").eq($(this).index()).addClass("active");
		$("footer .wrapper .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

});