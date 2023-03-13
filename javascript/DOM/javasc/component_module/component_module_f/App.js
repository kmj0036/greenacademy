//생성자함수
import Input from "./Input.js";
import Lists from "./Lists.js";
export default function App({target}){
    //상태값
    this.state = {
        students:["stu1","stu2","stu3"]
    }
    //상태값 변경
    this.setState= (newState) =>{
        this.state = {
            ...this.state,
            ...newState
        }
    }
    this.render = () => {
        target.innerHTML= `
        <h1>Hello</h1>
        `
    }
    this.render();
    const input = new Input({target});
    const lists = new Lists({target:target,initialState:this.state.students})
}