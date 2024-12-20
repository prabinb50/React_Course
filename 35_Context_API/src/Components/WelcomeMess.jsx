import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsStore";

const WelcomeMess = () => {

    const { todoItems } = useContext(TodoItemsContext);

    return (
        todoItems.length === 0 && <p className="welcome">Enjoy Your Day</p>
    )
}
export default WelcomeMess;