$(function(){
	$("#address").mousedown(function(){
		$("#addressAll").show();
	});
	$("#address").mouseleave(function(){
		$("#addressAll").hide();
	});	
	$("#price").mousedown(function(){
		$(".pricebutton").show();
	});
	$("#price").mouseleave(function(){
		$(".pricebutton").hide();
	});	
	
	$("#content #border").each(function(){
		$(this).mouseenter(function(){
			$(this).css("borderColor","#DD1199");
		});
		$(this).mouseleave(function(){
			$(this).css("borderColor","white");
		})
	});
});