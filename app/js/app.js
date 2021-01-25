$(document).ready(function() {
    /*$('.slider').slick({
        dots: true
    });*/
    const button = $('#button');
    const intro = $('#intro');
    const introSectionHeight = intro.height();
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if(scroll > introSectionHeight) {
            button.removeClass('hidden');
            //animate__bounceOut
        } else {
            button.addClass('hidden');
        }
    });
})
