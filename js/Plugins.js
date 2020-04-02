$( document ).ready(function() {

    
    /*Start of Header plugins*/ 
      // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }


});

    $('.js-scroll-trigger').click(function()
    {
     $('.navbar-collapse').collapse('hide');
   });
   
    $(window).on("scroll",function(){
        if($(window).scrollTop()){
          $('.navbar').addClass('effect');
        }
        else
        {
          $('.navbar').removeClass('effect');
        }
      })

      
    var secondimage = function(){
        
        $('.firstimage img').css('border' , '1px solid #0c0c0c');
        $('.secondimage img').css('border' , '1px solid white');
        $('.header').css('background-image' , 'url(images/background/background2.jpg)');
        }
    var firstimage = function (){
        $('.secondimage img').css('border' , '1px solid #0c0c0c');
        $('.firstimage img').css('border' , '1px solid white');
        $('.header').css('background-image' , 'url(images/background/background1.jpg)');
        }
           
    $('.firstimage').click(function (){
 
        firstimage(); 
    });


    $('.secondimage').click(function (){
    
        secondimage();
    });
    $('.left').click(function (){
        firstimage(); 
    });
    $('.right').click(function (){
        secondimage(); 
    })
 
    /*End of Header plugins*/ 

  

});