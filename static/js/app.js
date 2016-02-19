(function () {
    // Make sure body covers full height of browser
    function updateBodyMinHeight() {
        document.querySelector('body').style.minHeight = window.innerHeight + 'px';
    }

    window.addEventListener('resize', function (evt) {
        updateBodyMinHeight();
    });

    // Update body height at page load
    updateBodyMinHeight();
}());
