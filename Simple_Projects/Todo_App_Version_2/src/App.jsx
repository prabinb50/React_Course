import AppName from "./Components/AppName"
import AddTodo from "./Components/AddTodo"
import "./style.css"
import TodoItem from "./Components/TodoItem"

function App() {
  return <center className="todo-container">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className="items-container">
      <TodoItem todoName="Buy Milk" todoDate="4/10/2023"></TodoItem>
      <TodoItem todoName="Go to College" todoDate="4/10/2023"></TodoItem>
    </div>

  </center>
}
export default App