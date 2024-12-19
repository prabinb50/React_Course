import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

function AddTodo({ onNewItem }) {

    const [todoName, setTodoName] = useState("");

    const [todoDate, setTodoDate] = useState("");

    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    }

    const handleDateChange = (event) => {
        setTodoDate(event.target.value);
    }

    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        onNewItem(todoName, todoDate);
        setTodoDate("");
        setTodoName("");
    }

    return <div class="container text-center">
        <form class="row py-row" onSubmit={handleAddButtonClicked}>
            <div class="col-4"><input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange} /></div>
            <div class="col-4"><input type="date" value={todoDate} onChange={handleDateChange} /></div>
            <div class="col-2"><button type="submit" class="btn btn-success py-button"><IoAddCircleOutline /></button></div>
        </form>
    </div>

}

export default AddTodo;