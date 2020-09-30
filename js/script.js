$(document).ready(function () {
    "use strict";
    // Sticky Nav
    var menu_top_offset = $("nav").offset().top;
    $(window).on("scroll", function () {
        var scrollSize = $(window).scrollTop();

        if (scrollSize > menu_top_offset) {
            $("nav").addClass("sticky-nav");
        } else {
            $("nav").removeClass("sticky-nav");
        }
    });

    new WOW().init();
});