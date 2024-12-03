import Header from "./components/Header";
import Description from "./components/Description";
import TimeDisplay from "./components/TimeDisplay";
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return <div className="clock-container">
    <Header></Header>
    <Description></Description>
    <TimeDisplay></TimeDisplay>

  </div>


}

export default App;