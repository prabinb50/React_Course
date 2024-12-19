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

    const handleAddButtonClicked = () => {
        onNewItem(todoName, todoDate);
        setTodoDate("");
        setTodoName("");
    }

    return <div class="container text-center">
        <div class="row py-row">
            <div class="col-4"><input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange} /></div>
            <div class="col-4"><input type="date" value={todoDate} onChange={handleDateChange} /></div>
            <div class="col-2"><button type="button" class="btn btn-success py-button" onClick={handleAddButtonClicked}><IoAddCircleOutline /></button></div>
        </div>
    </div>

}

export default AddTodo;