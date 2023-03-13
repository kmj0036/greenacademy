//구문 type[] ,Array<type>
// 문자열만 가지는 배열
let strarr:string[] = ["a","b","c"]
//or 
let strarr2: Array<string> = ["🍇","😎","🤣","💤"];

//숫자 배열
let numarr :number[] = [1,2,3,4,5]
//or
let numarr2: Array<number>=[1,2,3,4]

//숫자 ,문자 복합

let numstrArr : (number|string) [] = [1,2,"a"]
//or
let numstrArr2 : Array<string|number> = ["rk",1,"a"]

//객체타입을 가지는배열
let objArr : object [] = [
    {
        name:"green",
        age:30
    },
    {
        name:"blue",
        age:25
    }
]
interface User {
    readonly name:string;
    age:number;
    isjob?:boolean;

}

//읽기 전용 배열 생성
let readArr :readonly number []= [1,2,3,4]



//함수 나머지 매개변수
function addArr (...num:number[]){
    console.log(num);

}
addArr(1,2,3)
addArr(1,2,3,4,5,5,67)
