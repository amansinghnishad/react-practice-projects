import styles from "./foodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <div className="inputBox-container">
      <input
        className={styles.inputBox}
        type="text"
        placeholder="Enter food item"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default FoodInput;
