import React from 'react';
import {connect} from 'react-redux';
import ACTION from '../common/action_constants';
import { Link } from 'react-router-dom';
import JsonView from '../common/components/JsonView';
import { push } from 'react-router-redux';
import NavBar from '../common/components/nav-bar/navbar';
import Carousel from "./carousel-component/carousel";
import './carousel-component/carousel.less';
import scrollToComponent from 'react-scroll-to-component';
import Template from "./templates/template";
import Contact from "./contact-us/contact";
import {getCookie} from "../common/cookie";
import ModalPopup from '../common/components/modal-popup/modalPopup';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal : false,
      messageHead : "",
      messageBody : ""
    };
  }

  goToTemplate = (route) =>{
    const {dispatch} = this.props;
    //check for null route
    if(route != null){
      //check for cookie value : if exists, redirect
      let usn = getCookie('username');
      if(usn){
        const url = route + '?username=' + usn;
        dispatch(push(url));
      }
      else{
        dispatch(push("/generate"));
      }
    }
    else{
      this.toggleModal();
      this.setState({
        messageHead : "Premium Member?",
        messageBody : "Become a premium member and gain access to all the templates, just by paying $5 per month"
      });
    }
  }


  toggleModal = () =>{
    console.log("COMING SOON! NEED PREMIUM MEMBERSHIP");
    let modaltemp = !this.state.modal;
    this.setState({
      modal : modaltemp
    });
  }

  render() {
    return (
      <div>
        <NavBar scrollToPosition = {this.scrollToPosition}></NavBar>
        <Carousel></Carousel>
        <Template goToTemplate = {this.goToTemplate}></Template>
        {
          this.state.modal && <ModalPopup toggleModal = {this.toggleModal} header = {this.state.messageHead} body = {this.state.messageBody}/>
        }
        <Contact></Contact>
      </div>
    );
  }
  componentDidMount() {
    const {dispatch} = this.props;
    // dispatch({type:ACTION.HOME.GETHOME});
    dispatch({type : ACTION.HOME.GETHOME, data : null});
   //dispatch(push('/about')); //to navigate to a different route
  }
}

const mapStateToProps = state => {
  return {
    home: state.home
  };
};

export default connect(mapStateToProps)(Home);
