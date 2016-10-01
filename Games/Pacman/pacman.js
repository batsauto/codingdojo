$(document).ready(function() {

    var world = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0],
        [0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0],
        [0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0],
        [0,1,0,1,0,1,1,1,1,1,3,1,1,1,1,0,1,0,1,0],
        [0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0],
        [0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0],
        [0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0],
        [0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ];

    function drawMap() {
        $('#map').html("");
        for ( var row = 0; row < world.length; row++)
        for (var col = 0; col < world[row].length; col++) {
            var html_str = "";
            if (world[row][col] === 1){
                html_str = "<div class='path'></div>";
            }else if (world[row][col] === 0){
                html_str = "<div class='wall'></div>";
            }else if (world[row][col] === 3){
                html_str = "<div class='pacman'></div>";
            }else if (world[row][col] === 2){
                html_str = "<div class='blank'></div>";
            }
            $('#map').append(html_str);
        }
    }
    drawMap();//initial drawing of map

    var pacman = {
        row: 12,
        col: 10
    };

    var score = 0;

    //the 4 arrow key functions
    $('body').keydown(function(event) {
        //up arrow
        if(event.keyCode === 38){
            if (world[pacman.row - 1][pacman.col] >= 1) {
                if (world[pacman.row - 1][pacman.col] === 1) {
                    score += 10;
                }
                world[pacman.row - 1][pacman.col] = 3;
                world[pacman.row][pacman.col] = 2;
                pacman.row--;
            }
        }

        //down arrow
        else if(event.keyCode === 40){
            if(world[pacman.row + 1][pacman.col] >= 1){
                if (world[pacman.row + 1][pacman.col] === 1) {
                    score += 10;
                }
                world[pacman.row + 1][pacman.col] = 3;
                world[pacman.row][pacman.col] = 2;
                pacman.row++;
            }
        }

        //left arrow
        else if(event.keyCode === 37){
            if(world[pacman.row][pacman.col - 1] >= 1) {
                if (world[pacman.row][pacman.col - 1] === 1) {
                    score += 10;
                }
                world[pacman.row][pacman.col - 1] = 3;
                world[pacman.row][pacman.col] = 2;
                pacman.col--;
            }
        }

        //right arrow
        else if(event.keyCode === 39){
            if(world[pacman.row][pacman.col + 1] >= 1) {
                if (world[pacman.row][pacman.col + 1] === 1) {
                    score += 10;
                }
                world[pacman.row][pacman.col + 1] = 3;
                world[pacman.row][pacman.col] = 2;
                pacman.col++;
            }
        }
        $('#score').html('Score' + ': ' + score);
        drawMap();
    });
});
