import styles from "./Button.module.css";

function Button({ children, type, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[type]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
