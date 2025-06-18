import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const navigate = useNavigate();

  const startRegister = () => {
    navigate('/authenticate');
    console.log("Button Clicked");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to WebRTC Application" icon="logo">
        <p className={styles.text}>
          This is a simple WebRTC application that allows you to create and join
          video calls. You can create a room and share the room ID with others to
          join the call. The application uses WebRTC for real-time communication
          and Socket.IO for signaling.
        </p>
        <div>
          <Button onClick={startRegister} text="Lets Go" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.invite}>Have an invite text?</span>
          <Link
            to="/login"
            style={{
              color: "#0077ff",
              fontWeight: "bold",
              textDecoration: "none",
              marginLeft: "10px",
            }}
          >
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
