$(document).ready(function() {
    $('img').hover(function(){
        var temp = $(this).attr('src');
        $(this).attr('src', $(this).attr('alt'));
        $(this).attr('alt', temp);
    },function(){
        var temp = $(this).attr('alt');
        $(this).attr('alt', $(this).attr('src'));
        $(this).attr('src', temp);
    }
);
});
