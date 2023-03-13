enum Week {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

enum Color{
    Red= 'red',
    Blue='blue',
    Yellow='yellow'
}


console.log(Week[0]);
console.log(Week[1])
console.log(Color.Red)
console.log(Color['Yellow']);

let aaa:Color =Color.Blue;

enum StarbucksGrade {
    WELCOME,
    GREEN,
    GOLD
}
function getDicound(v:StarbucksGrade) :number {
    switch(v){
        case StarbucksGrade.WELCOME:
            return 0;
        case StarbucksGrade.GREEN:
            return 5;
        case StarbucksGrade.GOLD:
            return 10;
    }
}
console.log(getDicound(StarbucksGrade.WELCOME))