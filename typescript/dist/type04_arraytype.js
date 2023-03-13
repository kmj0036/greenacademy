"use strict";
let strarr = ["a", "b", "c"];
let strarr2 = ["🍇", "😎", "🤣", "💤"];
let numarr = [1, 2, 3, 4, 5];
let numarr2 = [1, 2, 3, 4];
let numstrArr = [1, 2, "a"];
let numstrArr2 = ["rk", 1, "a"];
let objArr = [
    {
        name: "green",
        age: 30
    },
    {
        name: "blue",
        age: 25
    }
];
let readArr = [1, 2, 3, 4];
function addArr(...num) {
    console.log(num);
}
addArr(1, 2, 3);
addArr(1, 2, 3, 4, 5, 5, 67);
