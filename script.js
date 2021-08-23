$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
$('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
      if(this.scroll > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
      }
    });
    
     //slide-up script
     var body = $("html, body");
body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
   alert("Finished animating");
});
      //toggle menu/navbar script//

       $('.menu-btn').click(function(){
           $('.navbar .menu').toggleClass("active");
           $('.menu-btn i').toggleClass("active");
       });   
       //typing animution script
       var typed = new Typed(".typing",{
         strings: ["FrontEnd Dev", "Software Developer", "Blogger", " Designer", "Freelancer"], 
          typeSpeed: 100,
          backSpeed: 60,
          loop:true
        });
        var typed = new Typed(".typing-2",{
            strings: ["youTuber", "Software Developer", "Blogger", " Designer", "Freelancer"], 
             typeSpeed: 100,
             backSpeed: 60,
             loop:true
           });
   
       // owl carousel script
    
       $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
       });
});