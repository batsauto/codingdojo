//creates Car with the properties of name, numWheels, and numPassengers, with the mothod make noise.
function carConstructor(name, numWheels, numPassengers) {
    var car = {};
    this.name = name;
    this.numWheels = numWheels;
    this.numPassengers = numPassengers;
    this.makeNoise = function() {
      console.log("Beep Beep");
    };
    return car;
}
var car = carConstructor("Sedan", 4, 5);
car.makeNoise = function(){
    console.log("Honk, Honk");
};

var bike = carConstructor("Bike", 2, 1);
bike.makeNoise = function(){
    console.log("Ring, Ring");
};

var bus = carConstructor("Bus", 6, 72);
bus.pickupPassengers = function(newPassengers){
  bus.passengerNumber += newPassengers;
};
