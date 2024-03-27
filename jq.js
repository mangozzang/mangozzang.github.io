
function swiper_1 (){
  const swiper = new Swiper('.swiper-section-1 .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
    }
  swiper_1();
  function swiper_2 (){
  const swiper = new Swiper('.swiper-section-2 .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
    }
  swiper_2();

document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX + 10; // document의 x좌표값
    let mouseY = e.pageY + 10; // document의 y좌표값

    let cursor = document.querySelector('.cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

$(function(){
  var scrollTop = $(window).scrollTop();
     $(".profile-btn").click(function(){
         var captionTop = $(".profile").offset().top;
         $("html, body").animate({scrollTop : captionTop}, 600);
         return false;
     });
 });
$(function(){
  var scrollTop = $(window).scrollTop();
     $(".web-btn").click(function(){
         var captionTop = $(".con-web-intro").offset().top;
         $("html, body").animate({scrollTop : captionTop}, 600);
         return false;
     });
});
$(function(){
  var scrollTop = $(window).scrollTop();
     $(".graphic-btn").click(function(){
         var captionTop = $(".con-graphic-intro").offset().top;
         $("html, body").animate({scrollTop : captionTop}, 600);
         return false;
     });
});
$(function(){
  var scrollTop = $(window).scrollTop();
     $(".contact-btn").click(function(){
         var captionTop = $(".contact").offset().top;
         $("html, body").animate({scrollTop : captionTop}, 600);
         return false;
     });
});

var floatPosition = parseInt($(".scroll-top").css('top'))
$(window).scroll(function() {
    // 현재 스크롤 위치
    var currentTop = $(window).scrollTop();
    var bannerTop = currentTop + floatPosition + "px";
    //이동 애니메이션
    $(".scroll-top").stop().animate({
      "top" : bannerTop
    }, 600);
}).scroll();
$(function(){
  var scrollTop = $(window).scrollTop();
     $(".scroll-top").click(function(){
         var captionTop = $(".intro").offset().top;
         $("html, body").animate({scrollTop : captionTop}, 600);
         return false;
     });
});

