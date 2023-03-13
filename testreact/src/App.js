import './App.css';
import { useRef, useState } from 'react';
import Inputs from './components/Inputs.js'
import UserList from './components/UserList';

function App() {
  const [input,setInput]=useState([
    {
      id:1,
      username:"blue"
    },
    {
      id:2,
      username:"blue2"
    },
    {
      id:3,
      username:"blue3"
    },
  ])
  const addUser = (input) => {
    setInput([
      ...input,
      input
    ])
  }
  const lists= input.map(input=><li>{input.username}</li>)
  return (
    <div className="App">
      <Inputs add={input}/>
      <UserList aaa={input}/>
    </div>
  );
}

export default App;
