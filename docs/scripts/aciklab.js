jQuery(document).ready(function ($) {
    $(function () {
      $(".venobox").venobox();
      AOS.init({
        once: true,
      });
    });
    
    function normalizeSlideHeights() {
      $(".carousel").each(function () {
        const items = $(".carousel-item", this);
        items.css("min-height", 0);
        const maxHeight = Math.max.apply(
          null,
          items
            .map(function () {
              return $(this).outerHeight();
            })
            .get()
        );
        items.css("min-height", maxHeight + "px");
      });
    }
    $(window).on("load resize orientationchange", normalizeSlideHeights);
    
    $(".dropdown").hover(function(){
      var dropdownMenu = $(this).children(".dropdown-menu");
      if(dropdownMenu.is(":visible")){
          dropdownMenu.parent().toggleClass("show");
      }
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    // Smooth Capalar
    try {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    } catch (err) {
      //
    }
  });   

