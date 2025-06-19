import React from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'
const Phone = ({onNext}) => {
    const [phoneNumber, setPhoneNumber] = React.useState('');
  return (
    <Card title="Enter your mobile number" icon="phone">
        <TextInput value = {phoneNumber} onChange = {(e) => setPhoneNumber(e.target.value)}/>
        <div>
          <Button text="Next" onClick = {onNext}/>
        </div>

        <p className = {styles.bottomParagraph}>
            By clicking Next, you agree to our Terms of Service and Privacy Policy.
            We will send you a verification code to this number.
        </p>
       
        
      </Card>
  )
}

export default Phone
