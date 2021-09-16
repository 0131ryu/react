import React, { Component } from "react";
import "./App.css";
import MyCompo2 from "./MyComp2";
import MyComponent from "./MyComponent.js";
import Counter from "./Counter.js";
import Counter2 from "./Counter2.js";
import Say from "./Say.js";
import EventPractice from "./EventPractice";
import EventPractice2 from "./EventPractice2";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import IterationSample2 from "./IterationSample2";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

//랜덤 색상을 생성합니다.
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
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
        <br />
        <ValidationSample />
        <br />
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <br />
        <IterationSample />
        <IterationSample2 />
        <br />
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
