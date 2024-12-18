import AppName from "./Components/AppName"
import AddTodo from "./Components/AddTodo"
import "./style.css"
import TodoItems from "./Components/TodoItems"
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      date: "4/10/2023",
    },
    {
      name: "Go to College",
      date: "4/10/2023",
    },
    {
      name: "Prabin Joshi",
      date: "Loive You"
    }
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDate}`);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDate }]
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  )

}
export default App