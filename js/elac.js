
  AOS.init();

window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.querySelector(".brand-img").style.height = "3rem";
            document.querySelector(".brand-name").style.fontSize ="1.8rem";
            document.querySelector(".brand-subname").style.fontSize ="0rem";
            document.querySelector(".brand-subname").style.opacity ="0";
            

          } else {
            document.querySelector(".brand-img").style.height = "5rem";
            document.querySelector(".brand-name").style.fontSize ="2rem";
            document.querySelector(".brand-subname").style.fontSize ="1rem";
            document.querySelector(".brand-subname").style.opacity ="1";
          }
        }


$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});
	