import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoAdd from "./components/todoAdd";
import TodoHeading from "./components/Todoheading";
import TodoItem from "./components/todoItem";

function App() {
  return (
    <div className="container">
      <TodoHeading />
      <TodoAdd />
      <div className="item-container">
        <TodoItem todoName="eat breakfast" date="10/10/2023"></TodoItem>
        <TodoItem todoName="go to college" date="10/10/2023"></TodoItem>
      </div>
    </div>
  );
}
export default App;
