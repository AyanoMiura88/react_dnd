import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryBtn";
import LoginText from "./LoginText";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleOnClick = () => {
    if (username === "test" && password === "sample") {
      history.push("/TopPage");
    }
  };
  return (
    <div style={{ marginTop: 100 }}>
      <LoginText
        id="1"
        placeholder={"test"}
        label="userName"
        variant="outlined"
        margin="dense"
        onChange={(e) => setUsername(e.target.value)}
      />
      <LoginText
        id="2"
        placeholder={"sample"}
        label="password"
        variant="outlined"
        margin="dense"
        onChange={(e) => setPassword(e.target.value)}
      />
      <PrimaryButton onClick={handleOnClick}>LOGIN</PrimaryButton>
    </div>
  );
};

export default LoginPage;
