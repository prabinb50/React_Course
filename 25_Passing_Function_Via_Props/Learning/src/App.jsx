import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/Props/FoodItems';
import ErrMessage from './components/Props/ErrMessage';
import Heading from './components/Props/Heading';
import "./App.css"
import Container from "./components/Props/Container";
import FoodInput from "./components/Props/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["Salad", "Green Vegatables", "Milk", "Whole Grains", "Meat", "Ghee"];

  // let [textToShow, setTextState] = useState();

  let [foodItems, setFoodItems] = useState(["Salad", "Green Vegatables", "Milk", "Whole Grains", "Meat", "Ghee"]);

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  }

  return (
    <>
      <Container>
        <Heading></Heading>
        <ErrMessage items={foodItems}></ErrMessage>
        <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>

  );
}

export default App
