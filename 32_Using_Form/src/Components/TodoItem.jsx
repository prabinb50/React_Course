import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {

    // let todoName = "Buy Milk";
    // let todoDate = "4/10/2023";

    return <div class="container">
        <div class="row py-row">
            <div class="col-4">{todoName}</div>
            <div class="col-4">{todoDate}</div>
            <div class="col-2"><button type="button" class="btn btn-danger py-button" onClick={() => onDeleteClick(todoName)}><MdDelete /></button></div>
        </div>
    </div>

}

export default TodoItem;