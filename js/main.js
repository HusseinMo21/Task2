console.log('Hello World');

var flky = new Flickity( '.carousel', {
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: true,
    prevNextButtons: false,
    draggable: false,
    freeScroll: true,
    fullscreen: false,
    setGallerySize: true,
    autoPlay: 2000,
    bgLazyLoad: 8,
    resize: true
})

window.addEventListener('scroll', function(){
    
    wScroll = $(window).scrollTop();
    $('.firstimg img').css({
        'transform': 'scale(1, '+ wScroll/6 +'%)'
    })
   if(wScroll > 645){
    $('.firstimg img').css({
        'transform': 'scale(1, '+ 645/6 +'%)',
    })
   }
   $('.secondimg img').css({
    'transform': 'scale(1, '+ wScroll/6 +'%)'
   })

   $('.info').css({
    'transform': 'scale(1)'
   })
   $('.customH2').css({
       'margin-top': wScroll/18,
       'margin-bottom': wScroll/18
   })

})

$('.customArrow').on('click', function(){
    $('html, body').animate({scrollTop: 650}, 1000);
})

 let timeline = gsap.timeline()
// gsap.from('h1', {opacity : 0, duration: 1, y: 100});
timeline.from('h1', {opacity : 0, duration: 1, y: 100, ease: 'inOut'})
timeline.from('.second', {opacity : 0, duration: 1.5, y: 100, ease: 'inOut'})
timeline.from('.third', {opacity : 0, duration: 1.8, y: 100, ease: 'inOut'})
timeline.from('.demoBtn', {opacity : 1, duration: 2, x: 10,y:10 , ease: 'in'})

// gsap.fromTo('.firstImage',{
//     ScrollTrigger: {
//         trigger: '.firstImage',
//         start: 'top 100%',
//         end: 'bottom 100%',
//         scrub: true
//     }
// }


// ,
// {opacity : 1, duration: 1, y: 0, ease: 'inOut'}

// )

// gsap.to('.firstImage',
// {
//     scrollTrigger: {
//         trigger: '.mainSection',
//         start: 'top center',
//         scrub: 0,
//         markers: true
//     },
//     scale : 1.1, duration: 1, y: 0, ease: 'inOut'}
//  )

//  gsap.to(".firstImage", {
   
//     scrollTrigger:{
//      trigger:"#main",
//      start:"center center",
//      end:"top 100px",
//      scrub:0
//     },
//     scale : 1.1,
//    duration:10,
 
//    });