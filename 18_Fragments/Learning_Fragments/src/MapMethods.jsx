import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

// Rendering lists using Map Method
function MapMethods() {

    let foodItems = ["Salad", "Green Vegatables", "Milk", "Whole Grains", "Meat", "Ghee"];
    return (
        <>
            <h1>Healthy Foods</h1>
            <ol className="list-group list-group-numbered">
                {foodItems.map((item) => (<li key={item}
                    className="list-group-item">{item}</li>))}
            </ol>
        </>
    );
}


export default MapMethods
