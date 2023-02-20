import React from "react";
import "./styles.css";
import Card from "./component/Card";

let fruits = ["a", "b", "c"];

let person = {
  name:"Sanjeev Midda",
  location: "London"
}

function App() {

  return (
    <div className="app">
    <Card person = {person}/>

    <h1>{fruits.map(item => {
      return <button>{item}</button>
      })}</h1>
    </div>
  );
}

export default App;
