import { forwardRef } from "react";
import styles from "./modal.module.css";

const Modal = forwardRef(function Modal({ email }, ref) {
  return (
    <dialog ref={ref} className={styles.dialog}>
      <h1>Thank you for signing up!</h1>
      <p className={styles.message}>
        We are excited to have you on board. Please check your email {email}
        for further instructions.
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Modal;
