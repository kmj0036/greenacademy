import Component from "./components/Component.js";
import TodoHeader from "./components/TodoHeader.js";
import TodoLists from "./components/TodoList.js";

export default class App extends Component {
    setup(){
        console.log("setup start");
        this.state = {
            inputText: "",
            todoLists : [
                {
                    no:1,
                    content: '할일1',
                    isDone: false
                },
                {
                    no:2,
                    content: '할일2',
                    isDone: false
                },
                {
                    no:3,
                    content: '할일3',
                    isDone: false
                }
            ]
        }
        console.log(this.state);
    }
    template(){
        return `
        <div id="insertTodo"></div>
	    <div id="listTodos"></div>
        `;
    }
    mounted(){
        const { addTodoList } =  this;
        const todoHeader = document.querySelector("#insertTodo");  //div의  타이틀하고 input 하고 + 넣어줄려고 타겟잡음
        const todolist = document.querySelector("#listTodos");  //todolist 선택
        new TodoHeader(todoHeader,{addTodoList: addTodoList.bind(this)}); //this의 대상이 앱이 되겠끔 bind써줌
        //객체 생성(타겟, props(밑에 함수)) 넘김    //constructor(target, props)
        new TodoLists(todolist, {lists: this.state.todoLists}); //todolist 화면에 넘김  constructor 호출됨
    }
    addTodoList(content){
        const { todoLists } = this.state;
        console.log(todoLists); 
        console.log(this)
        this.setState({
            todoLists: [
                ...todoLists,
                {  
                    no:4,
                    content: content,
                    isDone: false
                }
            ]
        })
    }
}