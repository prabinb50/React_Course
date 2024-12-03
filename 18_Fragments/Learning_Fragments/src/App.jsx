import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ConditionalRendering from './ConditionalRendering';
import Fragments from './Fragments';
import MapMethods from './MapMethods';

// Fragments
function App() {
  return (
    <>
      <Fragments></Fragments>
      <MapMethods></MapMethods>
      <ConditionalRendering />
    </>
  );
}

export default App
