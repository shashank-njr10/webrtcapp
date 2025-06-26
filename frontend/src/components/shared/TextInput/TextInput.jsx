import React from 'react'
import styles from './TextInput.module.css'
const TextInput = ({value,onChange}) => {
  return (
    <div>
      <input className = {styles.input} value = {value} onChange = {onChange} />
    </div>
  )
}

export default TextInput
