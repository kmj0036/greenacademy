"use strict";
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 5] = "Fri";
    Week[Week["Sat"] = 6] = "Sat";
})(Week || (Week = {}));
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Yellow"] = "yellow";
})(Color || (Color = {}));
console.log(Week[0]);
console.log(Week[1]);
console.log(Color.Red);
console.log(Color['Yellow']);
let aaa = Color.Blue;
var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade[StarbucksGrade["WELCOME"] = 0] = "WELCOME";
    StarbucksGrade[StarbucksGrade["GREEN"] = 1] = "GREEN";
    StarbucksGrade[StarbucksGrade["GOLD"] = 2] = "GOLD";
})(StarbucksGrade || (StarbucksGrade = {}));
function getDicound(v) {
    switch (v) {
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}
console.log(getDicound(StarbucksGrade.WELCOME));
