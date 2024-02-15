$(document).ready(function(){
  
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

/* __________________________ */
/* index main */
  let $img = $(".changeimg ul li");
  let $text = $(".changeimg ul li .des");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let $btn = $(".btn ul li");
  let oldImg=0;  
  let newImg=0; 
  let oldText=0;  
  let newText=0;
  let count = $img.length;
  
  //이미지 전환효과 함수
  function changeImg(newImg){ 
    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("imgVisible");
			$img.eq(newImg).addClass("imgVisible"); 
      $btn.eq(oldImg).removeClass("active"); 
      $btn.eq(newImg).addClass("active"); 
    };
    oldImg = newImg;
  };

  //텍스스 전환효과 함수
  function changeText(newText){ 
    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
      $text.eq(newText).addClass("textVisible"); 
    };
    oldText = newText;
  };


  //자동함수 생성
  function autoImg(){
    newImg++;
    if(newImg>count-1){ 
      newImg=0;
    }
    changeImg(newImg);
  };

  function autoText(){
    newText++;
    if(newText>count-1){ 
      newText=0;
		}
		changeText(newText);
  }

  timer1=setInterval(autoImg,4000); 
  timer2=setInterval(autoText,4000);


  //좌우버튼
  $rbtn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);
    newImg--;
    if(newImg<0){ 
      newImg=count-1;
    }
    changeImg(newImg);
    
    newText--;
    if(newText<0){ 
      newText=count-1;
		}
		changeText(newText);
    
    timer1=setInterval(autoImg,4000); 
    timer2=setInterval(autoText,4000);
  });

  $lbtn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);
    newImg++;
    if(newImg>count-1){ 
      newImg=0;
    }
    changeImg(newImg);

    newText++;
    if(newText>count-1){ 
      newText=0;
		}
		changeText(newText);
    
    timer1=setInterval(autoImg,4000); 
    timer2=setInterval(autoText,4000);
  });

  
  //하단버튼
  $btn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);
    timer1=setInterval(autoImg,4000); 
    timer2=setInterval(autoText,4000);
    newImg=$(this).index();
    changeImg(newImg);
    

  });


/* __________________________ */



/* about1 */
//숫자 애니메이션
  const $counters = $(".counter");
  
  const exposurePercentage = 100; 
  const duration = 1000; 
  
  const addCommas = true; 
  function updateCounter($el, start, end) {
      let startTime;
      function animateCounter(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = (timestamp - startTime) / duration;
          const current = Math.round(start + progress * (end - start));
          const formattedNumber = addCommas ? current.toLocaleString() : current;
          $el.text(formattedNumber);
          
          if (progress < 1) {
              requestAnimationFrame(animateCounter);
          } else {
              $el.text(addCommas ? end.toLocaleString() : end);
          }
      }
      requestAnimationFrame(animateCounter);
  }

  
  $(window).on('scroll', function() {
      $counters.each(function() {
          const $el = $(this);
          if (!$el.data('scrolled')) {
              const rect = $el[0].getBoundingClientRect();
              const winHeight = window.innerHeight;
              const contentHeight = rect.bottom - rect.top;

              if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                  const start = parseInt($el.data("start"));
                  const end = parseInt($el.data("end"));

                  updateCounter($el, start, end);
                  $el.data('scrolled', true);
              }
          }
      });
  }).scroll();

/* index3 */
  
  let oimg=0;
  let nimg=0;

  $(".index3_thumbs a").hover(function(){
    nimg=$(this).index();
    $(".index3_thumbs a").eq(oimg).removeClass("on");
    $(".index3_thumbs a").eq(nimg).addClass("on");
    $(".index3_largeImg>img").eq(oimg).stop().fadeOut(1000);
    $(".index3_largeImg>img").eq(nimg).stop().fadeIn(1000);
    oimg = nimg;
    return false;
  });


/* business1 */
let soldidx=0;
let sidx=0;
let simg_w=$("#business1_largeImg img").width();

$(".business1_thumbs a").click(function(){

  sidx=$(this).index();
  smove=-(simg_w*sidx);

  $("#business1_gallery #business1_largeImg").animate({"left":smove});
  $(".business1_thumbs a").eq(soldidx).removeClass("on");
  $(".business1_thumbs a").eq(sidx).addClass("on");
  soldidx = sidx;
  return false;
});


  /* marketing1-1 */
  let banner_w= $(".marketing1_ban ul li").width()+30; 

  $(".marketing1_ban ul li:last").prependTo(".marketing1_ban ul");
  $(".marketing1_ban ul").css({ left:-banner_w});

  //다음보기
  $(".marketing_ban_btn .marketing_ban_right").click(function(){
    $(".marketing1_ban ul").stop().animate({left:"-="+banner_w+"px"},500,function(){			
			$(".marketing1_ban ul li:first-child").appendTo(".marketing1_ban ul");
			$(this).css({left:-banner_w}); 
		});	
  });

  //이전보기
  $(".marketing_ban_btn .marketing_ban_left").click(function(){
    $(".marketing1_ban ul").stop().animate({left:"+="+banner_w+"px"},500,function(){			
			$(".marketing1_ban ul li:last-child").prependTo(".marketing1_ban ul"); 
			$(this).css({left:-banner_w});
		});	
  });


  /* marketing1-2 */
  let goldidx=0;
  let gidx=0;

  function galleryImg(gidx){

    if(goldidx != gidx){

      $(".marketing1-2_largeImg li").eq(goldidx).stop().fadeOut(300);
      $(".marketing1-2_largeImg li").eq(gidx).stop().fadeIn(300);
    };
    goldidx=gidx;
  };

  $(".marketing1-2_thumbs li").click(function(){
    gidx=$(this).index();
    galleryImg(gidx);
  })


/* business1-2 */
$(".tab li").click(function(){

  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  
  let inum=$(this).index();
  $(this).find("img").attr({"src":"image/tab"+ inum +".png"});
    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#" + result).addClass("active");
  });

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


  });
  