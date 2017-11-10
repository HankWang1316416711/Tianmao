$(function(){

	var  $m = $(".smallpic img");
	$m.each(function(){
		$(this).mouseenter(function(){
			var value = $(this).attr("src");
			$(".bigpic img ").attr("src",value);
			$(".smallpic img").css("borderCoor","black");
		});
	});	

});