//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Item from "./Item";

function FoodItems({ items }) {

    // let foodItems = ["Salad", "Green Vegatables", "Milk", "Whole Grains", "Meat", "Ghee"];

    return (
        <>
            <ol className="list-group list-group-numbered">
                {items.map((item) => (<Item key={item} foodItems={item}></Item>))}
            </ol>
        </>
    )
}
export default FoodItems;