import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function ConditionalRendering() {

    let foodItems = ["Salad", "Green Vegatables", "Milk", "Whole Grains", "Meat", "Ghee"];
    // let foodItems = [];

    // by using if-else
    // if (foodItems.length === 0) {
    //   return <h3>I am still hungry.</h3>
    // }

    // by using Ternary Operators
    let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

    return (
        <>
            <h1>Healthy Foods</h1>
            {emptyMessage}
            <ol className="list-group list-group-numbered">
                {foodItems.map((item) => (<li key={item}
                    className="list-group-item">{item}</li>))}
            </ol>
        </>
    );
}



export default ConditionalRendering
