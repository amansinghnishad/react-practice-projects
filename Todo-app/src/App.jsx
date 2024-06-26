import AppName from "./components/Todoheading";
import AddTodo from "./components/todoAdd";
import TodoItems from "./components/todoitems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeMessage from "./components/Welcome";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handelNewItems = (itemName, itemDueDate) => {
    console.log(`New item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handelDeleteItems = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItems={handelNewItems}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handelDeleteItems}
      ></TodoItems>
    </center>
  );
}

export default App;
