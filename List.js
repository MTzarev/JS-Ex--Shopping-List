import React, { useState } from 'react';
//import InputRow from '.components/InputRow';

function List(){
    let [inputValue, setInputValue]= useState('');
    let [items, setItems] = useState([]);
    let whenInsert = (event) =>{
    setInputValue(event.target.value);
    }

let whenClick = ()=> {
    if (items.includes(inputValue.toLocaleLowerCase())){
        alert (`Вече е добавен този продукт`)
    }else if (inputValue.trim()!==`` && !items.includes(inputValue)){
        setItems([...items, inputValue]);
        setInputValue('');
        
    };
};
let handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      whenClick();
    }
  };
  let deleteFunc = (index) => {
    let newItems = [...items]; 
    newItems.splice(index, 1); 
    setItems(newItems); 
}
  return(
    <>
    
  <ol>
    {items.map((item, index) => (
        <li key={index}>{item} <button onClick={()=>deleteFunc(index)}> Изтрий </button></li>
        
        ))}
  </ol>
  
  <div>
  <label htmlFor="">
    Въведи нужен продукт:
    <br />
    <input type="text"
    value = {inputValue}
    onChange={whenInsert}
    onKeyDown={handleKeyDown}/>
  </label>
  <br />
  <button onClick={whenClick}> Добави продукт </button>
  </div>

  </>
  )
}
export default List;