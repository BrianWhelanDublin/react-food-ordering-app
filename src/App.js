import { useState } from "react";
import Cart from "./Components/CartComponents/Cart/Cart";
import Header from "./Components/LayoutComponents/Header/Header";
import MealsContainer from "./Components/MealComponents/MealsContainer/MealsContainer";

const App = () => {

  const [showCart, setShowCart] = useState(false);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  return (
    <>
      <Header onShowCart={openCart} />
      <MealsContainer />
      {showCart && <Cart onCloseCart={closeCart} />}
    </>
  );
}

export default App;
