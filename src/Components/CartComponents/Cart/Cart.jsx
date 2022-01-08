import Modal from "../../UI/Modal/Modal";
import styles from "./Cart.module.scss";
import CartContext from "../../../store/cart-context";
import { useContext, useState } from "react";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";

const Cart = ({ onCloseCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartContext = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const orderHandler = () => setShowCheckout(true);

  const cancelHandler = () => setShowCheckout(false);

  const submitOrderHandler = async (userData) => {
    setShowCheckout(false);
    setIsSubmitting(true);
    const response = await fetch(process.env.REACT_APP_DATABASE_URL_ORDERS, {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: cartContext.items,
      }),
    });
    if (!response.ok) {
      console.log("error");
    }

    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearCart();
  };

  if (showCheckout) {
    return (
      <Modal onClick={onCloseCart}>
        <Checkout onConfirm={submitOrderHandler} onCancel={cancelHandler} />
      </Modal>
    );
  }

  const cartModalContent = (
    <>
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
          <button className={styles.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </>
  );

  const isSubmittingModalContent = <p>Sending Order Data ...</p>;

  const didSubmitModalContent = (
    <>
      <p>Order Sent Succesfully</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={onCloseCart}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal onClick={onCloseCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
