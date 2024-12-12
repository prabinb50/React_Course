import React from "react";
import Display from "./Display";
import Button from "./Button";
import styles from "./../styles/Calculator.module.css";

const Calculator = () => {
    const handleClick = (label) => {
        console.log(`Button ${label} clicked!`);
    };

    const buttons = [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "-"],
        ["0", ".", "=", "+"],
    ];

    return (
        <div className={styles.calculator}>
            <Display value="0" />
            <div className={styles.buttons}>
                {buttons.map((row, rowIndex) => (
                    <div className={styles.row} key={rowIndex}>
                        {row.map((label) => (
                            <Button key={label} label={label} onClick={() => handleClick(label)} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
