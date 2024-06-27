import { useState, useRef, useEffect } from "react";
import styles from "./newsLetter.module.css";
import Button from "../button/Button";
import Modal from "../modal/Modal";

const NewsLetter = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const dialog = useRef();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dialog.current.showModal();
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <section className={styles.newsletterSection}>
      <Modal ref={dialog} email={inputValue} />
      <h1>NEWSLETTER</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.emailLabel}>Email: </label>
        <input
          required
          ref={inputRef}
          type="email"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <Button type="submit" name="Sign up" />
      </form>
    </section>
  );
};

export default NewsLetter;
