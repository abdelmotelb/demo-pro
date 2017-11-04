$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText:["<span class='demo-font icon-left-arrow'></span>","<span class='demo-font icon-right-arrow'></span>"],
    responsive:{
        0:{
            items:1,
            dots: true,
            nav:false
        },
        600:{
            items:1,
            dots: true,
            nav:false
        },
        1024:{
            items:2,
            dots: true
        },
        1100:{
            items:2
        }

    }
})


