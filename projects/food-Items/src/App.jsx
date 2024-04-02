import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems";
import ErrorMessage from "./components/errorMessage";
import Container from "./components/Container";
import FoodInput from "./components/foodInput";
import styles from "./App.module.css";

function App() {
  let items = ["Fruits", "Vegetables", "Meat", "Dairy", "Grains"];
  return (
    <Container>
      <h1 className={styles.heading}>Food Items</h1>
      <FoodInput></FoodInput>
      <FoodItems items={items} />
      <ErrorMessage items={items} />
    </Container>
  );
}

export default App;
