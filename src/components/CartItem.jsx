function CartItem(props){
    let classes = props.className;
    const onClickRemoveItem = () => {
        props.onRemoveItem(props.id);
    }
    return (
        <div className={classes}>
            <h3>{props.title}</h3>
            <p>${props.price}</p>
            <p>Quantity: {props.quantity}</p>
            <button onClick={onClickRemoveItem}>Remove</button>
        </div>
    )
}

export default CartItem;