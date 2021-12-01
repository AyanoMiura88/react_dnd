import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PrimaryButton from "./LoginBtn";
import LoginText from "./LoginText";
import VpnkeyIcon from "@material-ui/icons/VpnKey";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleOnClick = () => {
    if (username === "test" && password === "sample") {
      history.push("/MainPage");
    }
  };
  return (
    <div style={{ marginTop: 100 }}>
      {/* <VpnkeyIcon /> */}
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
      <PrimaryButton onClick={handleOnClick} />
    </div>
  );
};

export default LoginPage;
