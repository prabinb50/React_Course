import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick }) {
    return (
        <div className="items-container">
            {todoItems.map((item) => (<TodoItem key={item.name} todoName={item.name} todoDate={item.date} onDeleteClick={onDeleteClick}></TodoItem>))}

            {/* <TodoItem todoName="Buy Milk" todoDate="4/10/2023"></TodoItem>
            <TodoItem todoName="Go to College" todoDate="4/10/2023"></TodoItem> */}
        </div>
    )

}
export default TodoItems;