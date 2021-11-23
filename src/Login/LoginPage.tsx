import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PrimaryButton from "./LoginBtn";

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
    <div>
        <p>username</p>
        <input
          type="text"
          placeholder="test"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>password</p>
        <input
          type="text"
          placeholder="sample"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <PrimaryButton onClick={handleOnClick} />
        </div>
    </div>
  );
};

export default LoginPage;
