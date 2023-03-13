

//1. 액션타입
const ADD_TODO ="todos/ADD_TODO";
const TOGGLE_TODO="todos/TOGGLE_TODO";
const DEL_TODO="todos/DEL_TODO";
//2. 액션 생성함수
let nextId= 1;
// [{id:1,text:"할일"},{id:2,text:"할일2"},{id:3,text:"할일3"}]
//{type:ADD_TODO, todo:{id:새로운번호,text:"새로운할일"}}
export const addTodo = (text) => ({
    type:ADD_TODO,
    todo:{
        id:nextId++,
        text:text,
        isDone:false
    }
})
export const toggleTodo = (id) => ({
    type:TOGGLE_TODO,
    id:id
})
export const delTodo = (id) => ({
    type:DEL_TODO,
    id:id
})
//3. 리듀서함수(state,action)
export default function todos(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                action.todo
            ];
        case DEL_TODO:
            return state.filter(todo=> todo.id !== action.id);
        case TOGGLE_TODO:
            return state.map(todo=>todo.id===action.id? 
                {...todo,isDone:!todo.isDone}:todo
                )
        default:
            state;
    }    
}