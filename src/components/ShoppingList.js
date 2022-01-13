import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items, inCart }){
  const [selectedCategory, setSelectedCategory] = useState("filter");

  const itemsToDisplay = items.filter((items) => {
    if(selectedCategory === "filter") return true;
    else return items.category === selectedCategory;
  });

  function handleCategoryChange(event){
    setSelectedCategory(event.target.value);
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;