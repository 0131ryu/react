import React, { useState } from "react";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Info from "./Info";
import Info2 from "./Info2";
import Average from "./Average";
import Average2 from "./Average2";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Counter />
      <Counter2 />
      <Info2 />
      <Average />
      <Average2 />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
