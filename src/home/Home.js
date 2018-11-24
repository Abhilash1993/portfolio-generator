import React from 'react';
import {connect} from 'react-redux';
import ACTION from '../common/action_constants';
import { Link } from 'react-router-dom';
import JsonView from '../common/components/JsonView';
import { push } from 'react-router-redux';
import NavBar from '../common/components/nav-bar/navbar';
import Carousel from "./carousel-component/carousel";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Carousel></Carousel>
      </div>
    );
  }
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({type:ACTION.HOME.GETHOME});
   //dispatch(push('/about')); //to navigate to a different route
  }
}

const mapStateToProps = state => {
  return {
    home: state.home
  };
};

export default connect(mapStateToProps)(Home);
