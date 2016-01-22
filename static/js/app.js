(function () {
    // Make sure body covers full height of browser
    function updateBodyMinHeight() {
        document.querySelector('body').style.minHeight = window.innerHeight + 'px'
    }

    window.addEventListener('resize', function (evt) {
        updateBodyMinHeight();
    });

    // Update body height at page load
    updateBodyMinHeight();

    // Highlight current menu item
    var menuItems = document.querySelectorAll('.nav-bar ul a');

    Array.prototype.forEach.call(menuItems, function (link) {
        var re = new RegExp(link.dataset.matches);
        if (re.test(window.location.pathname)) {
            link.classList.add('active');
        }
    });
}());
