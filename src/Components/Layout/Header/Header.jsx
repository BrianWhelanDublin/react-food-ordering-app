import styles from "./Header.module.scss";
import mealsImage from "../../../assets/meals.jpeg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Table full of meals" />
      </div>
    </>
  );
};

export default Header;
