$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: false,
        infinite: true,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: '<button class="slick-arrow slick-prev"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M2.82799 7.778L9.19199 14.142L7.77799 15.556L-1.43051e-05 7.778L7.77799 0L9.19199 1.414L2.82799 7.778Z" fill="#6E6E6E"/>\n' +
            '</svg>\n</button>',
        nextArrow: '<button class="slick-arrow slick-next"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M7.17201 7.778L0.808014 14.142L2.22201 15.556L10 7.778L2.22201 0L0.808014 1.414L7.17201 7.778Z" fill="#6E6E6E"/>\n' +
            '</svg>\n</button>',
        customPaging: function(slider, i) {
            // this example would render "tabs" with titles
            return '<span class="dot"></span>';
        },
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    arrows: false,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
})
