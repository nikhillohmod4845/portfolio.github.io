function menuHandle() {
    document.querySelector(".navbar .menu").classList.toggle("active");
  };

    let menuList = document.querySelectorAll('.menu a');
    menuList.forEach(element => {
      element.onclick = function() {myFunction()};
    });

    function myFunction() {
      document.querySelector(".navbar .menu").classList.toggle("active");
    }