import { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./MealItemForm.module.scss";

const MealItemForm = ({ id, onAddToCart }) => {
  const [error, setError] = useState(false);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const amount = amountInputRef.current.value;
    const amountInt = +amount;

    if (amount.trim().length === 0 || amountInt < 1 || amountInt > 5) {
      setError(true);
      return;
    }
    onAddToCart(amountInt);
  };

  const inputAttributes = {
    id: `amount-${id}`,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} label={"Amount"} input={inputAttributes} />
      <button>Add</button>
      {error && <p>Please enter a valid amount 1 - 5</p>}
    </form>
  );
};

export default MealItemForm;
