function hideAll(){
	$("div.productsAsideCategorys").hide();
}

function showProductsAsideCategory(cid){

	$("div#eachCategory[cid="+ cid +"]" ).css("background","white");
	$("div#eachCategory[cid="+ cid +"] a").css("color","#000");
	$("div.productsAsideCategorys[ cid="+ cid +"]").show();
}

function hideProductsAsideCategorys( cid ){
	$("div#eachCategory[ cid="+ cid +"]").css("background", "#e2e2e3");
	$("div#eachCategory[ cid="+ cid +"] a").css("color","#337AB7");
	$("div.productsAsideCategorys[cid="+ cid +"]").hide();
}

$(function(){
	$("div#eachCategory").mouseenter(function(){
		var cid = $(this).attr("cid");
		// alert("cid");
		hideAll();
		showProductsAsideCategory(cid);
	});
	$("div#eachCategory").mouseleave(function(){
		var cid = $(this).attr("cid");
		hideProductsAsideCategorys(cid);
	});
	$("div.productsAsideCategorys").mouseenter(function(){
		var cid = $(this).attr("cid");
		hideAll();
		showProductsAsideCategory(cid);
	});
	$("div.productsAsideCategorys").mouseleave(function(){
		var cid = $(this).attr("cid");
		hideProductsAsideCategorys(cid);
	});


})