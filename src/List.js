import "./List.css";

function List(props) {
  const deleteItemFromList = (key) => {
    const newList = props.items.filter((itemObj) => {
      return itemObj.key !== key;
    });
    props.updateItemList(newList);
  };
  return (
    <div>
      {props.items.map((itemObj) => {
        return (
          <div key={itemObj.key} className="Item">
            <p> {itemObj.item}</p>
            <button onClick={() => deleteItemFromList(itemObj.key)}> x </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
