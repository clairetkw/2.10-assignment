import styles from "./ViewList.module.css";

function ViewList({ list , sum, saved}) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Discount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* We want to read through the list array, so we can use an array function (map) that allows us to put elements in to the specific parts of the array */}
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.discount}</td>
              <td>{item.total}</td>
            </tr>
          ))}
          {/* 
            1. What is the i for?
            i is for the index
            2. What is the key for?
            the key is used for unique identification          
          */}
        </tbody>
      </table>
      <p>
        Total: $ 
        {sum}
      </p>
      <p>
        Amount saved: $ 
        {saved}
      </p>
    </div>
  );
}

export default ViewList;
