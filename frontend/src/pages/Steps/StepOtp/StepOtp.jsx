import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import Button from "../../../components/shared/Button/Button";
import TextInput from "../../../components/shared/TextInput/TextInput";
import styles from "./StepOtp.module.css";

const StepOtp = ({ onNext }) => {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (!otp) return;
    // OTP validation logic can go here
    onNext(); // Move to next step
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title="Enter the OTP" icon="lock">
        <TextInput
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <div className={styles.actionButtonWrap}>
          <Button onClick={handleVerify} text="Verify OTP" />
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
