/*
 Project Name : Travel Listing
 Author Company : Theme Foundry
 Project Date: 29-09-2017
 Developer :   sufyan319@outlook.com
 */


jQuery(document).ready(function($) {
	$("ul.nav.navbar-nav li a").click(function(){
    $("body.body-innerwrapper.offcanvas").removeClass("offcanvas");
});
	$('#lang-my').bind('change', function () { // bind change event to select
        var url = $(this).val(); // get selected value
        if (url != '') { // require a URL
            window.location = url; // redirect
        }
        return false;
    });

    "use strict";

    var win = $(window);
    //$("#loading").delay(2000).fadeOut(500);
    win.on('load', function() {
        $("#pre_loader").addClass('down');
    });

    //============================================
    //Screen height
    //=============================================
    $(".screen-height").css({
        'height': window.innerHeight
    });

    win.resize(function() {
        $(".screen-height").css({
            'height': window.innerHeight
        });
    });
    //============================================
    //flip clock
    //=============================================
    var clock;

    // Grab the current date
    var currentDate = new Date();

    // Set some date in the future. In this case, it's always Jan 1
    var futureDate  = new Date("may 02, 2018 06:00:00");
    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    // Instantiate a coutdown FlipClock
    clock = $('.counter').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
    //===============================================
    //On load Scroll Top
    //===============================================
    $('html, body').scrollTop(0);

    win.on('load', function() {
        setTimeout(function() {
            $('html, body').scrollTop(0);
        }, 0);
    });

//============================================
    // Mobile sub menu
    //============================================
    if (win.width() <= 767) {
        $("#slide-nav #menu_nav ul > li.dropdown").append('<div class="more"></div>');

        $("#slide-nav #menu_nav").on("click", ".more", function(e) {
            e.stopPropagation();

            $(this).parent().toggleClass("current")
                .children("#slide-nav #menu_nav ul > li.dropdown > ul").toggleClass("open");

        });

    }

    win.resize(function() {
        if (window.innerWidth > 767) {
            if ($('#slide-nav #menu_nav ul > li.dropdown .more').length !== 0) {
                $('#slide-nav #menu_nav ul > li.dropdown div').remove('.more');
            }
        } else {
            $("#slide-nav #menu_nav ul > li.dropdown").append('<div class="more"></div>');
        }
    });

    var $body = $('body'),
        $wrapper = $('.body-innerwrapper'),
        $toggler = $('.navbar-toggle'),
        $close = $('.close'),
        $offCanvas = $('.navbar-collapse');

    $toggler.on('click', function(event) {
        event.preventDefault();
        stopBubble(event);
        setTimeout(offCanvasShow, 50);
    });

    $close.on('click', function(event) {
        event.preventDefault();
        offCanvasClose();
    });

    var offCanvasShow = function() {
        $body.addClass('offcanvas');
        $wrapper.on('click', offCanvasClose);
        $close.on('click', offCanvasClose);
        $offCanvas.on('click', stopBubble);

    };

    var offCanvasClose = function() {
        $body.removeClass('offcanvas');
        $wrapper.off('click', offCanvasClose);
        $close.off('click', offCanvasClose);
        $offCanvas.off('click', stopBubble);
    };

    var stopBubble = function(e) {
        e.stopPropagation();
        return true;
    };

//============================================
    //smooth scroll
    //=============================================
    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    //===============================================
    //animation
    //==============================================
    // Show element on scroll

    var $elems = $('.animate-in');
    var winheight = $(window).height();
    var fullheight = $(document).height();

    win.scroll(function() {
        animate_elems();
    });
   win.load(function() {
        animate_elems();
    });

    function animate_elems() {
        var wintop = $(window).scrollTop(); // calculate distance from top of window
        // loop through each item to check when it animates
        $elems.each(function() {
            var $elm = $(this);

            var topcoords = $elm.offset().top; // element's distance from top of page in pixels

            if (wintop > (topcoords - (winheight * .99999))) {
                // animate when top of the window is 3/4 above the element
                $elm.addClass('animated');

            }

        });
    } // end animate_elems()
});
