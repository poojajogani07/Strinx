$(document).ready(function () {

  $('#slider1').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    margin: 0,
    dots: false,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      320: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })

  $('#slider2').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    margin: 30,
    dots: false,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      375: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  })
  
  $('#slider3').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    margin: 30,
    dots: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    // autoplay: true,
    // autoplayTimeout: 5000,
    responsive: {
      375: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  $('#slider4').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    margin: 0,
    dots: false,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      320: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  })

//  loader
$(document).ready(function(){
  setTimeout(function(){
      $('#loading-bar-spinner').fadeOut();
  },2000);
})

  // start top to bottom section

  $(function () {
    $('.logo-sec').hide()
    //Scroll event
    $(window).scroll(function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 200) $('.go-top').fadeIn('slow');
      if (scrolled < 200) $('.go-top').fadeOut('slow');


    });

    //Click event
    $('.go-top').click(function () {
      $("html, body").animate({ scrollTop: "0" }, 500);
    });

    // start accordian section
    $(function() {
      $('.acc_ctrl').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).next()
          .stop()
          .slideUp(300);
        } else {
          $(this).addClass('active');
          $(this).next()
          .stop()
          .slideDown(300);
        }
      });
    });
    

    // counter on scroll
    var counted = 0;
    $(window).scroll(function () {

      var oTop = $('.ecommerce-sales-icon').offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.ecommerece-sales-value').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          },

            {

              duration: 2000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        counted = 1;
      }

    });

  })

  var w = $(window).width();
  $(window).on('resize , scroll',function () {

    w = $(window).width();
    if (w > 992) {
        var scrolled = $(window).scrollTop();
        if (scrolled > 200) {
          $('.logo-sec').show();
        }
        else {
          $('.logo-sec').hide();
        }
    }

  })
});