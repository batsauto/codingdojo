// Print 1-255
for(var i =1; i<=255; i++)
    console.log(i);

// Print Odds 1-255
for(var i =1; i<=255; i += 2)
    console.log(i);

// Print Ints and Sum 0-255
var sum = 0;
for(var i = 0; i <= 255; i++){
    console.log(i);
    sum = sum + i;
    console.log(sum);
}

//Iterate and Print Array
var arr = [0,1,2,3,4,5,6,7,8,9];
for(var i =0; i < arr.length; i++){
    console.log(arr[i]);
}

//Find and Print Max
var arr = [0,1,2,3,4,5,6,7,8,9];
var max = 0;
for(var i = 0; i<arr.length; i++){
    if( max < arr[i]){
        max = arr[i];
    }
}
console.log(max);

//Get and Print Average
var arr = [0,1,2,3,4,5,6,7,8,9];
var sum = 0;
var avg = 0;
for(var i =0; i < arr.length; i++){
    sum += arr[i];
}
avg = sum/arr.length;
console.log(avg);

//Array with Odds
var arr = [];
for (var i = 1; i < 255; i++ ){
    if( i % 2 === 0){
    }
    else{
      arr.push(i);
    }
}
console.log(arr);

//Square the Values
var arr = [0,1,2,3,4,5,6,7,8,9];
for (var i = 1; i < arr.length; i++ ){
    arr[i] = arr[i]*arr[i];
}
console.log(arr);

//Greater than Y
var Y = 6;
var arr = [0,1,2,3,4,5,6,7,8,9];
for ( var i =0; i < arr.length; i++)
    if (i > 6){
        console.log(arr[i]);
    }

//Zero Out Negative Numbers
var arr = [-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9];
for ( var i =0; i < arr.length; i++)
    if ( arr[i] < 0 ){
      arr[i] = 0;
    }
console.log(arr);

//Max, Min, Average
var max = 0;
var min = 0;
var sum = 0;
var avg = 0;
var arr = [-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9];
for( var i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i] < min){
        min = arr[i];
    }
    sum = sum + arr[i];
}
avg = sum / arr.length;
var newarr = [max, min, avg];
console.log(newarr);

//Shift Array Values



//Swap String For Array Negative Values
