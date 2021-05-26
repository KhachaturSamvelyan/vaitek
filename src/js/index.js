var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.p',
      prevEl: '.n',
    },
    slidersPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });



  $(".search-btn").click(function(){
    $('.form-input').fadeIn("slow",function (){
  })
})

$(".svg-close").click(function(){
  $('.form-input').fadeOut("slow",function (){
  $('.form-input').hide()

})
})

$('.header-mobile-main').hide()
$(".burger").click(function(){
  $('.header-mobile-main').animate({width:'toggle'},350,function (){
    $('.header-mobile-main').show()
   
})
})

$(".svg-menu-close").click(function(){
  $('.header-mobile-main').animate({width:'toggle'},350,function (){
    $('.header-mobile-main').hide()
})
})

if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) 
{
  $('#title').css("-webkit-text-fill-color" , "inherit")
  $('#title').css("-webkit-background-clip" , "unset")
  $('#title').css("background" , "transparent")
  $('.our_projects_slider_blok_text-bg').css("background", "transparent")
}
