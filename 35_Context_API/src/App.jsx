import AppName from "./Components/AppName"
import AddTodo from "./Components/AddTodo"
import "./style.css"
import TodoItems from "./Components/TodoItems"
import WelcomeMess from "./Components/WelcomeMess"
import { useState } from "react";
import { TodoItemsContext } from "./store/TodoItemsStore"

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    setTodoItems((currentValue) => {
      const newTodoItems = [...currentValue, { name: itemName, date: itemDate }]
      return newTodoItems;
    });
  }

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <TodoItemsContext.Provider value={{ todoItems: todoItems, addNewItem: addNewItem, deleteItem: deleteItem }}>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMess></WelcomeMess>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>

  )
}
export default App