var $ = jQuery;

// scrollspy function
var scrollSpy = () => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar_main'
    });

    // if ( $("#navbarSupportedContent").length ) {
    //     $("#navbarSupportedContent .navbar-nav a").each(function() {
    //         $(this).click(function() {
    //             $(".top-navigation .navbar .navbar-toggler").addClass("collapsed");
    //             $(".top-navigation .navbar .navbar-toggler").attr("aria-expanded", "false");
    //             $(".top-navigation .navbar .navbar-collapse").removeClass("show");
    //             $(".top-navigation .navbar .navbar-collapse").removeClass("collapse");
    //             $(".top-navigation .navbar .navbar-collapse").addClass("collapsing");
    //             setTimeout(() => {
    //                 $(".top-navigation .navbar .navbar-collapse").removeClass("collapsing");
    //                 $(".top-navigation .navbar .navbar-collapse").addClass("collapse");
    //             }, 300);
    //         });
    //     })
    // } 
}

var autoScrollSection = () => {
    if(window.location.hash) {
        var stripped_url = window.location.toString().split("#");

        if (stripped_url.length > 1) {
            $("a[href='#"+stripped_url[1]+"']")[0].click();
        }
    }
}

// top navigation function
var windowScrolled = () => {
    function checkScroll() {
        if ($(window).scrollTop() >= 50) {
            $(".top-navigation").addClass("scrolled");
        } else {
            $(".top-navigation").removeClass("scrolled");
        }
    }

    $(document).ready(function() {
        checkScroll();
        $(window).scroll(checkScroll);
    });
}
  
// slider function
var customSlider = () => {
    if ($(".custom-slider")) {
        $('.custom-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            speed: 1500,
            dots: false,
            prevArrow: false,
            nextArrow: false,
            swipe: false,
            // fade: true,
            // cssEase: 'linear'
        });
    }  
}
  
// main element - auto padding-top
var mainAutoPadding = () => {
    if ($(".top-navigation")) {
        var topNavHeight = $(".top-navigation").height();
    
        $(".top-navigation + main").css("padding-top", topNavHeight+"px");
        
        var footerHeight = $(".footer-section").outerHeight();
        var heroHeight = topNavHeight + footerHeight;
        
        $(".hero").css("height", "calc(100vh - " + heroHeight + "px)");
    
        var contentHeight = $(".hero .wrapper").outerHeight();
        var heroHeight = contentHeight + 200;
        var heroHeightMobile = contentHeight + 100;
    
        if ($(window).width() <= 767) {
            $(".hero").css("min-height", heroHeightMobile);
        }
        else {
            $(".hero").css("min-height", heroHeight);
        }
    }
}
  
// initialize the functions
windowScrolled();
  
$(document).ready(function() {
    // customSlider();
    // scrollSpy();
    // mainAutoPadding();
    autoScrollSection();
});
  
$(window).resize(function() {
    // mainAutoPadding();
});
  
$(window).on('load', function() {
    scrollSpy();
});
  
  