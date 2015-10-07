function move2(num){
	switch(num){
		case 1: document.getElementById("scroll2").style.WebkitTransform = "translateX(-100%)"; break;
		case 2: document.getElementById("scroll2").style.WebkitTransform = "translateX(0%)"; break;
		case 3: document.getElementById("scroll2").style.WebkitTransform = "translateX(-200%)"; break;
		case 4: document.getElementById("scroll2").style.WebkitTransform = "translateX(-100%)"; break;
	}
}
$(document).ready(function(){
	$('.box').click(function(){
		$('.box').fadeOut(2000);
		$('.box').children('p').fadeOut(1000);
	});
});