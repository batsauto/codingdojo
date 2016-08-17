$(document).ready(function() {
    $('form').submit(function() {
        $('#contactContainer').append("<div>" + "</div>");
        $(this).addClass("contactCard");
        return false;
    });
    // $('form').submit(function() {
	// 	$("#users").append("<tr>" +
	// 			"<td>" + $("#first_name").val() + "</td>" +
	// 			"<td>" + $("#last_name").val() + "</td>" +
	// 			"<td>" + $("#email").val() + "</td>"+
    //         	"<td>" + $("#contact").val() + "</td>"+
	// 	"</tr>");
    //
    //     $(".text_input").val("");

//        return false;

//    });








});
