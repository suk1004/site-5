$(document).ready(function () {

    /* header_menu */
    $(".gnb").hover(function(){
      $(this).find(".main .sub").stop().slideDown();
      $(".sub_bgbox").stop().slideDown(300);
    },function(){
    $(this).find(".main .sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp(300);
    });


  /* heder_햄버거메뉴 */
  $(".trigger").click(function(){
    $(this).toggleClass("active");
  });

  site=true;
  $(".trigger").click(function(){
    $("this").toggleClass("active");
    $(".header_modal").slideToggle(300);

  });

  
  /* ___________job1-1_________ */

  $(".tab li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    
    let inum=$(this).index();
    $(this).find("img").attr({"src":"image/tab"+ inum +".png"});
      let result = $(this).attr("data-alt");
      $(".tabContents div").removeClass("active");
      $("#" + result).addClass("active");
    });


    /* 모달 */
  $(".menu").click(function(){
    $(this).next().show();
    // $("html").css({"overflow-y":"hidden"})
    //이거 있으면 안됨^^ y축 스크롤 사라짐
  });



  // close 버튼과 검정배경 영역을 클릭할 때...
  $(".close, .pop").click(function(){
    $(".pop").hide();

    // $("html").css({"overflow-y":"hidden"})
  
  });
  

  
/* job1-2 */

let banner_w= $(".ban ul li").width()+30;  
$(".ban ul li:last").prependTo(".ban ul");
$(".ban ul").css({ left:-banner_w});


// 자동으로 슬라이드 함수생성
function bannerAuto(){
  $(".ban ul").stop().animate({left:"-="+banner_w+"px"},500,function(){			
    $(".ban ul li:first-child").appendTo(".ban ul"); 
    $(this).css({left:-banner_w}); 
  });
};

bauto = setInterval(bannerAuto,4000);

// 다음보기
$(".ban_btn .ban_right").click(function(){
  clearInterval(bauto);
  $(".ban ul").stop().animate({left:"-="+banner_w+"px"},500,function(){			
  });	
  bauto = setInterval(bannerAuto,4000);
});

// 이전보기
$(".ban_btn .ban_left").click(function(){
  clearInterval(bauto);
  $(".ban ul").stop().animate({left:"+="+banner_w+"px"},500,function(){			
    $(".ban ul li:last-child").prependTo(".ban ul"); 
    $(this).css({left:-banner_w}); 
  });	
  bauto = setInterval(bannerAuto,4000);
});

$(".ban").hover(function(){ 
  clearInterval(bauto);
}, function(){
  bauto = setInterval(bannerAuto,4000);
});  
});


