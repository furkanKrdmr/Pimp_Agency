/*  début Custom.html.twig fait par furkan */
$(document).ready(function () {
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
          slidesToShow: 1,
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

  $(".slider-01").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
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
    if ($("#title").text().indexOf("moto") !== -1) {
      $("#title").text("Choisissez votre couleur");
    } else if ($("#title").text().indexOf("couleur") !== -1){
      $("#title").text("Choisissez vos rétroviseurs");
    }else {
      $("#title").text("Choisissez votre Selle");
    }
  });

  $(".slick-prev").click(function () {
    if ($("#title").text().indexOf("Selle") !== -1) {
      $("#title").text("Choisissez vos rétroviseurs");
    } else if ($("#title").text().indexOf("rétroviseurs") !== -1){
      $("#title").text("Choisissez votre couleur");
    } else {
      $("#title").text("Choisissez votre moto");
    }
  });
});

function imgMoto1() {
  let imageId = document.getElementById("image");
  document.getElementById('name_moto').setAttribute('value', 'Aprilia');
  document.getElementById('prix_moto').setAttribute('value', 15000);
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/img/aprilia1480x800.png";
  }
}

function imgMoto2() {
  let imageId = document.getElementById("image");
  document.getElementById('name_moto').setAttribute('value', 'Duccati');
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/img/Duccati1480x800.jpg";
  }
}


function imgFullYellow() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_moto').setAttribute('value','Jaune');
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/Jaune/moto-Y-B-B.jpg";
  }
}

function imgFullRed() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_moto').setAttribute('value','Rouge');
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/Jaune/moto-R-B-B.jpg";
  }
}

function imgFullGreen() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_moto').setAttribute('value','Vert');
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/Jaune/moto-G-B-B.jpg";
  }
}

function imgFullBlue() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_moto').setAttribute('value', 'blue');
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/Jaune/moto-Bl-B-B.jpg";


  }
}



function retroYellow() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_retro').setAttribute('value', 'Jaune');
  document.getElementById('prix_retro').setAttribute('value', 90);
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/img/constru.jpg";
  }
}

function retroBlue() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_retro').setAttribute('value', 'bleu');
  document.getElementById('prix_retro').setAttribute('value', 80);
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/img/constru.jpg";
  }
}

function retroGreen() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_retro').setAttribute('value', 'vert');
  document.getElementById('prix_retro').setAttribute('value', 70);
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/img/constru.jpg";
  }
}

function retroRed() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_retro').setAttribute('value', 'rouge');
  document.getElementById('prix_retro').setAttribute('value', 100);
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/img/constru.jpg";
  }
}



function selleYellow() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_selle').setAttribute('value', 'Jaune');
  document.getElementById('prix_selle').setAttribute('value', 190);
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/img/constru.jpg";
  }
}

function selleBlue() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_selle').setAttribute('value', 'bleu');
  document.getElementById('prix_selle').setAttribute('value', 480);
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/img/constru.jpg";
  }
}

function selleGreen() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_selle').setAttribute('value', 'vert');
  document.getElementById('prix_selle').setAttribute('value', 570);
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/img/constru.jpg";
  }
}

function selleRed() {
  let imageId = document.getElementById("image");
  document.getElementById('couleur_selle').setAttribute('value', 'rouge');
  document.getElementById('prix_selle').setAttribute('value', 700);
  if (imageId.src !== undefined) {
    imageId.src = "../assets/Images/img/constru.jpg";
  }
}

/*  fin Custom.html.twig fait par furkan */




