window.onload = function () {

    // * NodeList.prototype.forEach() polyfill
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    menuBtn = document.querySelector('.toggle-menu');
    hiddenNavigation = document.querySelector('.header__navigation');

    menuBtn.onclick = function () {
        hiddenNavigation.classList.toggle('none');
    }

};

