import React, { useState } from "react";

const IterationSample2 = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람2" },
    { id: 2, text: "얼음2" },
    { id: 3, text: "눈2" },
    { id: 4, text: "바람2" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목 추가 시 사용할 id

  //데이터 추가 기능 구현
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값에 1을 더함
    setNames(nextNames); //names값을 업데이트 함
    setInputText(""); //inputText를 비움
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </>
  );
};

export default IterationSample2;
