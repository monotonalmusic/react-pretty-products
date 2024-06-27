import styles from "./button.module.css";

const Button = ({ name, className, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {name}
    </button>
  );
};

export default Button;
