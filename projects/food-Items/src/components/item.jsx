import styles from "./item.module.css";

const Item = ({ items }) => {
  const foodBuyButton = (items) => {
    alert(`You bought ${items}`);
  };
  return (
    <>
      <li className="list-group-item">
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
