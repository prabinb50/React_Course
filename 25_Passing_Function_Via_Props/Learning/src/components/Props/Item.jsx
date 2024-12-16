import styles from "./Item.module.css";

function Item({ foodItems, bought, handleBuyButton }) {

    return (
        <li key={foodItems}
            className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}>{foodItems}

            <button className={`${styles.button} btn btn-outline-dark`} onClick={handleBuyButton}>Buy</button>
        </li>
    )
}

export default Item;

