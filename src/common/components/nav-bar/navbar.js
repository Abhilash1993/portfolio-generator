import React from 'react';
import {connect} from 'react-redux';
import './navbar.less';
// import ACTION from '../common/action_constants';
import { Link } from 'react-router-dom';
import $ from 'jquery'; 

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }


  navbarCollapse = ()=> {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  render() {
    return (
    //   <div className = "navbar-root">
    //     <div className = "navbar">
    //         <div className = "navbar-items"><Link to = "/">Home</Link></div>
    //         <div>
    //             <div className = "navbar-items" onClick = {() => this.props.scrollToPosition("GeneratePF")}><Link to = "/">Generate Portfolio</Link></div>
    //             <div className = "navbar-items" onClick = {() => this.props.scrollToPosition("About")}><Link to = "/">About Us</Link></div>
    //             <div className = "navbar-items" onClick = {() => this.props.scrollToPosition("Contact")}><Link to = "/">Contact Us</Link></div>
    //         </div>
    //     </div>
    //   </div>

    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Portfolio Generator</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" onClick = {this.props.newTemplate}>New</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Templates</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
  componentDidMount() {
      // Collapse now if page is not at top
      this.navbarCollapse();
      // Collapse the navbar when page is scrolled
    //   $(window).scroll(this.navbarCollapse());

      window.addEventListener('scroll', () => {
        this.navbarCollapse();
      });

  }
  componentWillUnmount() {
     window.removeEventListener('scroll', ()=>{this.navbarCollapse();});
  }
}

const mapStateToProps = state => {
  return {
    navbar: state.navbar
  };
};

export default connect(mapStateToProps)(NavBar);
