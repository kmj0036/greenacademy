//클래스 선언
class Person {
    //생성자 
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    //method 정의
    speak(){
        console.log(`${this.name} hello!`);
    }
}
const min = new Person('min',20);
console.log(min)