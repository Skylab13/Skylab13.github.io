function move2(num){
	switch(num){
		case 1: 
			document.getElementById("scroll2").style.WebkitTransform = "translateX(-100%)";
			document.getElementById("al2").style.display = "block"; 
			document.getElementById("al1").style.display = "none" ;
			document.getElementById("al3").style.display = "none" ;
			break;
		case 2: 
			document.getElementById("scroll2").style.WebkitTransform = "translateX(0%)";
			document.getElementById("al1").style.display = "block";
			document.getElementById("al2").style.display = "none" ;
			document.getElementById("al3").style.display = "none" ;
			break;
		case 3:
			document.getElementById("scroll2").style.WebkitTransform = "translateX(-200%)";
			document.getElementById("al3").style.display = "block";
			document.getElementById("al1").style.display = "none" ;
			document.getElementById("al2").style.display = "none" ;
			break;
		case 4: 
			document.getElementById("scroll2").style.WebkitTransform = "translateX(-100%)";
			document.getElementById("al2").style.display = "block";
			document.getElementById("al1").style.display = "none" ;
			document.getElementById("al3").style.display = "none" ;
			break;
	}
}
$(document).ready(function(){
	$('.box').click(function(){
		$('.box').fadeOut(2000);
		$('.box').children('p').fadeOut(1000);
	});
});