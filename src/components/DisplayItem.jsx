import './DisplayItem.css';
function DisplayItem(props) {
    const title = props.item.title;
    const image = props.item.image;
    const description = props.item.description;
    const price = props.item.price;
    const quantity = props.item.quantity;
    console.log(props.item);
  return (
    <div className="display-item">
      <h3>{title}</h3>
      <img src={image} alt={props.title} />
      <p>{description}</p>
        <p>{price}</p>
        <p>items remaining : {quantity} </p>
      <button>Add to Cart</button>
    </div>
  );
}

export default DisplayItem;