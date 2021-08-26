import React, { useState } from 'react';
import './App.css';
import photo1 from './images/spring.jpg';
import photo2 from './images/summer.jpg';
import photo3 from './images/autumn.jpg';
import photo4 from './images/winter.jpg';

function App() {

  let [title, titleChange] = useState(['서울 날씨', '부산 날씨', '인천 날씨']);
  
  let [weather, weatherChange] = useState(['맑음', '흐림', '비', '눈', '장마', '천둥번개'])
  let [star, starChange] = useState(0);

  let [season, seasonChange] = useState(['봄', '여름', '가을', '겨울']);
  let [heart, heartChange] = useState(0);
  let [heart2, heart2Change] = useState(0);
  let [heart3, heart3Change] = useState(0);
  let [heart4, heart4Change] = useState(0);

  let [pushTitle, pushTitleChange] = useState(0);
  let [pushWether, pushWetherChange] = useState(0);

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


  function Modal1(props) {
    return (
      <div className="modal1">
      <h3>제목 : { props.title[props.pushTitle] }</h3>
      <p>상세내용 : { props.weather[0] }</p>
      </div>
    )
  }

  let [modal1, modal1Change] = useState(false);

  function Today(props) {
    return (
      <div className="today">
        <h3>오늘의 날씨 : { props.weather[props.pushWether] } </h3>
      </div>
    )

  }

  let [today, todayChange] = useState(false);

  //예시
  var array = [2, 3, 4];
  var newArray = array.map(function(a) { //a : 파라미터, array의 모든 자료 하나씩 출력
    return a * 10;
  });

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
        <div className="weatherStandard">[ 날씨 기준 ]<span onClick={ () => {starChange(star + 1)}} >⭐</span>{star}
        <h4>날씨 정보 : </h4>
        {
          weather.map(function(a) {
            return (
              <div className="weather">
              <h4> { a }</h4>
              </div>
            )
          })
        }
        </div>
        <div>
        <button onClick={제목정렬} className="titleSort">제목 정렬하기</button>
        <button onClick={첫번째제목바꾸기} className="changeTitle1">첫번째 제목 바꾸기</button>
        <button onClick={두번째제목바꾸기} className="changeTitle2">두번째 제목 바꾸기</button>
        <button onClick={전체제목바꾸기} className="changeAllTitle">전체 제목 바꾸기</button>
        </div>
        <div>
        <button onClick={() => {todayChange(!today)}}>오늘의 날씨 열고닫기</button>
        <button onClick={() => {pushWetherChange(1)}}>날씨 변경하기1</button>
        <button onClick={() => {pushWetherChange(3)}}>날씨 변경하기2</button>
        {/* <button onClick={() => {todayChange(true)}}>오늘의 날씨 열기</button>
        <button onClick={() => {todayChange(false)}}>오늘의 날씨 닫기</button> */}
        </div>

        {
          today === true
          ? <Today weather={weather} pushWether={pushWether} />
          : null
        }
        
        {
          title.map(function(a, i){ //i가 숫자 하나씩 증가하게 함
            return (
              <div className="blogList">
              <h4 className="blogListTitle" onClick={() => {pushTitleChange(i)} }> { a } </h4>
              <p>1월 1일 발행</p>
              <hr/>
              </div>
            )
          })
        }
        
        
        <div>
        {/* <button onClick={() => {modal1Change(true)}}>Modal1 열기</button>
        <button onClick={() => {modal1Change(false)}}>Modal1 닫기</button> */}
        <button onClick={() => {modal1Change(!modal1)}}>Modal1 열고닫기</button>
        </div>
        {/* <button onClick={() => {pushTitleChange(0)}}>title1</button>
        <button onClick={() => {pushTitleChange(1)}}>title2</button>
        <button onClick={() => {pushTitleChange(2)}}>title3</button> */}
        {
          modal1 === true
          ? <Modal1 title={title} pushTitle={pushTitle} weather={weather}/>
          : null
        }
      

    </div>
    
  );
}

export default App;
