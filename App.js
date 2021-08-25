import React, { useState } from 'react';
import './App.css';
import photo1 from './images/spring.jpg';
import photo2 from './images/summer.jpg';
import photo3 from './images/autumn.jpg';
import photo4 from './images/winter.jpg';

function App() {

  let [title, titleChange] = useState(['서울 날씨', '부산 날씨', '인천 날씨']);
  let [season, seasonChange] = useState(['봄', '여름', '가을', '겨울']);
  let [heart, heartChange] = useState(0);
  let [heart2, heart2Change] = useState(0);
  let [heart3, heart3Change] = useState(0);
  let [heart4, heart4Change] = useState(0);

  function 제목정렬() {
    var newTitle = [...title];
    newTitle = newTitle.sort();
    titleChange (newTitle);
  }

  function 첫번째제목바꾸기() {
    var changeTitle1 = [...title];
    changeTitle1[0] = '강원도 날씨';
    titleChange(changeTitle1);
  }
  function 두번째제목바꾸기() {
    var changeTitle2 = [...title];
    changeTitle2[1] = '대전 날씨';
    titleChange (changeTitle2);
  }
  function 전체제목바꾸기() {
    var changeTitle = [...title];
    changeTitle = (['대구 날씨', '대전 날씨', '광주 날씨']);
    titleChange (changeTitle);
  }

  return (
    <div className="App">
        <div className="navbar">
            <div>React 개발블로그</div>
        </div>
        <div className="imgArr">
          <img className="spring" src={photo1} />
          <img className="summer" src={photo2} />
          <img className="autumn" src={photo3} />
          <img className="winter" src={photo4} />
        </div>
        <div className="season">
        <h4 className="springName">{season[0]} <span onClick={ () => {heartChange(heart + 1)}} >💕</span>{heart}</h4>
        <h4 className="summerName">{season[1]} <span onClick={ () => {heart2Change(heart2 + 1)}} >💕</span>{heart2}</h4>
        <h4 className="autumnName">{season[2]} <span onClick={ () => {heart3Change(heart3 + 1)}} >💕</span>{heart3}</h4>
        <h4 className="winterName">{season[3]}<span onClick={ () => {heart4Change(heart4 + 1)}} >💕</span>{heart4}</h4>
        </div>
        <button onClick={제목정렬} className="titleSort">제목 정렬하기</button>
        <button onClick={첫번째제목바꾸기} className="changeTitle1">첫번째 제목 바꾸기</button>
        <button onClick={두번째제목바꾸기} className="changeTitle2">두번째 제목 바꾸기</button>
        <button onClick={전체제목바꾸기} className="changeAllTitle">전체 제목 바꾸기</button>
        <div className="blogList">
        <h4> { title[0] } </h4>
        <p>1월 1일 발행</p>
        <hr/>
        </div>
        <div className="blogList">
        <h4> { title[1] } </h4>
        <p>2월 2일 발행</p>
        <hr/>
        </div>
        <div className="blogList">
        <h4> { title[2] } </h4>
        <p>3월 3일 발행</p>
        <hr/>
        </div>
    </div>
  );
}

export default App;
