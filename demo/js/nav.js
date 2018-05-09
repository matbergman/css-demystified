$(function() {

   /* Navigation - mobile menu */

    $(".nav__menu").on("click", function() {
        $(".nav__list").toggleClass("nav__list--active");

        if ($(".nav__list").hasClass("nav__list--active")) {
            showMenu();
        }

        else {
            hideMenu();
        }
    });

    /* Navigation - hide mobile menu when resizing browser from mobile to desktop */

    $(window).resize(function() {
        if ($(window).width() > 768) {
            $(".nav__list").removeClass("nav__list--active");
            hideMenu();
        }
    });
});

function showMenu() {

    var menuTop = $(".nav").height();

    $("html").css("overflow-y","hidden"); // Prevent browser page scrolling when menu is displayed
    $('.nav__list').css("top",menuTop+"px"); // Position menu based on its contents
    $(".nav__list").height($(document).height()-300);
}

function hideMenu() {
    $("html").css("overflow-y","visible");
    $(".nav__list").height("auto");
}