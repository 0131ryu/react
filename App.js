import React from "react";
import "./App.css";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <MyComponent name="리액트" favoriteNumber={1}>
      리액트
    </MyComponent>
  );
};

export default App;
