import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsStore";
import TodoItem from "./TodoItem";

function TodoItems() {

    // const contextObj = useContext(TodoItemsContext);
    // const todoItems = contextObj.todoItems;
    const { todoItems } = useContext(TodoItemsContext);

    return (
        <div className="items-container">
            {todoItems.map((item) => (<TodoItem key={item.name} todoName={item.name} todoDate={item.date} ></TodoItem>))}

            {/* <TodoItem todoName="Buy Milk" todoDate="4/10/2023"></TodoItem>
            <TodoItem todoName="Go to College" todoDate="4/10/2023"></TodoItem> */}
        </div>
    )

}
export default TodoItems;