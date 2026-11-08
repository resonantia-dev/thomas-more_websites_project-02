
/* =========================================
   PROJECT 02 - JAVASCRIPT
   ========================================= */

// CV skills carousel (external Swiper plugin)

if (document.querySelector(".skills-swiper") && typeof Swiper !== "undefined") {
    new Swiper(".skills-swiper", {
        loop: true,
        spaceBetween: 20,

        pagination: {
            el: ".skills-swiper .swiper-pagination",
            clickable: true
        },

        breakpoints: {
            0: {
                slidesPerView: 1
            },

            576: {
                slidesPerView: 2
            },

            992: {
                slidesPerView: 3
            }
        }
    });
}
