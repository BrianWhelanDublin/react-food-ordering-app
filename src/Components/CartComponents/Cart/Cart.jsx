import Modal from "../../UI/Modal/Modal";
import styles from "./Cart.module.scss";

const Cart = ({ onCloseCart }) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: "1", price: "9.99" }];
  return (
    <Modal>
      <ul className={styles["cart-items"]}>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total</span>
        <span>35.00</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
