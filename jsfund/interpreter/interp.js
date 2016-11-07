//Before
// console.log(first_variable);
// first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);
//after
var first_variable;
function firstFunc(){
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);

//Before
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);
//after
var food;
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
  console.log(food);
}
food = "Chicken";
eat();
console.log(food);

// //Before
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);
//after
var new_word;
function lastFunc(){
  new_word = 'old';
}
new_word = "NEW!";
console.log(new_word);
