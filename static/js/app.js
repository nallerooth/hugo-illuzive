(function () {
    // Highlight current menu item
    var menuItems = document.querySelectorAll('.nav-bar ul a');

    Array.prototype.forEach.call(menuItems, function (link) {
        var re = new RegExp(link.dataset.matches);
        if (re.test(window.location.pathname)) {
            link.classList.add('active');
        }
    });
}());
