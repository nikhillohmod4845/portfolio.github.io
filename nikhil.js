//  slide-up script  //
  
<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });
  
  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //
  
    $("html").css("scrollBehavior", "smooth");
  });

//  Toggle Navbar  //
  
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

//  Typing Text Animation  //
  
  var typed = new Typed(".typing", {
    strings: [
      "Fullstack Developer",
      "Front End Developer",
      "Back End Developer"
  ],
    typeSpeed: 100,
    backSpeed: 60,
    // loop: true
});
  

// var options = {
//     strings: [ 'a', 'Full Stack Developer', 'Frontend/Backend Developer'],
//     typeSpeed: 100,
//     backspeed: 50
//     };
// var typed = new Typed('typing', option)


//  Owl Carousel  //
  
// $(".carousel").owlCarousel({
//     margin: 20,
//     loop: true,
//     autoplay: true,
//     autoplayTimeOut: 2000,
//     autoplayHoverPause: true,
//     responsive: {
//     0: {
//         items: 1,
//         nav: false
//       },
//       600: {
//         items: 2,
//         nav: false
//       },
//       1000: {
//         items: 3,
//         nav: false
//       }
//   }
// });
  
   const ABC = ()=>{
    console.log("heelo");
   }