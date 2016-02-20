(function () {
    var scrollTimeout;
    var backToTop = document.querySelector('#backToTop');

    // Make sure body covers full height of browser
    function updateBodyMinHeight() {
        document.querySelector('body').style.minHeight = window.innerHeight + 'px';
    }

    window.addEventListener('resize', function (evt) {
        updateBodyMinHeight();
    });

    document.querySelector('#mobileMenu').addEventListener('change', function (evt) {
        console.log(evt);
        window.location = evt.target.value;
    });

    backToTop.addEventListener('click', function () {
        window.scrollTo(0, 0);
    });

    backToTop.addEventListener('touchStart', function () {
        window.scrollTo(0, 0);
    });

    document.addEventListener('scroll', function (evt) {
        if (scrollTimeout) { clearTimeout(scrollTimeout); }

        scrollTimeout = setTimeout(function () {
            if ((evt.pageY || window.pageYOffset) > 100) {
                backToTop.classList.add('enabled');
            } else {
                backToTop.classList.remove('enabled');
            }
        }, 200);
    });

    // Update body height at page load
    updateBodyMinHeight();
}());
