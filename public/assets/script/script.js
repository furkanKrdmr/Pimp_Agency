   //Début js slider moto

$('.slider-moto').slick
({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'});
  
    //fin js slider moto



  // début slider vitrine
  
  $('.slider-vitrine').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 2,
    autoplay: true,
  autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

 

  //fin slider vitrine