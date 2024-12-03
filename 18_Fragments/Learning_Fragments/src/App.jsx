import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ConditionalRendering from './ConditionalRendering';
import Fragments from './Fragments';
import MapMethods from './MapMethods';
import FoodItems from './components/Props/FoodItems';
import ErrMessage from './components/Props/ErrMessage';
import Heading from './components/Props/Heading';

// Fragments
function App() {
  return (
    <>
      {/* <Fragments></Fragments>
      <MapMethods></MapMethods>
      <ConditionalRendering /> */}
      <Heading></Heading>
      <ErrMessage></ErrMessage>
      <FoodItems></FoodItems>
    </>
  );
}

export default App
