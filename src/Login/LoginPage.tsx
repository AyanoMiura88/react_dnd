import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./LoginBtn";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submit = () => {
    if (username === "test" && password === "sample") {
      history.push("/MainPage");
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <p>username</p>
        <input type="text" placeholder="test" value={username} onChange={(e) => setUsername(e.target.value)} />
        <p>password</p>
        <input type="text" placeholder="sample" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div>
          <Button
            border="none"
            color="gray"
            height="20px"
            radius="10%"
            width="100px"
            children="LOGIN"
          />
        </div>
      </form>
    </div>
  );
 }

export default LoginPage;