import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../CartComponents/CartIcon";
import styles from "./HeaderCartButton.module.scss";

const HeaderCartButton = ({ onClick }) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const itemsLength = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimation(true);
    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button
      className={`${styles.button} ${btnAnimation ? styles.bump : ""}`}
      onClick={onClick}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{itemsLength}</span>
    </button>
  );
};

export default HeaderCartButton;
