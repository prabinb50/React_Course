import AppName from "./Components/AppName"
import AddTodo from "./Components/AddTodo"
import TodoItem1 from "./Components/TodoItem1"
import TodoItem2 from "./Components/TodoItem2"
import "./style.css"

function App() {
  return <center className="todo-container">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className="items-container">
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
    </div>

  </center>
}
export default App