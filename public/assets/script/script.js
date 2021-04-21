   //Début js slider moto

$('.slider-moto').slick
({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'});
  
    //fin js slider moto

    //Début du slider choix de couleur fait par furkan
$('.slider').slick
({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]});

  // début slider vitrine
  
  $('.slider-vitrine').slick({
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
          slidesToShow: 3
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