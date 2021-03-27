import React, { useState }  from 'react'
import ToDoLists from './ToDoLists';


function TodoApp() {
    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState(['Need to cook food', 'must finish project'])
    const itemEvent = (event) => {
        setInputList(event.target.value);
    }
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]; 
        })
        setInputList("")
    }
    const deleteItems = (id) => {
        // alert("deleted")
        setItems((oldItems)=>{
            return oldItems.filter((arrElement, index)=>{
                return  index!==id;
            })
        })
    }
    return (
        <div className='main1'>
            <div className="main_div">
                <h2>ToDo List</h2><br/>
                <input type="text" placeholder='add todo' onChange={itemEvent} value={inputList} autoFocus/>
                <button className="btn" onClick={listOfItems}>add</button>
                <ol>
                    {/* <li>{inputList}</li> */}
                    {items.map((itemVal, index) => {
                        return <ToDoLists text={itemVal} key={index} id={index} onSelect={deleteItems}/>
                    })}
                </ol>
            </div>
        </div>
    )
}
export default TodoApp
