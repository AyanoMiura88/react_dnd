import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch as Routes } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import DropArea from "./DragAndDrop/DropArea";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact component={LoginPage} />
          <Route path="/MainPage" exact component={DropArea} />
          <Route component={LoginPage}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
