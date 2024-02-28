// $(document).ready(function(){
//     $('.ser_slider').slickNext({
     
//     });

// });
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

  // slick slider 
  $(document).ready(function(){
    $('.ser_slider').slick({
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 3000,
      pauseOnHover:true,
      dots: false,
      
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          // dots: false,
          prevArrow: false,
          nextArrow: false,
        }
    
      }, {
    
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: true,
          dots: false,
          prevArrow: false,
          nextArrow: false,
        }
    
      }, {
    
        breakpoint: 575,
        settings:{
          slidesToShow: 1,
          dots: false,
          prevArrow: false,
          nextArrow: false,
        } // destroys slick
    
      }]
    });
  });
  // map 
  function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("map_p"),mapProp);
    }
