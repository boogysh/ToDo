import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import Item from "./composants/item";
import Form from "./composants/form";

function App() {
  const [dataArr, setDataArr] = useState([]);
  const [stateInput, setStateInput] = useState();

  const deleteElement = (id) => {
    const filteredState = dataArr.filter((item) => {
      return item.id !== id;
    });
    setDataArr(filteredState);
  };

  const sendFunc = (e) => {
    e.preventDefault();
    const newArr = [...dataArr];
    const newToDo = {};
    newToDo.txt = stateInput;
    newToDo.id = uuidv4();

    newArr.push(newToDo);
    setDataArr(newArr);
    setStateInput('')
  };
  const addToDo = (e) => {
    setStateInput(e.target.value);
  };

  return (
    <main>
      <h1>Todo-List</h1>
      <Form send={sendFunc} input={addToDo} 
      state={stateInput}
      />
      {dataArr.map((item) => {
        return (
          <Item
            txt={item.txt}
            key={item.id}
            id={item.id}
            delFunc={deleteElement}
          />
        );
      })}
    </main>
  );
}

export default App;
