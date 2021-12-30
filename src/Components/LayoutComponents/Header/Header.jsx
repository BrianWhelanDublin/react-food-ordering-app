import styles from "./Header.module.scss";
import mealsImage from "../../../assets/meals.jpeg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Table full of meals" />
      </div>
    </>
  );
};

export default Header;
