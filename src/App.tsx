import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch as Routes } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import TopPage from "./Top/TopPage";
import DropArea from "./DragAndDrop/DropArea";
import Table from "./Table/TablePage";
import { Header } from "./DefaultParts/Header";
import { Footer } from "./DefaultParts/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{}}>
        <Header />
        <Routes>
          <Route path="/" exact component={LoginPage} />
          <Route path="/TopPage" exact component={TopPage} />
          <Route path="/DndPage" exact component={DropArea} />
          <Route path="/TablePage" exact component={Table} />
          <Route component={LoginPage} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
