import styles from './FoodInput.module.css'

function FoodInput({ handleOnChange }) {
    return (
        <div>
            <input type="text" placeholder="Enter Food Item Here" className={styles.foodInput} onChange={handleOnChange} />
        </div>
    )

}

export default FoodInput;