import Component from "./Component/Component.js";
import ContentInput from "./contentInput.js";
import Lists from "./Component/Lists.js"

export default class App extends Component {
    setup(){
        this.state= {
            students: [
                {
                    no:1,
                    content:"stu1",
                    active:true
                },
                {
                    no:2,
                    content:"stu2",
                    active:false
                },
                {
                    no:3,
                    content:"stu3",
                    active:false
                }
            ]
        }
        console.log(this);
    }
    template(){
        return`
        <div id= "contentAdd"></div>
        <div id= "studentLists"></div>
        <div id= "viewBtn"></div>
        `;
    }
    mounted(){
        const contentAppender = document.querySelector("#contentAdd");
        const studentListDiv = document.querySelector("#studentLists")
        const {students} =this.state;
        const {addStudent,deletestudent} = this;
       
        new Lists(studentListDiv,{students:students,});
        new ContentInput(contentAppender, {
            addStudent:addStudent.bind(this)
        });
        new Lists(studentListDiv,{students:students,
            deletestudent:deletestudent.bind(this) });
        //객체 {target : stuListDIv,(taget,props)} 
    }
    addStudent(content){
        const {students}= this.state
        const no =Math.max(0,...students.map(s=>s.no))+1
        // students.map(s=>s.no) =>[1,2,3]
        //no에 기존 no에서 가장큰 숫자를 찾아서 1을 더한값을 할당
        this.setState({
            students: [
                ...students,
                {
                    no:no,
                    content:content,
                    active:false
                }
            ]
        })
    }
    deletestudent(no){
        const {students} = this.state
        const  newStudents =students.filter(stu=>stu.no!==no)
        console.log(newStudents)
        this.setState({students:newStudents})
    }
}