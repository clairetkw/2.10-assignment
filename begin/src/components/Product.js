import styles from "./Product.module.css";
// Clean up of Product:
// 1. Remove all other components and replace it with Card
// 2. Remove all inside the return an dpass to the Card component all the data it needs
import { useState } from "react";
import Card from "./Card";
// Include ViewList component and use it in our Product component
import ViewList from "./ViewList";

function Product() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Banana");
  const [price, setPrice] = useState(2.99);

  // Create an array og products to display the items added
  // 1. Create a state called "list" and set its initial value to an empty array

  const [list, setList] = useState([]);
  const [sum, setSum] = useState(0);
  const [saved, setSaved] = useState(0);

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };
  const handlerChangePrice = (value) => {
    setPrice(value);
  };
  const handlerAddProduct = () => {
    console.log("handlerAddProduct: name, price", name, price);
    // 2. Add functionality to handlerAddProduct
    // Create a new object with keys for name and price
    const newItem = {
      name: name,
      price: price,
      quantity: count,
      discount: discount + "%",
      total: (price * count * ((100 - discount) / 100)).toFixed(2),
      saved: ((price * count) - (price * count * ((100 - discount) / 100))).toFixed(2)
    };
 
    // Add the new item to the list
    // Note: we can't just use append to add new items to the list since it is a state
    // Best practice is to create a new list by using the ... operator (spread)
    const newList = [...list, newItem];
    // Use the setter for the new list
    setList(newList);
    console.log(newList);

    // either make it into an array and use foreach, or just use reduce without array
    
    const sumTotal = sum + parseFloat(newItem.total);
    setSum(sumTotal);

    const saved1 = saved + parseFloat(newItem.saved);
    setSaved(saved1);
  };

  return (
    <div className={styles.container}>
      <Card
        name={name}
        count={count}
        price={price}
        discount={discount}
        handlerPlus={handlerPlus}
        handlerMinus={handlerMinus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
        // handlerSumTotal={handlerSumTotal}
      />
      <ViewList list={list} sum={sum} saved={saved}/>
    </div>
  );
}
export default Product;

// Recap:
// 1. Data flows from parent to child
// 2. If child should do some action to change the value for state, it needs to use
// the callback functions from the parent
// 3. Components come in 2 main categories:
// - Presentational -> how it looks (View)
// - Container -> how it works (Logic)
// 4. The map function can be used for arrays to read through content and apply
// elements to each item
