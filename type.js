"use strict";
var thisBoolean = true;
var myNumber = 1;
var myName = "Gunjan";
var greeting = "Hello " + myName;
var greeting2 = "Hello , " + myName;
var count = [1, 2, 3, 4];
var count1 = [1, 2, 3, 4];
var anything = 4;
anything = "Name";
anything = false;
function greeter(name) {
    console.log("Hello " + name);
}
// Enums
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
console.log(Directions.Left);
