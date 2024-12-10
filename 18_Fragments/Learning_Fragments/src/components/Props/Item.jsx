import styles from "./Item.module.css";

function Item(props) {
    return (
        <li key={props.foodItems}
            className={`${styles["kg-item"]} list-group-item`}>{props.foodItems}</li>
    )
}

export default Item;