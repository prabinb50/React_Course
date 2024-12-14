import styles from './FoodInput.module.css'

function FoodInput() {
    return (
        <div>
            <input type="text" placeholder="Enter Food Item Here" className={styles.foodInput} onChange={(event) => {
                console.log(event);
            }} />
        </div>
    )

}

export default FoodInput;