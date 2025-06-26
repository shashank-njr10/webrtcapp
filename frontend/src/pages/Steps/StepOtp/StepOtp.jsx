import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";
import TextInput from "../../../components/shared/TextInput/TextInput";
import styles from "./StepOtp.module.css";
import { verifyOtp } from "../../../http";
import {useSelector} from 'react-redux';
import {setAuth} from '../../../store/authSlice';
import{useDispatch} from 'react-redux'


const StepOtp = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const {phone, hash} = useSelector((state) => state.auth.otp);


  async function submit() {
    try {
     const {data} = await verifyOtp({otp, phone, hash});
     //console.log(data);
     dispatch(setAuth(data));
    }catch(err) {
      console.log(err);
    }
    
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Enter the OTP" icon="lock">
        <TextInput
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <div className={styles.actionButtonWrap}>
          <Button onClick={submit} text="Verify OTP" />
        </div>
        <p className={styles.bottomParagraph}>
          By clicking Next, you agree to our Terms of Service and Privacy Policy.
          We will send you a verification code to this number.
        </p>
      </Card>
    </div>
  );
};

export default StepOtp;
