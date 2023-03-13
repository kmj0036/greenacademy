let myFunction: (arg:number, arg2:number)=> number;
myFunction = function(x,y){
    return x+y;
}
let num:number = myFunction(10,20);
console.log(num);

function myFunction2(x:number, y:number):number{
    return x+y;
}

function myFunction3():void{
    console.log("not thing")
}

let myFunction4:()=>void;
myFunction4 = function(){
    console.log("not thing")
}
//interface
interface Add {
    (num1:number ,num2:number):number;
}
let myFunction5:Add =function(num1,num2){
    return num1+num2
}


//함수 오버로드
interface Person{
    name:string;
    age:number;
}
function join(name:string,age:string):string;
function join(name:string,age:number):Person;
function join(name:string , age:number|string):Person|string{
    if (typeof age=== "number"){
        return {
            name:name,
            age:age
        }
    }else{
        return "나이는 숫자로 입력해주세요"
    }
}
const green2:Person = join("green",30)
const blue:string =join("blue","hi");