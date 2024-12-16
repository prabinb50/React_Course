import "bootstrap/dist/css/bootstrap.min.css"
import Item from "./Item";
import { useState } from "react";

function FoodItems({ items }) {

    let [activeItems, setActiveItems] = useState([]);

    let onBuyButton = (item, event) => {
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    }

    // let foodItems = ["Salad", "Green Vegatables", "Milk", "Whole Grains", "Meat", "Ghee"];

    return (
        <>
            <ol className="list-group list-group-numbered">
                {items.map((item) => (<Item key={item} foodItems={item} bought={activeItems.includes(item)} handleBuyButton={(event) => onBuyButton(item, event)}></Item>))}
            </ol>
        </>
    )
}

export default FoodItems;

