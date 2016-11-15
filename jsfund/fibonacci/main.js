function fib() {
  // Some variables here
  var f = 1;
  var f0 = 0
  var f1 = 1
  function nacci() {
    // do something to those variables here
    f = f0 + f1;
    f0 = f1;
    f1 = f;
    console.log(f);
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter()
fibCounter()
