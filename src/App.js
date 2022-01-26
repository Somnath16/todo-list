import React, {useState} from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {

  const[inputList, setInputList] = useState();
  const [listItem, setListItem] = useState([]);

  const newItem = (event) =>{
    setInputList(event.target.value);
  };
  const onSubmit = () =>{
    setListItem((oldItems) =>{
      return [...oldItems, inputList];
    });

    setInputList('');

  };
  const deleteItem = (id) =>{
    console.log("deleted");
    setListItem((oldItems) => {
      return oldItems.filter((arrItem, index) =>{
        return index !== id;
      } )
    })

  };



  return (
    <>
    <div className='main_div'>
      <div className='center_div'>
      <br/>
      <h1>ToDo List</h1>
      <br />
      <input type ="text" placeholder='Add new Item' value={inputList} onChange={newItem} />
      <button onClick={onSubmit}> + </button>


      <ol>
        {/* <li>{inputList}</li> */}
        {listItem.map((totalItem, index ) =>{
          return <ToDoList key={index} id={index} text={totalItem} onSelect = {deleteItem} />;
        })}
      </ol>
      </div>

    </div>
    </>
  );
}

export default App;
