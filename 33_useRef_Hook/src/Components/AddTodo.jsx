import { useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

function AddTodo({ onNewItem }) {

    // const [todoName, setTodoName] = useState("");

    // const [todoDate, setTodoDate] = useState("");

    const todoNameElement = useRef();

    const todoDateElement = useRef();

    // const handleNameChange = (event) => {
    //     setTodoName(event.target.value);
    //     noOfUpdates.current += 1;
    // }

    // const handleDateChange = (event) => {
    //     setTodoDate(event.target.value);
    //     console.log(`no of updates: ${noOfUpdates.current}`);
    // }

    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const todoDate = todoDateElement.current.value;
        todoNameElement.current.value = "";
        todoDateElement.current.value = "";
        onNewItem(todoName, todoDate);
        // setTodoDate("");
        // setTodoName("");
    }

    return <div class="container text-center">
        <form class="row py-row" onSubmit={handleAddButtonClicked}>
            <div class="col-4"><input type="text" ref={todoNameElement} placeholder="Enter Todo Here" /></div>
            <div class="col-4"><input type="date" ref={todoDateElement} /></div>
            <div class="col-2"><button type="submit" class="btn btn-success py-button"><IoAddCircleOutline /></button></div>
        </form>
    </div>

}

export default AddTodo;