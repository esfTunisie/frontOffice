import React, { Component } from "react";
import { connect } from "react-redux";

import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navabar';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
      return (
        <>
        <div className="index-page">
          <Navbar />
            <div className="wrapper">
              <Header />
                <div className="main">
                  
                </div>
            </div>
        </div>
        </>
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