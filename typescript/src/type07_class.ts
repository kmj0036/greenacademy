class ClassAnimal {
    public name:string;
    constructor(name:string){
        this.name = name;
    }
}
class ClassCat extends ClassAnimal {
    public getName():string{
        return `Cat name is ${this.name}`
    }
    sound():void{
        console.log("에옹")
    }
}
let cat =new ClassCat("leo");
console.log(cat.getName());
cat.name="recall";