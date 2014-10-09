var wid = -document.body.clientWidth;

$(document).ready(function(){
  $(".one-one").click(function(){
  $(".member").animate({left:wid});
  });
});
$(document).ready(function(){
  $(".one-two").click(function(){
  $(".member").animate({left:"0px"});
  });
});

$(document).ready(function(){
  $(".one-three").click(function(){
  $(".member").animate({left:(2*wid)});
  });
});

$(document).ready(function(){
  $(".one-four").click(function(){
  $(".member").animate({left:wid});
  });
});

