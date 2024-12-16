import styles from './FoodInput.module.css'

function FoodInput({ handleOnKeyDown }) {
    return (
        <div>
            <input type="text" placeholder="Enter Food Item Here" className={styles.foodInput} onKeyDown={handleOnKeyDown} />
        </div>
    )

}

export default FoodInput;