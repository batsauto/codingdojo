$(document).ready(function() {

    $('img').click(function() {

        var tempsrc = $(this).attr('src');
        var tempalt = $(this).attr('alt');

        temp = tempsrc;
        tempsrc = tempalt;
        tempalt = temp;

        $(this).attr('src', tempsrc);
        $(this).attr('alt', tempalt);

    });

});
