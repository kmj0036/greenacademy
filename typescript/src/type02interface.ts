interface Dog {
    readonly name:string,
    age:number,
    color?:string
}
let dog1:Dog={
    name:"cloud",
    age:3
}
let dog2:Dog ={
    name:"mel",
    age:3
}

type Score ='A'|'B'|'C'|'D'|'F'
interface Student {
    name:string;
    age:number;
    gender:string;
    [grade:number]:Score
    // 1?:string,
    // 2?:string,
    // 3?:string,
    // 4?:string,
    // 5?:string,
    // 6?:string,
}
//리터럴 (값)타입
//문자열 리터럴 타입 지정
let stu1:Student = {
    name:"창민",
    age:30,
    gender:"남자",
    100:"A"
}
let stu2:Student = {
    name:"민섭",
    age:22,
    gender:"남자",
    95:"A"
}

//모든 파라미터에 read only 속성을 준다.
interface ReadUser {
    name:string,
    age:number,
    phone:string
}
let readuser1: Readonly <ReadUser> ={
    name:"그린",
    age:30,
    phone:"01088885555",
}



interface TV {
    turnOn():boolean;
    turnOff():void
}
const myTv:TV = {
    turnOn() {
        return true;
    },
    turnOff() {
        console.log("off")
    },
}

interface SignUp {
    email:string;
    id:string;
    password:string;
}

class Student {
    constructor (name:string){
        this.name=name;
    }
}

interface IStudent {
    name:string,
    getName():string
}
class Student2 implements IStudent {
    name:string;
    constructor(name:string){
        this.name=name;
    }
    getName(): string {
        return this.name;
    }
}
const green = new Student2("green");
console.log(green.getName());