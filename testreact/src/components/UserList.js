import React from 'react';

const UserList = (props) => {
    console.log(props)
    const {aaa,bbb}=props;
    console.log(aaa)
    console.log(bbb)
    return (
        <ul>
            {aaa.map(li=><li key={li.id}>{li.username}<button>삭제</button></li>)}

        </ul>
    );
};

export default UserList;