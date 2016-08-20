$(document).ready(function() {

    var idnum = 0;
    $('form').on('submit',(function() {

        $('#contactContainer').append("<div>" + "</div>");
        $('#contactContainer > div').addClass("contactCard");
        $('.contactCard').last().attr('id', idnum++ );
        $('.contactCard').last().append( "<h3>" + $("#first_name").val()+ " " + $("#last_name").val() + "</h3>" + "<p>" + $("#description").val() + "</p>" );

        // I am having a hard time getting the show and hide functinalities to work indepdently of the .on(submit) function.

        //$('.contactCard > p').hide();
        // $('.contactCard').click(function() {
        //     $('.contactCard > p').show();
        // });
        return false;
    }));

});
