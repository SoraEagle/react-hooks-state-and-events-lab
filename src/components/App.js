import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isOn, setIsOn] = useState(false); // State variable

  function handleClick(){ // Callback function to update state
    setIsOn((isOn) => !isOn);
  }

  const appClass = isOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isOn ? "Light Mode" : "Dark Mode"}</button> {/*Text changes based whether in dark or light mode*/}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;