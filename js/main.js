$(document).ready(function(){
  $('.1').on('click', function(){
    $('.content img').attr('src', 'img/screen1.jpg')
  });
  $('.2').on('click', function(){
    $('.content img').attr('src', 'img/screen2.jpg')
  });
  $('.3').on('click', function(){
    $('.content img').attr('src', 'img/screen3.jpg')
  });
  $('#more').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#intro').offset().top
    },1000);
  });
  $('#avServices').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#services').offset().top
    },1000);
  });
  $(window).scroll(function(){
    if($(window).scrollTop()>= 1000){
      $('#app').fadeIn('slow');
    }
  });
});
