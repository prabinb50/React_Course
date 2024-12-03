//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function FoodItems() {

    let foodItems = ["Salad", "Green Vegatables", "Milk", "Whole Grains", "Meat", "Ghee"];

    return (
        <>
            <ol className="list-group list-group-numbered">
                {foodItems.map((item) => (<li key={item}
                    className="list-group-item">{item}</li>))}
            </ol>
        </>
    )
}
export default FoodItems