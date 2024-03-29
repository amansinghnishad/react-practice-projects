import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/foodItems";
import ErrorMessage from "./components/errorMessage";

function App() {
  let items = ["Fruits", "Vegetables", "Meat", "Dairy", "Grains"];
  return (
    <>
      <h1>Food Items</h1>

      <FoodItems items={items} />
      <ErrorMessage items={items} />
    </>
  );
}

export default App;
