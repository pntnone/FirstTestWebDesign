$(function(){
	var $document = $(document)
	$(window).scroll(function(){
		if($document.scrollTop() >= 50){
			$('.navbar').addClass('navblue').removeClass('suanav');
		}
		else{
			$('.navbar').removeClass('navblue').addClass('suanav');
		}
	})
})