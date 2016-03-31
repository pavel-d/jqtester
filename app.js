$(function(){

	var $slider = $(".slider");
	var $city = $(".almaty img");

	$slider.slider({
		value: 100,
		min: 0,
		max: 200
	});

	$slider.on("slide", function(event, ui){
		$city.css({ "-webkit-filter": "brightness("+ui.value+"%)" });
	});
});

