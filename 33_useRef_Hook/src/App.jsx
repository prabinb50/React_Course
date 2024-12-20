import AppName from "./Components/AppName"
import AddTodo from "./Components/AddTodo"
import "./style.css"
import TodoItems from "./Components/TodoItems"
import WelcomeMess from "./Components/WelcomeMess"
import { useState } from "react";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    setTodoItems((currentValue) => {
      const newTodoItems = [...currentValue, { name: itemName, date: itemDate }]
      return newTodoItems;
    });
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMess></WelcomeMess>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  )

}
export default App