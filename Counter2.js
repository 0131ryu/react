import React, { Component } from "react";

class Counter2 extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; //state 조회 시 this.state로 조회
    return (
      <div>
        <h1>변하는 값 :{number}</h1>
        <h2>처음 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            //this.setState를 이용해 state에 새로운 값 넣을 수 있게 함
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            //위 코드와 아래 코드는 완전히 똑같은 기능
            //아래 코드는 함수에서 바로 객체 반환
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          호출여부
        </button>
      </div>
    );
  }
}

export default Counter2;
