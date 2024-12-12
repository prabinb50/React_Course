import "./App.css"
import Display from "./components/Display";
import Button from "./components/Button";

const App = () => {
    return (
        <div className="calculator">
            <h1 style={{ textAlign: "center" }}>Calulator</h1>
            <Display></Display>
            <Button></Button>
        </div>
    );
};

export default App;


