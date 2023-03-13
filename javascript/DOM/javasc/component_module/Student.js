import Component from "./Components.js";

export default class Student extends Component{
    setup(){
        this.state = {Students:["student1","student2","student3"]}
    }
    template(){
        const {Students} = this.state;
        return `
        <ul>
            ${Students.map(stu=>`<li>${stu}</li>`).join("")}
        </ul>
        <button id="add">추가</button>
        `
    }
    setEvent(){
        const {Students} = this.state;
        this.target.querySelector("#add").addEventListener('click',()=>{
            this.setState({Students:[...Students,`stu${Students.length+1}`]})
        })
    }
}