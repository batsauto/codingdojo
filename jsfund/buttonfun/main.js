$(document).ready()

$( "button" ).click(function() {
  $( this ).toggleClass( "red" );
});

$( "button" ).hover(function(){
  $( this ).toggleClass( "green" );
});
