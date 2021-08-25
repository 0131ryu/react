/*eslint-disable*/ 

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  let fontStyle = {color: 'yellow', fontSize: '20px'}

  let [글제목, 글제목변경] =  useState(['남자 코트 추천2', '여자 코트 추천2', '아동 코트 추천']); 
  let [따봉, 따봉변경] = useState(0);
  let [코트, 코트변경] = useState(['여자코트 추천', '아동코트 추천']);

  function 제목바꾸기() {
    //글제목에 있던 0번째 데이터를 여자코트 추천으로 바꿈
    var newArray = [...글제목]; //reference data type
    newArray[0] = '여자코트추천';
    글제목변경 ( newArray );
    //글제목변경(['여자코트 추천', '블랙코트 추천', '브라운코트 추천']);
  }

  function 정렬하기() {
    var newArray2 = [...글제목];
    newArray2 = newArray2.sort();
    글제목변경 (newArray2);
    
  }

  function 오름차순() {
    const arr = [5, 10, 20];
    console.log(arr); 

    arr.sort((a, b) => a - b);
    console.log(arr); //[5, 20, 100]
  }

  function 내림차순() {
    const arr2 = [5, 10, 20];
    console.log(arr2);

    arr2.sort((a, b) => b - a) 
    console.log(arr2);
  }

  function 문자배열() {
    const arr3 = ['lemon', 'apple', 'orange'];
    console.log(arr3);

    arr.sort((a, b) => a.length - b.length);
    console.log(arr); //['apple', 'lemon', 'orange']
  }

  return (
    <div className="App">
        <div className="black-nav">
            <div style= { fontStyle }>개발 Blog</div>
        </div>
        <div className="list">
        <button onClick={ 제목바꾸기 }>바꾸기</button>
        <button onClick={ 정렬하기 }>정렬하기</button>
        <h4> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span>
         { 따봉 } </h4>
        <p>8월 25일 발행</p>
        <hr/>
        </div>
        <div className="list">
        <h4> { 글제목[1] } </h4>
        <p>2월 17일 발행</p>
        <hr/>
        </div>
        <div className="list">
        <h4> { 글제목[2] } </h4>
        <p>2월 19일 발행</p>
        <hr/>
        </div>
    </div>
  );
}

export default App;
