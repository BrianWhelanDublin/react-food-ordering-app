import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Backdrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portal = document.getElementById("overlays");

const Modal = ({ onClick, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portal)}
    </>
  );
};

export default Modal;
