/*  début Custom.html.twig fait par furkan */
$(document).ready(function () {
  $(".container").slick({
    dots: false,
    infinite: false,
    draggabele: false,
    swipe: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });

  $(".slider-1").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  $(".slider-2").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".slider-3").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".slider-4").slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".slick-next").click(function () {
    if ($("#title").text().indexOf("couleur") !== -1) {
      $("#title").text("Choisissez votre rétroviseurs");
    } else if ($("#title").text().indexOf("rétroviseurs")){
      $("#title").text("Choisissez votre selle");
    }
  });

  $(".slick-prev").click(function () {
    if ($("#title").text().indexOf("rétroviseurs") !== -1) {
      $("#title").text("Choisissez votre couleur");
    } else if ($("#title").text().indexOf("couleur") !== 17){
      $("#title").text("Choisissez votre rétroviseurs");
    } else {
      $("#title").text("Choisissez votre selle");
    }
  });
});

function imgFullYellow() {
  let imageId = document.getElementById("image");
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/Jaune/moto-Y-B-B.jpg";
  }
}

function imgFullRed() {
  let imageId = document.getElementById("image");
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/Jaune/moto-R-B-B.jpg";
  }
}

function imgFullGreen() {
  let imageId = document.getElementById("image");
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/Jaune/moto-G-B-B.jpg";
  }
}

function imgFullYellow() {
  let imageId = document.getElementById("image");
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/Jaune/moto-Y-B-B.jpg";
  }
}
function imgFullBlue() {
  let imageId = document.getElementById("image");
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/Jaune/moto-Bl-B-B.jpg";
  }
}

function imgYellowBlue() {
  let imageId = document.getElementById("image");
  if (imageId.getAttribute("src") == "../assets/Images/Jaune/moto-Y-B-B.jpg") {
    imageId.src = "../assets/Images/Jaune/moto-Y-Bl-Bl.jpg";
  }
}

/*  fin Custom.html.twig fait par furkan */
//Début js slider moto

$(".slider-moto").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
});

//fin js slider moto

// début slider vitrine

$(".slider-vitrine").slick({
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
});
//fin slider vitrine
