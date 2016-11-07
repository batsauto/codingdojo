function runningLogger() {
    console.log("I am running!!");
}

function multipyByTen(x) {
    return x * 10;
}

console.log(multipyByTen(5));
runningLogger();

function stringReturnOne() {
    return "I am string One";
}

function stringReturnTwo() {
    return "I am string Two";
}

function caller(x) {
    if (typeof x === "function") {
        x();
    }
}

function myDoubleConsoleLog(x, y) {
    if (typeof(x) === 'function' && typeof(y) === 'function'){
        console.log(x(), y());
    }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(param){
  console.log('starting');
  var x = setTimeout(function(){
    if (typeof(param)=='function'){
      // notice the passed parameters...
      param(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('ending');
  return "interesting";
}

caller2(myDoubleConsoleLog);
