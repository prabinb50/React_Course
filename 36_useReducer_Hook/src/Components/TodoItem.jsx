import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/TodoItemsStore";

function TodoItem({ todoName, todoDate }) {

    const { deleteItem } = useContext(TodoItemsContext);

    return <div class="container">
        <div class="row py-row">
            <div class="col-4">{todoName}</div>
            <div class="col-4">{todoDate}</div>
            <div class="col-2"><button type="button" class="btn btn-danger py-button" onClick={() => deleteItem(todoName)}><MdDelete /></button></div>
        </div>
    </div>

}

export default TodoItem;