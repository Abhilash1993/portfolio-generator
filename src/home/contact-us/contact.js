import React from 'react';
import {connect} from 'react-redux';
import './contact.less';
// import ACTION from '../common/action_constants';
import { Link } from 'react-router-dom';
import FirstImg from '../../../assets/images/thumbnails/1.jpg';
import SecondImg from '../../../assets/images/thumbnails/2.jpg';
import ThirdImg from '../../../assets/images/thumbnails/3.jpg';
import FourthImg from '../../../assets/images/thumbnails/4.jpg';
import fifthImg from '../../../assets/images/thumbnails/5.jpg';
import sixthImg from '../../../assets/images/thumbnails/6.jpg';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
        <section id="contact">
            <div className="container">
                <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <h2 className="section-heading">Let's Get In Touch!</h2>
                    <hr className="my-4"></hr>
                    <p className="mb-5">Have any questions? No problem! Give us a call or send us an email and we will get back to you as soon as possible!</p>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 ml-auto text-center">
                    <i className="fas fa-phone fa-3x mb-3 sr-contact-1"></i>
                    <p>123-456-6789</p>
                </div>
                <div className="col-lg-4 mr-auto text-center">
                    <i className="fas fa-envelope fa-3x mb-3 sr-contact-2"></i>
                    <p>
                    <a href="mailto:your-email@your-domain.com">support-portfolio@gmail.com</a>
                    </p>
                </div>
                </div>
            </div>
    </section>
    </div>
    );
  }
  componentDidMount() {
  }
}


export default Contact;
