import { useState } from "react";
import Cart from "./Components/CartComponents/Cart/Cart";
import Header from "./Components/LayoutComponents/Header/Header";
import MealsContainer from "./Components/MealComponents/MealsContainer/MealsContainer";
import CartProvider from "./store/CartProvider";

const App = () => {

  const [showCart, setShowCart] = useState(false);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  return (
    <CartProvider >
      {showCart && <Cart onCloseCart={closeCart} />}
      <Header onShowCart={openCart} />
      <MealsContainer />
    </CartProvider>
  );
}

export default App;
