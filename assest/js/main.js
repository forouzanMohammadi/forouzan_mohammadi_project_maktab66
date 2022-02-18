$(function(){

    /* --- CAROUSEL SETTINGS --- */
    
  function moveRight(){
      $('.slider figure div:last-child').prependTo('.slider figure');

  };

  function moveLeft(){
      $('.slider figure div:first-child').appendTo('.slider figure');
    
  };
  
  $('.prev').on('click',function(){
      moveLeft();
  });

  $('.next').on('click',function(){
      moveRight();
  });

  /* --- HAMBURGER MENU --- */
  
  $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
  });
  /* --- BUTTON HOVER --- */
  $('#book').mouseenter(function(){
    $(this).css({backgroundPosition: '0 -80px',color:'#c5bc58'})
  });

  $('#book').mouseout(function(){
    $(this).css({backgroundPosition: '0 -30px' , color:'#fff'})
  });

  $('.req').mouseenter(function(){
    $(this).css({backgroundPosition: '0 -80px',color:'#fff'})
  });
  
  $('.req').mouseout(function(){
    $(this).css({backgroundPosition: '0 -30px' , color:'#6fb586'})
  })

  $('.viewRoom').mouseenter(function(){
    $(this).css({backgroundPosition: '0 -80px',color:'#fff'})
  });
  
  $('.viewRoom').mouseout(function(){
    $(this).css({backgroundPosition: '0 -30px' , color:'#000'})
  })
  /* --- Second Slider(owl carousel) --- */
  $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:9000,
    autoplayHoverPuse:true,
    // navigation : true,
    dots:true
  });
  
});








