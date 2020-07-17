/* PRELOADER
window.addEventListener('load', () => {

carga();

function carga() {
    document.getElementById('circulo').className = 'hide';
}
}) */

document.addEventListener('DOMContentLoaded', function () {
    /* NAVBAR */
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    /* SLIDER */
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        indicators: false,
        //height:200,
        duration: 1000,
        interval: 3000
    });

    /* CAROUSEL */
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });

    /* TABS IN CARDS */
    var elems = document.querySelectorAll('.tabs');
    var instances = M.Tabs.init(elems);

    /* SCROLLSPY */
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {
        scrollOffset: 70 // el margen superior, no queda pegado arriba de todo por el section
    });
});