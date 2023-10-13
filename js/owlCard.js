$('.owlCard').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        300:{
            items: 1,
            nav: false
        },
        600:{
            items: 3,
            nav: false
        },
        900:{
            items: 4,
            nav: false
        },
        1140:{
            items: 4.5,
            nav: false
        },
        1340:{
            items: 4.5,
            nav: false
        }
    }    
})