  $('.center').slick({
      centerMode: false,
      focusOnSelect: false,
      dots: false,
      useCSS: true,
      useTransform: true,
      arrows: false,
      variableWidth: true,
      slidesToShow: 1,
      responsive: [{
              breakpoint: 768,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1,

              }
          }, {
              breakpoint: 480,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
          },
          {
              breakpoint: 320,
              settings: {
                  slidesToShow: 1
              }
          }
      ]
  });

  function js() {
      document.getElementById("collapsibleNavbar").classList.toggle("play");
  }