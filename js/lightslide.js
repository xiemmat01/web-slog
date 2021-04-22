$(document).ready(function () {
    var slider = $('#brand-slider').lightSlider({
        item: 5,
        auto: true,
        loop: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        enableDrag: false,
        pager: false,
        controls: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    item: 4,
                    slideMove: 1,
                    slideMargin: 20,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    item: 4,
                    slideMove: 1,
                    slideMargin: 20,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 20,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 20,
                }
            },
            {
                breakpoint: 432,
                settings: {
                    item: 2,
                    slideMove: 1,
                }
            },
            {
                breakpoint: 370,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            }
        ]
    });
    $('#goToPrevSlide').on('click', function () {
        slider.goToPrevSlide();
    });
    $('#goToNextSlide').on('click', function () {
        slider.goToNextSlide();
    });
    var slide2 = $('#news-slide').lightSlider({
        item: 3,
        auto: false,
        loop: true,
        slideMove: 1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        pauseOnHover: true,
        controls: false,
        pager: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    item: 1,
                    slideMove: 2
                }
            }
        ],
    });
    $('#goToPrevSlide2').on('click', function () {
        slide2.goToPrevSlide();
    });
    $('#goToNextSlide2').on('click', function () {
        slide2.goToNextSlide();
    });
    // 
    $('#slideIntro-1').lightSlider({
        auto: true,
        enableDrag: false,
        controls: false,
        pager: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ],
    });
});

