import React from 'react'
import styles from './Button.module.css'

const Button = ({ text , onClick }) => {
  return (
    <button onClick = {onClick} className={styles.button} style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ marginBottom: "2px" }}>{text}</span>
      <img
        src="/images/arrow_forward.png"
        alt="arrow"
        style={{ width: "20px", height: "20px", marginLeft: "10px", marginTop: "2px" }}
      />
    </button>
  );
};


export default Button
