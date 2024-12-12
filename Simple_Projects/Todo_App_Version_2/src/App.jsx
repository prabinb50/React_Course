import AppName from "./Components/AppName"
import AddTodo from "./Components/AddTodo"
import "./style.css"
import TodoItems from "./Components/TodoItems"

function App() {
  const todoItems = [
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
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  )

}
export default App