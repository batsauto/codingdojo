$(document).ready(function(){
    //your jQuery code goes here
    $('#click > div > button').click(function() {
        alert("handler for .click() called");
    });

    $('#focus > div > button').focus(function() {
        $(this).next('p').css('display', 'inline').fadeOut( 2000 );
    });
    $('#addclass > div > button').click(function() {
        $(this).next('p').addClass('redbackground');
    });

    function displayVals() {
        var singleValues = $( "#single" ).val();

        $( "#val > div >p" ).html( "Select to see the .val of<b> Single:</b> " + singleValues );
    }

    $( "select" ).change( displayVals );
    displayVals();

    $('#text > div > button').click(function() {
        var str = $( "#text > div > p:first" ).text();
        $( "#text > div > p:last" ).html( str ).css('display', 'block');
    });

    $('#attr > div > button').click(function() {
        var title = $( "#attr > div > iframe" ).attr( "src" );
        $( "#attr > div > p" ).text( title );
    });

    // I am moving on from this assingment. I will return later to finish for sure but it took me a really long time to get this far.



});
