import styles from "./AvailableMeals.module.scss";
import { DUMMY_MEALS } from "../../../Data/Meals";

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
