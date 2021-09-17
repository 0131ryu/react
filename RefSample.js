import React, { useRef } from "react";

//렌더링과 관련되지 않은 값을 관리할 때만 이러한 방식 사용할 것
const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>refSample</div>;
};

export default RefSample;
