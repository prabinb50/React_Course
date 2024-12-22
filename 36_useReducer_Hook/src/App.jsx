import AppName from "./Components/AppName"
import AddTodo from "./Components/AddTodo"
import "./style.css"
import TodoItems from "./Components/TodoItems"
import WelcomeMess from "./Components/WelcomeMess"
import { useReducer } from "react";
import { TodoItemsContext } from "./store/TodoItemsStore";

// reducer is a pure function.... action object takes and return current state
const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [...currTodoItems, { name: action.payload.itemName, date: action.payload.itemDate }];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(item => item.name !== action.payload.itemName);
  }
  return newTodoItems;
}

function App() {

  // const [todoItems, setTodoItems] = useState([]);

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        itemDate: itemDate
      }
    }
    dispatchTodoItems(newItemAction);
  }

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      }
    }
    dispatchTodoItems(deleteItemAction);
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