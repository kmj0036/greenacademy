import Component from "./Component/Component.js";

export default class ContentInput extends Component{
    template(){
        return `
        <input type="text" class ="appender">
        `;
    }
    setEvent(){
        console.log(this.props)
        const {addStudent}= this.props;
        this.target.addEventListener("keyup",(e)=>{
            if(e.key !== "Enter") return;
            addStudent(e.target.value)
        })
        
    }
}
