import styles from "./item.module.css";

const Item = ({ items, bought }) => {
  const foodBuyButton = (items) => {
    alert(`You bought ${items}`);
  };
  return (
    <>
      <li className={`list-group-item ${bought && "active"}`}>
        {items}
        <button
          className={`${styles.button}  btn btn-info`}
          onClick={() => {
            foodBuyButton(items);
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
