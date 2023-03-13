//string,number,boolean,null,nudefined
//array,object

let booleanType:boolean =true;
let numType:number =30;
let stringType:string = "minjun";
let undefinedType:undefined = undefined;
let nullType:null =null;
let objectType:object = {};

let anyType:any =123;

anyType="aa";
anyType=true;
numType=30000;

//배열
//구문 number [], Array<number>

let arr:number[] = [0,1,2,3,4,5];
let arr2:Array<number> = [1,2,3,4,5];
let strArr:string[] =["a","b","c"];
let strArr2:Array<string> = ["가","나","다"];
let anyArr:any[] = [30,"a",true];
//유니언 타입 (다중타입)
let numStr: number | string;
numStr =30
numStr ="A"

let numStrArr: (number|string) [] = [1,"a","b"];
//객체는 프로퍼티에 대한 타입을 지정함 
//옵셔널 프로퍼티 --> ?키워드를 들고있다면 있어도 없어도 상관없음
//읽기 전용 프로퍼티 --> readonly 키워드


//interface IUser {readonly name:string,age:number,isjob?:boolean}
interface IUser {
    readonly name:string;
    age:number;
    isjob?:boolean;
}
let user : IUser = {
    name:"green",
    age:30,
    isjob:true
}

let user2 : IUser = {
    name:"green",
    age:30,
    isjob:true
}
// let user2 : { readonly name:string,age:number,isjob?:boolean} = {
//     name:"green",
//     age:30,
//     isjob:true
// }
console.log(user.name);
user.age=23;
