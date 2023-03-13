import React, { useState } from 'react';

const Inputs = ({add}) => {
    const [inputText,setInputText]=useState("");
    const onchange= (e) =>{
        setInputText(e.target.value)
    }
    //버튼 클릭시 발생하는 함수
    const onClick =() =>{
        add({id:4 ,username:inputText})
    }
    return (
        <div>
            <input name="username" onChange={onchange}/>
            <button onClick={onClick}>add</button>
            <p>{inputText}</p>
        </div>
    );
};

export default Inputs;