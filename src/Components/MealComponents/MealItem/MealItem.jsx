import MealItemForm from "../MealItemForm/MealItemForm";
import styles from "./MealItem.module.scss";

const MealItem = ({ id, title, description, price }) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{title}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>€ {price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
