import React, { Component } from "react";
import { connect } from "react-redux";

import Header from '../../Components/Header/Header';
import MenuNav from "../../Components/Menu/Menu";
import Navbar from '../../Components/Navbar/Navabar';
import Content from '../../Components/Content/Content';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>

        <Navbar />
        <MenuNav />
        <Header />
        <Content />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);