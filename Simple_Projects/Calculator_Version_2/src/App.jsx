import "./App.css"
import Display from "./components/Display";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
    const [calculatorValue, setCalculatorValue] = useState("");

    const onButtonClick = (buttonText) => {
        if (buttonText === "C") {
            setCalculatorValue("");

        } else if (buttonText === "=") {
            const result = eval(calculatorValue);
            setCalculatorValue(result);

        } else {
            const newDisplayValue = calculatorValue + buttonText;
            setCalculatorValue(newDisplayValue);
        }
    }

    return (
        <div className="calculator">
            <h1 style={{ textAlign: "center" }}>Calulator</h1>
            <Display displayValue={calculatorValue}></Display>
            <Button onButtonClick={onButtonClick}></Button>
        </div>
    );
};

export default App;


