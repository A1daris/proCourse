$(document).ready(function() {

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

});