$(document).ready(function() {

    // var idnum = 0;
    $('form').on('submit',(function() {
        $('#contactContainer').append( "<div class='contactCard'><h3>" + $("#first_name").val()+ " " + $("#last_name").val() + "</h3>" + "<p style='display:none'>" + $("#description").val() + "</p></div>" );

        return false;
    }));
    $(document).on("click", ".contactCard", function(){
        $(this).children().toggle();
    });

});
