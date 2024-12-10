//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function ErrMessage({ items }) {
    // let foodItems = ["Salad", "Green Vegatables", "Milk", "Whole Grains", "Meat", "Ghee"];
    return (
        <>
            {items.length === 0 && <h3>I am still hungry.</h3>}
        </>
    )
}

export default ErrMessage