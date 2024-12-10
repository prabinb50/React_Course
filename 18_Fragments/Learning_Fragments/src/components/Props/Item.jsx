function Item(props) {
    return (
        <li key={props.foodItems}
            className="list-group-item">{props.foodItems}</li>
    )
}

export default Item;