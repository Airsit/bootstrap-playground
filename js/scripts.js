$(document).ready(function() {
    // Setting carousel sliding interval
    $('#mycarousel').carousel({ interval: 2000 });

    // Setting the behavior of the pause control
    $('#carouselButton').click(function() {
        // Case where we need to pause
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } 

        // Case where we need to play
        else if($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play')
            $('#carouselButton').children('span').addClass('fa-pause');
        }             
    });

    // Function for Task 2: Reserve Table Modal Triggering
    $('#reserveButton').click(function(e) {
        e.preventDefault();
        $('#reserveTable').modal('show');
    });

    // Function for Task 3: Login Modal Triggering
    $('#linkLogin').click(function(e) {
        e.preventDefault();
        $('#loginModal').modal('show');
    });
});