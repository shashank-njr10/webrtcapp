import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span className={styles.text}>{text}</span>
      <img
        src="/images/arrow_forward.png"
        alt="arrow"
        className={styles.arrow}
      />
    </button>
  );
};

export default Button;
