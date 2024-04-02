import styles from "./foodInput.module.css";

const FoodInput = () => {
  const handelChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="inputBox-container">
      <input
        className={styles.inputBox}
        type="text"
        placeholder="Enter food item"
        onChange={handelChange}
      />
    </div>
  );
};

export default FoodInput;
