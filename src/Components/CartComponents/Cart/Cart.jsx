import Modal from "../../UI/Modal/Modal";
import styles from "./Cart.module.scss";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";

const Cart = ({ onCloseCart }) => {
  const cartContext = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  //   const cartItems = [{ id: "c1", name: "Sushi", amount: "1", price: "9.99" }];
  return (
    <Modal onClick={onCloseCart}>
      <ul className={styles["cart-items"]}>
        {cartContext.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total</span>
        <span>€ {cartContext.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        {cartContext.items.length > 0 && (
          <button className={styles.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
