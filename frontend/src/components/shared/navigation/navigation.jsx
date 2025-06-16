import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

export default function Navigation() {
  const brandStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
  };
  const logoText = {
    marginLeft: '10px',
  }

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        <img 
          src="/images/logo.png" 
          alt="logo" 
          style={{ width: '30px', height: '30px' }} 
        />
        <span style = {logoText}>WebRTC</span>
      </Link>
    </nav>
  );
}
