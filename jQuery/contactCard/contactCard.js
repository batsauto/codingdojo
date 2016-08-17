$(document).ready(function() {
    $('form').submit(function() {
        $('#contactContainer').append("<div>" + "</div>");
        $('#contactContainer > div').addClass("contactCard");
        return false;
    });
    $('form').on('submit',(function() {
    $(".contactCard").append("<h3>"
				+ $("#first_name").val()
				+ $("#last_name").val()
        + "</h3>"
        + "<p>"
        +  $("#description").val()
        + "</p>"



    );
    }));








});
