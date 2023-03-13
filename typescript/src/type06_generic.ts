//Generic
function getSize<T>(arr:T[]):number{
    return arr.length;
}
const numArr = [1,2,3,4];
getSize<number>(numArr);

const strArr33 = ['a','b','c'];
getSize<string>(strArr33);
const boolArr2 =[true,false,false,true];
getSize<boolean>(boolArr2);
const objArr2= [{},{name:"a"},{},{age:30},{}];
getSize<object>(objArr2);

interface Animal<T> {
    name:string;
    color:string;
    option:T;
}
const animal2:Animal<string> = {
    name:"고영희",
    color:"검정",
    option:"특별함"
}
const animal1:Animal<{age:number; hobby:string}> ={
    name:"jack",
    color:"brown",
    option:{
        age:3,
        hobby:"물놀이"
    }
}
//generic 확장
interface Student01 {
    name:string;
    age:number
}
interface Car {
    name:string;
}
interface Fruit {
    color:string
}
const  Student3:Student01 = {
    name:"a",
    age:19
}
const car1:Car ={
    name:"sonata"
}
const fruit1:Fruit = {
    color:"빨강"
}
function printobjName<T extends {name:string}>(data:T):string{
    return data.name;
}
printobjName<Student01>(Student3)
// printobjName(fruit1)
printobjName(car1)
type U = number|string|boolean
interface MYTYPE<T> {
    name:string;
    value:T
}
const dataA:MYTYPE<string> ={
    name:"ha",
    value:"jeneric"
}
const dataB:MYTYPE<number> = {
    name:"hoho",
    value:123
}
const dataC:MYTYPE<boolean> = {
    name:"hoho",
    value:true
}



interface min {
    name:string;
    color:string
}
interface yo {
    name:string;
    color:string
}
interface chang {
    name:string
}
const s1:min ={
    name:"민준",
    color:"흰색"
}
const s2:yo ={
    name:"요한",
    color:"노랑"
}
const s3:chang ={
    name:"창민",
}
function printColor<T extends {color:string}>(data:T){
    console.log(data.color)
}


interface IName {
    name:string;
    age:number
}
interface IName {
    color:string;
}
const Iname:IName = {
    name:"a",
    age:12,
    color:"Aa"
}