import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../CartComponents/CartIcon";
import styles from "./HeaderCartButton.module.scss";

const HeaderCartButton = ({ onClick }) => {
  const cartContext = useContext(CartContext);

  const itemsLength = cartContext.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{itemsLength}</span>
    </button>
  );
};

export default HeaderCartButton;
