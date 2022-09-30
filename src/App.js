import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./UI/Card";
import DisplayItem from "./components/DisplayItem";
import { useState } from "react";
import Cart from "./components/Cart";
import CartCard from "./UI/CartCard";

function App() {
  function findIndex(arr, id) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  const [items, setItems] = useState([
    {
      id: 1,
      title: "Book",
      image: "https://picsum.photos/id/855/200/300",
      description: "This is a book",
      price: 10,
      quantity: 10,
    },
    {
      id: 2,
      title: "Pen",
      image: "https://picsum.photos/id/4/200/300",
      description: "This is a pen",
      price: 5,
      quantity: 15,
    },
  ]);
  console.log(items[0].quantity);
  const [cart, setCart] = useState([]);

  const addToCartHandler = (i) => {
    const { id, title, image, description, price, quantity } = i;
    // console.log(item);
    // i.preventDefault();
    let presentInCart = false;
    if (quantity > 0) {
      cart.map((item, index) => {
        console.log(item.id);
        if (item.id == id && quantity > 0) {
          let ind = findIndex(items, id);
          if (items[ind].quantity > 0) {
            presentInCart = true;
            item.quantity++;

            items[ind].quantity--;
            setCart([...cart]);
            setItems([...items]);
            return;
          }
        }
      });
      if (!presentInCart) {
        console.log("not present");
        setCart([
          ...cart,
          {
            id,
            title,
            image,
            description,
            price,
            quantity: 1,
          },
        ]);
        items.map((item, index) => {
          if (item.id == id) {
            items[items.indexOf(item)].quantity--;
            setItems([...items]);
            return;
          }
        });
      }
    }
    else{
      alert("Out of stock");
    }
  };

  const showCartItems = () => {
    console.log(cart);
  };

  function removeItemFromCart(id){
    let copyOfCart = [...cart];
    delete copyOfCart[id];
    setCart(copyOfCart);
  }


  return (
    <div>
      <NavBar>
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>

      </NavBar>
      <CartCard>
        <Cart cart = {cart} onRemoveItem = {removeItemFromCart}/>
      </CartCard>
      
        <Card>
          {items.map((item, index) => {
            return (
              <DisplayItem
                key={index}
                item={item}
                onAddToCart={addToCartHandler}
              />
            );
          })}
        </Card>
    </div>
  );
}

export default App;
