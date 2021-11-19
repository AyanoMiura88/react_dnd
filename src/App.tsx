import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import DropArea from './DragAndDrop/DropArea';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LoginPage} />
        <Route path="/MainPage" exact  component={DropArea} />
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
