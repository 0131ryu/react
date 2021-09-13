import React from "react";
import PropsTypes from "prop-types";

//함수형 컴포넌트에서 props 사용
const MyComponent = ({ name, children, favoriteNumber }) => {
  //props 대신 ({name, children }) 사용
  // const { name, children } = props;
  return (
    <div>
      안녕하세요. 제 이름은 {name}입니다.
      <br />
      children의 값은 {children}입니다.
      <br />
      제가 가장 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propstypes = {
  name: PropsTypes.string,
  favoriteNumber: PropsTypes.number.isRequired,
};

export default MyComponent; //모듈 내보내기
