document.addEventListener("DOMContentLoaded", function (event) {
    if (document.querySelectorAll('.comment-slider').length > 0) {
        const slider1 = tns({
            container: ".comment-slider",
            items: 1,
            slideBy: 1,
            axis: 'vertical',
            autoplayDirection: 'forward',
            "mouseDrag": false,
            "swipeAngle": false,
            "speed": 500,
            "autoplay": false,
            touch: false,
            autoplayButtonOutput: false,
            nav: false,
            loop: true,
            autoHeight: false,
            autoWidth: false,
            preventActionWhenRunning: true,
            preventScrollOnTouch: 'auto',
            controlsContainer: '.comment-controls',
        });
    }
});
// console.log("heey");
