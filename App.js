import React from "react";
import "./App.css";
import MyCompo2 from "./MyComp2";
import MyComponent from "./MyComponent.js";
import Counter from "./Counter.js";
import Counter2 from "./Counter2.js";
import Say from "./Say.js";
import EventPractice from "./EventPractice";
import EventPractice2 from "./EventPractice2";

const App = () => {
  return (
    <div>
      <MyComponent name="react" favoriteNumber={1}>
        리액트
      </MyComponent>
      <br />
      <MyCompo2 name2="react2" favoriteNumber2={2}>
        리액트 2
      </MyCompo2>
      <br />
      <Counter />
      <br />
      <Counter2 />
      <br />
      <Say />
      <br />
      <EventPractice />
      <br />
      <EventPractice2 />
    </div>
  );
};

export default App;
