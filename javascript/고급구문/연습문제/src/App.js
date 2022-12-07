import Component from "./components/Component.js";
import TodoHeader from "./components/TodoHeader.js";
import TodoLists from "./components/TodoList.js";

export default class listInput extends Component {
    setup(){
        this.state = {
            inputText: "",
            todoLists :""
        }
        console.log(this.state);
    }
    }
  