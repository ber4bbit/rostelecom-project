const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 200,
    effect: 'slide',
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoHeight: true,
    centeredSlides: true,

});

// swiper.slideNext(200, true)

setInterval(() => {
    swiper.slideNext(300, true)
}, 5000)