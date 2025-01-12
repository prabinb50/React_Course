import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {

    const dispatch = useDispatch();

    const inputElement = useRef();

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    }

    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }

    const handlePrivacyToggle = () => {
        dispatch(privacyActions.toggle());
    }

    const handleAdd = () => {
        dispatch(counterActions.add({
            num: inputElement.current.value
        }))
        inputElement.current.value = "";
    }

    const handleSub = () => {
        dispatch(counterActions.subtract({
            num: inputElement.current.value
        }))
        inputElement.current.value = "";
    }

    return (
        <>
            <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" style={{ margin: "10px" }} onClick={handleIncrement}>+1</button>
                <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
                <button type="button" class="btn btn-warning" style={{ marginLeft: "10px" }} onClick={handlePrivacyToggle}>Privacy Toggle</button>
            </div>

            <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <input type="text" placeholder="Enter number" className="number-input" ref={inputElement} style={{ margin: "10px" }} />
                <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>
                <button type="button" className="btn btn-danger" style={{ margin: "10px" }} onClick={handleSub}>Subtract</button>
            </div>
        </>
    )
}

export default Controls;