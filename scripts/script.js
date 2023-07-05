var $ = jQuery;

// scrollspy function
var scrollSpy = () => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar_main'
    });

    setTimeout(() => {
        $("main").attr({
            "data-bs-spy" : "scroll",
            "data-bs-target" : "#navbar_main",
            "data-bs-offset" : "0",
            "tabindex" : "0"            
        })
    }, 100);

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

// auto scroll to section function
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

// secondary top navigation function
var secondaryTopNav = () => {
    if ( $("main").hasClass("page-shop") ) {
        $(".top-navigation").addClass("top-navigation-secondary");
    }
}

// search bar function
var searchBar = () => {
    if ( $(".top-navigation .account .search").length ) {
        $(".top-navigation .account .search").click(function(e) {
            e.preventDefault();
            $(".top-navigation .search-section").toggleClass("show");
        });
    }
}
  
// slider function
var swiperJs = () => {
    if ( $('.swiper-js-product-page').length ) {
        if ( $('.swiper-js-product-page .swiper-thumbnails .swiper-slide').length ) {
            if ( $('.swiper-js-product-page .swiper-thumbnails .swiper-slide').length > 4 ) {
                // console.log("more than 4");
                var swiper = new Swiper(".swiper-thumbnails", {
                    // spaceBetween: 10,
                    slidesPerView: "auto",
                    freeMode: true,
                    watchSlidesProgress: true,
                    allowTouchMove: true
                });
                var swiper2 = new Swiper(".swiper-featured", {
                    // navigation: {
                    //     nextEl: ".swiper-button-next",
                    //     prevEl: ".swiper-button-prev",
                    // },
                    autoHeight: true,
                    speed: 500,
                    effect: 'fade',
                    allowTouchMove: false,
                    thumbs: {
                        swiper: swiper,
                    },
                });
            }
            else {
                // console.log("less than or equal to 4");
                var swiper = new Swiper(".swiper-thumbnails", {
                    // spaceBetween: 10,
                    slidesPerView: "auto",
                    freeMode: true,
                    watchSlidesProgress: true,
                    allowTouchMove: false
                });
                var swiper2 = new Swiper(".swiper-featured", {
                    // navigation: {
                    //     nextEl: ".swiper-button-next",
                    //     prevEl: ".swiper-button-prev",
                    // },
                    autoHeight: true,
                    speed: 500,
                    effect: 'fade',
                    allowTouchMove: false,
                    thumbs: {
                        swiper: swiper,
                    },
                });
            }
        }
    }
}

// category boxes
var categoryBoxes = () => {
    if ( $(".category-boxes .category").length ) {
        // uniform auto-height
        if ( $(".category-boxes .category p").length ) {
            var categoryBoxHeight = $(".category-boxes .category p").closest(".category").height();

            $(".category-boxes .category").each(function() {
                // $(this).css("min-height" , categoryBoxHeight + "px");

                if ($(window).width() > 767) {
                    $(this).css("min-height" , categoryBoxHeight + "px");
                }
                else {
                    $(this).css("min-height" , "auto");
                }
            });
        }

        // remove default scroll function on click function of anchor element
        $(".category-boxes .not-clickable").each(function() {
            $(this).click(function(e) {
                e.preventDefault();
            });
        });

        // animation
        if ( $(".category-boxes .clickable").length ) {
            $(".category-boxes .clickable").each(function() {
                $(this).on("mouseenter", function() {
                    $(this).removeClass("animate__tada");
                    setTimeout(() => {
                        $(this).addClass("animate__tada");
                    }, 100);
                })
            })
        }
    }
}

// accordion
var accordion = () => {
    if ( $(".accordion").length ) {
        $("#accordion .accordion-item:first-child button").removeClass("collapsed").attr("aria-expanded", "true");
        $("#accordion .accordion-item:first-child .accordion-collapse").addClass("show");
    }
}

// subscribe button
var subscribeButton = () => {
    if ( $(".floating-subscribe").length ) {
        $(".floating-subscribe").on("mouseenter", function() {
            $(this).removeClass("animate__rubberBand");
            setTimeout(() => {
                $(this).addClass("animate__rubberBand");
            }, 100);
        })
    }
}

// product listing active section
var productListingActive = () => {
    if ( $(".product-listing").length ) {
        const sections = document.querySelectorAll("section[id]");
        let scrollY = window.scrollY;
  
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;

            if ( $(window).width() <= 767 ) {
                const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 50;
                sectionId = current.getAttribute("id");
                
                if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
                    document.querySelector(".product-listing-nav a[href*=" + sectionId + "]").classList.add("section-active");
                } 
                else {
                    document.querySelector(".product-listing-nav a[href*=" + sectionId + "]").classList.remove("section-active");
                }
            }

            // else {
            //     const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 100;
            //     sectionId = current.getAttribute("id");
                
            //     if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
            //         document.querySelector(".product-listing-nav a[href*=" + sectionId + "]").classList.add("active");
            //     } 
            //     else {
            //         document.querySelector(".product-listing-nav a[href*=" + sectionId + "]").classList.remove("active");
            //     }
            // }
        });

        if ( $(".product-listing-nav").length ) {
            if ( $(window).width() <= 767 ) {
                var activeSection = $(".product-listing-nav .section-active")[0].getAttribute('href');
                var activeSectionText = activeSection.replace('#','');

                console.log(activeSectionText);
            
                $(".product-listing").each(function() {
                    if ( $(this).attr('id') == activeSectionText ) {
                        $(".product-listing").removeClass("section-active");
                        $(this).addClass("section-active");
                    }
                });
            }
        }
    }
}

// product tabs function 
var productTabs = () => { 
    if ($(".product-tabs .tab-content .tab-pane").length < 1) {
        $(".product-tabs").remove();
    }

    if ($(".product-tabs .nav-link").length) {
        $(".product-tabs .nav-link:first-child").attr("aria-selected", "true").addClass("active");
    }

    if ($(".product-tabs .tab-pane").length) {
        setTimeout(() => {
            $(".product-tabs .tab-pane:first-child").addClass("fade show active");
        }, 100);
    }
}
  
// initialize the functions
windowScrolled();
  
$(document).ready(function() {
    swiperJs();
    autoScrollSection();
    categoryBoxes();
    searchBar();
    subscribeButton();
    scrollCue.init();
    secondaryTopNav();
});
  
$(window).resize(function() {
    categoryBoxes();
});
  
$(window).on('load', function() {
    scrollSpy();
    accordion();
    productTabs();
});