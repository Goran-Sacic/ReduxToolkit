import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        price: price,

        // Or just code as 'id, title, price' without the ':id, :title, :price' part.
        // Example:
        //    dispatch(cart.Actions(addItemToCart){
        //      id,
        //      title,
        //      price,
        //    })
        // In modern JS, where the key name and the variable name holding the value are equal, we
        // can omit the right side of the property assignment. It's automatically expanded behind
        // the scenes.
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>€{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
