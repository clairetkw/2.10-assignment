//  Move the children components from Product to Card
import styles from "./Card.module.css";
import Button from "./Button";
import Input from "./Input";

// Get all the data from the Product component
// States and the functions
function Card({
  // All the props on diff lines because it's easier to read! Good coding practice
  name,
  count,
  price,
  discount,
  handlerPlus,
  handlerMinus,
  handlerChangeName,
  handlerChangePrice,
  handlerAddProduct,
}) {
  // Move the components presentation from Product to Card
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.counter}>
        <Button label="➖" onClick={handlerMinus} />
        <span className={styles.count}>{count}</span>
        <Button label="➕" onClick={handlerPlus} />
      </div>
      <div className={styles.price}>{`$ ${price}`} each</div>
      <div className={styles.discount}>{`Discount: ${discount}%`}</div>
      <div className={styles.form}>
        <Input value={name} label="Product Name" onChange={handlerChangeName} />
        <Input value={price} label="Price" onChange={handlerChangePrice} />
      </div>
      <Button label="Add Product" onClick={handlerAddProduct} />
    </div>
  );
}

export default Card;
