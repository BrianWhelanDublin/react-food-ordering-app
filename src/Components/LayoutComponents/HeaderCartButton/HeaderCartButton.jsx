import CartIcon from "../../CartComponents/CartIcon";
import styles from "./HeaderCartButton.module.scss";

const HeaderCartButton = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
