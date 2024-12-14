import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/Props/FoodItems';
import ErrMessage from './components/Props/ErrMessage';
import Heading from './components/Props/Heading';
import "./App.css"
import Container from "./components/Props/Container";
import FoodInput from "./components/Props/FoodInput";
import { useState } from "react";

function App() {
  let foodItems = ["Salad", "Green Vegatables", "Milk", "Whole Grains", "Meat", "Ghee"];

  let textStateArr = useState('Fooditem Entered by User');
  let textToShow = textStateArr[0]; // current value
  let setTextState = textStateArr[1];

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  }

  return (
    <>
      <Container>
        <Heading></Heading>
        <ErrMessage items={foodItems}></ErrMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>

  );
}

export default App
