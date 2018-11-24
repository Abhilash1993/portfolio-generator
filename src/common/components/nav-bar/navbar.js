import React from 'react';
import {connect} from 'react-redux';
import './navbar.less';
// import ACTION from '../common/action_constants';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "navbar-root">
        <div className = "navbar">
            <div className = "navbar-items"><Link to = "/">Home</Link></div>
            <div>
                <div className = "navbar-items"><Link to = "/generate">Generate Portfolio</Link></div>
                <div className = "navbar-items"><Link to = "/">About Us</Link></div>
                <div className = "navbar-items"><Link to = "/">Contact Us</Link></div>
            </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
  }
}

const mapStateToProps = state => {
  return {
    navbar: state.navbar
  };
};

export default connect(mapStateToProps)(NavBar);
