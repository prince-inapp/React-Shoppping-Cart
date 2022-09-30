import Card from "../UI/Card"
import CartItem from "./CartItem";
import DisplayItem from "./DisplayItem";
import './CartItem.css';
import './Cart.css';

function Cart(props){

    function onRemoveItem(id){
        props.onRemoveItem(id);
    }
    let sum = 0;
    let totalPrice = 0;
    const cartItems = props.cart.map((item) => {
        sum += item.price * item.quantity;
        totalPrice = sum;
        return (
            <CartItem
                key={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                onRemoveItem = {onRemoveItem}
            />
        )
    }
    )
       
    return (
        <div>
            
            <div className="side-bar">
                <h2>Cart</h2>                 
                {cartItems}
                <h3>Total Price: ${totalPrice}</h3>
            </div>
        </div>
    )
}
export default Cart;