import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/Props/FoodItems';
import ErrMessage from './components/Props/ErrMessage';
import Heading from './components/Props/Heading';
import "./App.css"
import Container from "./components/Props/Container";
import FoodInput from "./components/Props/FoodInput";


// Fragments
function App() {
  let foodItems = ["Salad", "Green Vegatables", "Milk", "Whole Grains", "Meat", "Ghee"];

  return (

    <>
      <Container>
        <Heading></Heading>
        <ErrMessage items={foodItems}></ErrMessage>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>

  );
}

export default App
