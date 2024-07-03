    $('.owl-carousel.new').owlCarousel({

    loop:true,

    margin:1,
    autoplay:true,
    autoplayTimeout:2000,
    responsiveClass:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})