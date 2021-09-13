window.pcs = function(id) {
    'use strict';

    function get(id){
        return document.getElementById(id);
    }

    function setCss(elem, prop, value){
        elem.style[prop] = value;
    }

    function getCss(elem, prop) {
        return getComputedStyle(elem)[prop];
    }


    const theElem = get(id);
    return {

        css: function (prop, value) {
            if (arguments.length === 1) {
                return getCss(theElem, prop);
            }

            setCss(theElem, prop, value);
            return this;
        },
        click: function (callback) {
            theElem.addEventListener('click', callback);
            return this;
        },

        hide: function () {
            setCss(theElem, 'display', 'none');
            return this;
        },

        show: function () {
            setCss(theElem, 'display', 'block');
            return this;
        }
    };
        
};