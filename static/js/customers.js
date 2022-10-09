document.addEventListener("DOMContentLoaded", function (event) {
    if (document.querySelectorAll('.logo-slider').length > 0) {
        const slider = tns({
            container: ".logo-slider",
            items: 3,
            slideBy: 1,
            axis: 'vertical',
            autoplayDirection: 'forward',
            "mouseDrag": false,
            "swipeAngle": false,
            "speed": 500,
            "autoplay": true,
            touch: false,
            autoplayButtonOutput: false,
            nav: false,
            loop: true,
            autoHeight: false,
            autoWidth: false,
            preventActionWhenRunning: true,
            preventScrollOnTouch: 'auto',
            controlsContainer: '.slider-controls',
        });
    }
});
//console.log("heey");
