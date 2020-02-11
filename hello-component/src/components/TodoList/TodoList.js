import React from 'react';

function TodoList({data}){
    return (
        <ul>
            {/* 
            {
                data.map(function(item, key){
                    return (
                        <li key={key}>{item}</li>
                    );
                })
            }
             */}

            {/*              
            {
                data.map((item, key) =>{
                    return (
                        <li key={key}>{item}</li>
                    );
                })
            } 
            */}

            {
                data.map((item, key) =>  <li key={key}>{item}</li>)
            }
        </ul>
    );
};

export default TodoList;