import styles from "./AvailableMeals.module.scss";
import { DUMMY_MEALS } from "../../../Data/Meals";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              id={meal.id}
              title={meal.name}
              description={meal.description}
              price={meal.price}
              key={meal.id}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
