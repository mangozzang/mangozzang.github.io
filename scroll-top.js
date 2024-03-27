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
         var captionTop = $("body").offset().top;
         $("html, body").animate({scrollTop : captionTop}, 600);
         return false;
     });
});

