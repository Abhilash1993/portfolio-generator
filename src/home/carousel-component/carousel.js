import React from 'react';
import {connect} from 'react-redux';
import './carousel.less';
// import ACTION from '../common/action_constants';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        imageCount : 1,
        servicesData : [
            {
                heading : "Sturdy Templates",
                description : "Our templates are updated regularly so they don't break.",
                className : "fas fa-4x fa-gem text-primary mb-3 sr-icon-1"
            },
            {
                heading : "Ready to Ship",
                description : "You can use this theme as is, or you can make changes!",
                className : "fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2"
            },
            {
                heading : "Up to Date",
                description : "We update dependencies to keep things fresh.",
                className : "fas fa-4x fa-code text-primary mb-3 sr-icon-3"
            },
            {
                heading : "Made with Love",
                description : "You have to make your websites with love these days!",
                className : "fas fa-4x fa-heart text-primary mb-3 sr-icon-4"
            }
        ]
    };
  }

  

  render() {
      const self = this;
    return (
    <div>
        <header className="masthead text-center text-white d-flex">
        <div className="container my-auto">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h1 className="text-uppercase">
                    <strong>Your Favorite Source for making Online Portfolios</strong>
                    </h1> 
                    <hr></hr>
                </div>
                <div className="col-lg-8 mx-auto">
                    <p className="text-faded mb-5">Portfolio Generator can help you build better online Portfolios using the Ready Made Templates! Online Portflio is just one click away, no strings attached!</p>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                </div>
            </div>
        </div>
        </header>

        <section className="bg-primary" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="section-heading text-white">We have got what you need!</h2>
                        <hr className="light my-4"></hr>
                        <p className="text-faded mb-4">Portfolio Generator has everything you need to get your new Online Resume up and running in no time! All of the templates and themes are ready to be used, Start now!, and easy to use. No strings attached!</p>
                        <a className="btn btn-light btn-xl js-scroll-trigger"  onClick = {()=> self.props.dispatch(push('/generate'))}>Get Started!</a>
                    </div>
                </div>
            </div>
        </section>


        <section id="services">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading">At Your Service</h2>
                <hr className="my-4"></hr>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
            {
                this.state.servicesData.map((service,index) =>{
                    return (

                        <div key = {index} className="col-lg-3 col-md-6 text-center">
                            <div className="service-box mt-5 mx-auto">
                                <i className={service.className}></i>
                                <h3 className="mb-3">{service.heading}</h3>
                                <p className="text-muted mb-0">{service.description}</p>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        </div>
        </section>
    </div>
    );
  }
  componentDidMount() {
    }
}


export default Carousel;
