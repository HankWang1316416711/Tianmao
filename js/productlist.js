$(function(){
	$("#mouseenter").mouseenter(function(){
		$(".display").show();
	});
	$("#contenttopleft").mouseleave(function(){
		$(".display").hide();
	});
	$(".display li").each(function(){
		$(this).mouseenter(function(){
			$(this).css("background","#F3F0F0");
		});
		$(this).mouseleave(function(){
			$(this).css("background","white");
		});
	});
	// =============================================

});