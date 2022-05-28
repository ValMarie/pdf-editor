import React from "react";
import Navigator from "./components/nav";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  return (
    <div className="App overflow-x">
      <Navigator />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
