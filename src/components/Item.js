import React, {useState} from "react";

function Item({name, category }){
  const [inCart, setInCart] = useState(false);

  function handleCart(){
    setInCart((inCart) => !inCart);
  }

  const cart = inCart ? "in-cart" : "add";

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart} onClick={handleCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;