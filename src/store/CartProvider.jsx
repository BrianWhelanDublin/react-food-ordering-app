import { useReducer } from "react";
import CartContext from "./cart-context";

const ADD_TO_CART = "ADD_TO_CART";

const cartInitialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const updatedItems = state.items.concat(action.payload);
    const updatedAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return cartInitialState;
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (item) => {
    cartDispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };

  const removeFromCart = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCart,
    removeItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
