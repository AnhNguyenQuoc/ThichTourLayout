$(document).ready(function() {


    var widthScreen;
    $window = $(window);
    if ($window.scrollTop() > 0) {
        $('.container.menu nav').css('background-color', '#669999');
    }
    $(window).scroll(function() {
        if ($window.scrollTop() > 0) {
            $('.container.menu nav').css('background-color', '#669999');

        } else {
            $('.container.menu nav').css('background-color', 'transparent');
        }
    });

    $('.image').hover(function(){
        $('.image h2').css('background-color', 'transparent');
    });

    $('#menu-mobile').click(function(){

        $(this).css("background-color", "#669999");

    });
});
''
