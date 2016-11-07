function sumRange(x,y) {
    var sumXToY = 0;
    for (var i = x; i <= y; i++) {
        sumXToY = sumXToY + i;
    }
    console.log(sumXToY);
}

function minValue(arr) {
    var minval = 0;
    for (var i = 0; i < arr.length; i++) {
        if (minval > arr[i]){
            minval = arr[i];
        }
    }
    console.log(minval);
}

function sumValue(arr) {
    var avgval = 0;
    var sumval = 0;
    for (var i = 0; i < arr.length; i++) {
        sumval = arr[i] + sumval;
    }
    avgval = sumval / arr.length;
    console.log(avgval);
}

var person = {
  name : "Christian",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  },
  chewGum:function(){
    console.log("I can walk and chew gum, but I can't chew gum and walk...");
  }
};

person.walk().chewGum();
