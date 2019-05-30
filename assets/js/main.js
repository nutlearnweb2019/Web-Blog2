(function () {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = ('https:' == document.location.protocol ? 'https://s' : 'http://i')
        + '.po.st/static/v4/post-widget.js#publisherKey=556iuqt4139l475oo1e8';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
})();

// function initMap() {
//     var uluru = { lat: 13.852028, lng: 100.496452 };
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 18,
//         center: uluru
//     });
//     var marker = new google.maps.Marker({
//         position: uluru,
//         map: map
//     });
// }

function initMap() {
    // The location of Uluru
    var uluru = { lat: 13.853304, lng: 100.496765 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 18, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 1)
    {
        $('#navbar').css('padding', '5px 18px')
    }
    else 
    {
        $('#navbar').css('padding', '18px')
    }
})

// owl - carousel (ใส่ใน script เฉพาะหน้าเพจที่ใช้งาน)
// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         loop: true,
//         nav: false,
//         dots: true,
//         responsive: {
//             0: {
//                 items: 1,
//                 dots: false
//             },
//             600: {
//                 items: 2,
                
//             },
//             1000: {
//                 items: 3,
                
//             }
//         }
//     });
// });

$('.on-to-top').click(function() {
    $('html, body').animate({scrollTop: '0px'}, 500);
})

