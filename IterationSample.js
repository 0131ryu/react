import React from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>); //index를 key로서 이용(콜백함수의 인수인 index)
  return <ul>{nameList}</ul>;
};

export default IterationSample;
