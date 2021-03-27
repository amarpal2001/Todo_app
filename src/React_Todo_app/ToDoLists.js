import React from 'react'


function ToDoLists(props) {
    return (
        <div className='todo_style'>
            <i className="fa fa-trash fa-lg" aria-hidden="true" onClick={()=>{
                props.onSelect(props.id)
            }}/>
            {props.text}
        </div>
    )
}
export default ToDoLists;
