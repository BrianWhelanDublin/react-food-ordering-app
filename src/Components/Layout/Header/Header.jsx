import styles from "./Header.module.scss";
import mealsImage from "../../../assets/meals.jpeg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Table full of meals" />
      </div>
    </>
  );
};

export default Header;
