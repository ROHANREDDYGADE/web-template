
$(document).ready(function () {
    $('.dropdown').hover(function() {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
    }, function() {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });
});

$(document).ready(function() {
    $('#first').show();
    $('.element-1 h1').css('color', 'red');
   $('.element-1 dash11').css('color','red');
    var currentImage = 1;

    $('.element-1, .element-2, .element-3').hover(function() {
        var imageId = $(this).index() + 1;
        $('#image-1, #image-2, #image-3').hide(); // Hide all images

        // Show the corresponding image based on the hovered element
        $('#image-' + imageId).show();
       
        currentHovered = imageId;
        $('.element-' + imageId + ' h1').css('color', 'red');
       
        // Reset h1 color for other elements
        $('.element-1 h1, .element-2 h1, .element-3 h1').not('.element-' + imageId + ' h1').css('color', '');
        $('.element-1, .element-2, .element-3').hover(
            function() {
                var elementId = $(this).index() + 1;
                $('span[id^="dash"]').hide(); // Hide all <span> elements
                $('#dash' + elementId + elementId).show(); // Show the corresponding <span> element
            },
            function() {
                // $('span[id^="dash"]').hide(); // Hide all <span> elements on hover out
            }
        );



    }, function() {
        // Do nothing on mouse leave
    });

    // Hide images initially
    $('#image-2, #image-3').hide();
    $('#dash22','#dash33').hide();
});

$('.cl').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    autoplayspeed:1000

});
$('.sli').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    autoplayspeed:1000

});