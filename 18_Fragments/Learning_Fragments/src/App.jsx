import "bootstrap/dist/css/bootstrap.min.css"
import ConditionalRendering from './ConditionalRendering';
import Fragments from './Fragments';
import MapMethods from './MapMethods';
import FoodItems from './components/Props/FoodItems';
import ErrMessage from './components/Props/ErrMessage';
import Heading from './components/Props/Heading';
import "./App.css"


// Fragments
function App() {
  let foodItems = ["Salad", "Green Vegatables", "Milk", "Whole Grains", "Meat", "Ghee"];
  return (
    <>
      {/* <Fragments></Fragments>
      <MapMethods></MapMethods>
      <ConditionalRendering /> */}
      <Heading></Heading>
      <ErrMessage items={foodItems}></ErrMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App
