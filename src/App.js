import { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [currentItem, setCurrentItem] = useState(" ");
  const [itemList, setItemList] = useState([]);

  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItemTolist = () => {
    setItemList([
      ...itemList,
      { item: currentItem, key: Math.floor(Math.random() * 10000) },
    ]);
    setCurrentItem("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <h2> To-Do-List</h2>
          <div className="Input-wrapper">
            <input
              placeholder="Add item"
              value={currentItem}
              onChange={onChangeHandler}
            />
            <button onClick={addItemTolist}> Add </button>
          </div>
          {/* passing a prop(items) which has access to all items in itemList*/}
          <List items={itemList} updateItemList={setItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
