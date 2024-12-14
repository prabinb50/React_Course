import styles from "./Item.module.css";

function Item({ foodItems }) {

    const handleBuyButton = (event) => {
        console.log(event);

        alert(`${foodItems} being bought`);
    }

    return (
        <li key={foodItems}
            className={`${styles["kg-item"]} list-group-item`}>{foodItems}

            <button className={`${styles.button} btn btn-outline-dark`} onClick={(event) => { handleBuyButton(event) }}>Buy</button>
        </li>
    )
}

export default Item;