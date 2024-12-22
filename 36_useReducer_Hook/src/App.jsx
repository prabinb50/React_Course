import AppName from "./Components/AppName"
import AddTodo from "./Components/AddTodo"
import "./style.css"
import TodoItems from "./Components/TodoItems"
import WelcomeMess from "./Components/WelcomeMess"
import TodoItemsContextProvider from "./store/TodoItemsStore";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMess></WelcomeMess>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  )
}
export default App