
var x = [];
x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];
//1
for (var i = 0; i < x.length; i++) {
    console.log(x[i]);
}
//2
x.push(100);
console.log(x);
//3
var newarray = [];
newarray = ["hello", "world", "JavaScript is fun"];
for (var i = 0; i < newarray.length; i++) {
    x.push(newarray[i]);
}
console.log(x);
//4
var sum1to500 = 0;
for (var i = 0; i < 501; i++) {
    sum1to500 = sum1to500 + i;
}
console.log(sum1to500);
//5
var arr = [1, 5, 90, 25, -3, 0];
var minval = 0;
for (var i = 0; i < arr.length; i++) {
    if (minval > arr[i]){
        minval = arr[i];
    }
}
console.log(minval);
//6
var avgval = 0;
var sumval = 0;
for (var i = 0; i < arr.length; i++) {
    sumval = arr[i] + sumval;
}
avgval = sumval / arr.length;
console.log(avgval);

var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript',
 dojo: 'Dallas'
};

for (var key in new_ninja){
  console.log(key + " : " + new_ninja[key]);
}
