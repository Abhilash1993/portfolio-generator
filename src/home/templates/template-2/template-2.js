import React from 'react';
import {connect} from 'react-redux';
import './template-2.less';
import ACTION from '../../../common/action_constants';
// import ACTION from '../common/action_constants';
import { Link } from 'react-router-dom';
import $ from 'jquery'; 
import profileImage from '../../../../assets/images/profile-placeholder.png';
import scrollToComponent from 'react-scroll-to-component';

class Template2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  scrollSpy = () =>{
      "use strict"; // Start of use strict
      console.log('scroll');
      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      });
  }  

  render() {
    const user = this.props.home.user[0];
    return (
    <div id = "template2-root" className = "template-2-root">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
               {
                (user) &&  <span className="d-block d-lg-none"> {user.about.name} {user.about.surname}</span>
               }
                <span className="d-none d-lg-block">
                <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImage} alt=""/>
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className={"nav-item"} onClick = {() => scrollToComponent(this.about, { offset: 0, align: 'top', duration: 1000})}>
                    <span className="nav-link js-scroll-trigger">About</span>
                </li>
                <li className="nav-item" onClick = {() => scrollToComponent(this.experience, { offset: 0, align: 'top', duration: 1000})}>
                    <span className="nav-link js-scroll-trigger">Experience</span>
                </li>
                <li className="nav-item" onClick = {() => scrollToComponent(this.projects, { offset: 0, align: 'top', duration: 1000})}>
                    <span className="nav-link js-scroll-trigger">Projects</span>
                </li>
                <li className="nav-item" onClick = {() => scrollToComponent(this.education, { offset: 0, align: 'top', duration: 1000})}>
                    <span className="nav-link js-scroll-trigger">Education</span>
                </li>
                <li className="nav-item" onClick = {() => scrollToComponent(this.skills, { offset: 0, align: 'top', duration: 1000})}>
                    <span className="nav-link js-scroll-trigger" >Skills</span>
                </li>
                <li className="nav-item" onClick = {() => scrollToComponent(this.interests, { offset: 0, align: 'top', duration: 1000})}>
                    <span className="nav-link js-scroll-trigger">Interests</span>
                </li>
                {/* <li className="nav-item" onClick = {() => scrollToComponent(this.awards, { offset: 0, align: 'top', duration: 1000})}>
                    <span className="nav-link js-scroll-trigger">Awards</span>
                </li> */}
                </ul>
            </div>
        </nav>

    <div className="container-fluid p-0" id = "holder">

      <section className="resume-section p-3 p-lg-5 d-flex d-column" ref={(section) => { this.about = section; }} id="about">
        {
          (user) &&
          <div className="my-auto">
            <h1 className="mb-0 header1">  {user.about.surname}
              <span className="text-primary">{user.about.name}</span>
            </h1>
            <div className="subheading mb-5"> {user.about.phone} · {user.about.address} · 
            <br></br>
              <a href="mailto:name@email.com">{user.about.email}</a>
            </div>
            <p className="lead mb-5">{user.about.interests}</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
      }
      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" ref={(section) => { this.experience = section; }} id="experience">
        <div className="my-auto">
          <h2 className="mb-5 header2">Experience</h2>
          {
            (user) && user.professional_exp.map((exp,index) =>{
              return (
                <div  key = {index} className="resume-item d-flex flex-column flex-md-row mb-5">
                  <div className="resume-content mr-auto">
                    <h3 className="mb-0 header3">{exp.company}</h3>
                    <div className="subheading mb-3">{exp.role}</div>
                    <p>{exp.location}</p>
                    <p>{exp.details}</p>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">{exp.startDate} - {exp.endDate}</span>
                  </div>
                </div>
              );
            })
          }
        </div>

      </section>

      <hr></hr>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" ref={(section) => { this.projects = section; }} id="projects">
        <div className="my-auto">
          <h2 className="mb-5 header2">Projects</h2>
          {
            (user) && user.projects.map((project,index) =>{
              return (
                <div key = {index} className="resume-item d-flex flex-column flex-md-row mb-5">
                  <div className="resume-content mr-auto">
                    <h3 className="mb-0 header3">{project.title}</h3>
                    <p>{project.details}</p>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">{project.date}</span>
                  </div>
                </div>
              );
            })
          }

        </div>
      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" ref={(section) => { this.education = section; }} id="education">
        <div className="my-auto">
          <h2 className="mb-5 header2">Education</h2>
          {
            (user) && user.education.map((edu,index) =>{
              return (
                <div key = {index} className="resume-item d-flex flex-column flex-md-row mb-5">
                  <div className="resume-content mr-auto">
                    <h3 className="mb-0 header3">{edu.name}, {edu.location}</h3>
                    <div className="subheading mb-3">{edu.degree}</div>
                    <div>{edu.major}</div>
                    <p>{edu.GPA}</p>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">{edu.startDate} - {edu.endDate}</span>
                  </div>
                </div>
              );
            })
          }

        </div>
      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" ref={(section) => { this.skills = section; }} id="skills">
        <div className="my-auto">
          <h2 className="mb-5 header2">Skills</h2>

          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3"></div>
          <ul className="fa-ul mb-0">
            {
              (user) && user.skills.map((skill,index) =>{
                return (
                  <li  key = {index}>
                      <i className="fa-li fa fa-check"></i>
                      {skill}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" ref={(section) => { this.interests = section; }} id="interests">
        <div className="my-auto">
          <h2 className="mb-5 header2">Interests</h2>
          <p>{ (user) && user.more}</p>
          <p className="mb-0"></p>
        </div>
      </section>

      <hr className="m-0"></hr>

      {/* <section className="resume-section p-3 p-lg-5 d-flex flex-column" ref={(section) => { this.awards = section; }} id="awards">
        <div className="my-auto">
          <h2 className="mb-5 header2">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup>
              Place - University of Cincinnati - Emerging Tech Competition 2009</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup>
              Place - University of Cincinnati - Adobe Creative Jam 2008 (UI Design Category)</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              2<sup>nd</sup>
              Place - University of Cincinnati - Emerging Tech Competition 2008</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006</li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005</li>
          </ul>
        </div>
      </section> */}

    </div>
    </div>
    );
  }
  componentDidMount() {
    window.scroll(0,0);
    window.onLoad = () =>{
      window.addEventListener('scroll',() => {this.scrollSpy;});
    };
    const {dispatch} = this.props;
    const userName = (new URL(window.location.href)).searchParams.get('username');
    dispatch({type : ACTION.HOME.GETHOME, data : userName});


  }
  componentWillUnmount() {
    window.removeEventListener('scroll', ()=>{});
  }
}

const mapStateToProps = state => {
  return {
    home : state.home
  };
};


export default connect (mapStateToProps) (Template2);
