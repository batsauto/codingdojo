$(document).ready(function() {

    $('img').click(function() {

        var tempsrc = $(this).attr('src');
        var tempalt = $(this).attr('data-alt-src');

        $(this).attr('src', tempalt);
        $(this).attr('data-alt-src', tempsrc);

    });

});
