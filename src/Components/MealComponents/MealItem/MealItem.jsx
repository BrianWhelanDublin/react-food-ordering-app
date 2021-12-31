import MealItemForm from "../MealItemForm/MealItemForm";
import styles from "./MealItem.module.scss";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

const MealItem = ({ id, title, description, price }) => {
  const cartContext = useContext(CartContext);

  const addToCart = (amount) => {
    cartContext.addItem({
      id: id,
      name: title,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{title}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>€ {price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
