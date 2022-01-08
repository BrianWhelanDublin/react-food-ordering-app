import styles from "./AvailableMeals.module.scss";

import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    setLoading(true);
    const getMeals = async () => {
      const response = await fetch(process.env.REACT_APP_DATABASE_URL_MEALS);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const mealData = await response.json();
      const meals = [];
      for (const key in mealData) {
        meals.push({
          id: key,
          name: mealData[key].name,
          description: mealData[key].description,
          price: mealData[key].price,
        });
      }

      setMeals(meals);
      setLoading(false);
    };
    getMeals().catch((error) => {
      setLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (loading) {
    return (
      <section className={styles.loading}>
        <p>Loading ...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.error}>
        <p>{httpError}</p>
      </section>
    );
  }
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
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
