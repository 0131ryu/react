import React, { Component } from "react";
import PropTypes from "prop-types";

class MyCompo2 extends Component {
  render() {
    const { name2, children2, favoriteNumber2 } = this.props; //비구조화 할당
    return (
      <div>
        안녕안녕안녕 내 이름은 {name2}이다. <br />
        children은 {children2}이다.
        <br />
        내가 좋아하는 숫자는 {favoriteNumber2}이다.
      </div>
    );
  }
}

MyCompo2.defaultProps = {
  name2: "기본이름2",
};

MyCompo2.propTypes = {
  name2: PropTypes.string,
  favoriteNumber2: PropTypes.number.isRequired,
};

export default MyCompo2;
