import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {

    const dispatch = useDispatch();

    const inputElement = useRef();

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" })
    }

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" })
    }

    const handleAdd = () => {
        dispatch({
            type: "ADD", payload: {
                num: inputElement.current.value
            }
        })
        inputElement.current.value = "";
    }

    const handleSub = () => {
        dispatch({
            type: "SUB", payload: {
                num: inputElement.current.value
            }
        })
        inputElement.current.value = "";
    }

    return (
        <>
            <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" style={{ margin: "10px" }} onClick={handleIncrement}>+1</button>
                <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
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