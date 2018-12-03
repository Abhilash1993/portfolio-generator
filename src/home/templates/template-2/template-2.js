import React from 'react';
import {connect} from 'react-redux';
import './template-2.less';
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

  

  render() {
    return (
    <div id = "template2-root" className = "template-2-root">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Rahul Deshpande</span>
                <span className="d-none d-lg-block">
                <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImage} alt=""/>
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item" onClick = {() => scrollToComponent(this.about, { offset: 0, align: 'top', duration: 1500})}>
                    <span className="nav-link js-scroll-trigger">About</span>
                </li>
                <li className="nav-item" onClick = {() => scrollToComponent(this.experience, { offset: 0, align: 'top', duration: 1500})}>
                    <span className="nav-link js-scroll-trigger">Experience</span>
                </li>
                <li className="nav-item" onClick = {() => scrollToComponent(this.education, { offset: 0, align: 'top', duration: 1500})}>
                    <span className="nav-link js-scroll-trigger">Education</span>
                </li>
                <li className="nav-item" onClick = {() => scrollToComponent(this.skills, { offset: 0, align: 'top', duration: 1500})}>
                    <span className="nav-link js-scroll-trigger" >Skills</span>
                </li>
                <li className="nav-item" onClick = {() => scrollToComponent(this.interests, { offset: 0, align: 'top', duration: 1500})}>
                    <span className="nav-link js-scroll-trigger">Interests</span>
                </li>
                <li className="nav-item" onClick = {() => scrollToComponent(this.awards, { offset: 0, align: 'top', duration: 1500})}>
                    <span className="nav-link js-scroll-trigger">Awards</span>
                </li>
                </ul>
            </div>
        </nav>

    <div className="container-fluid p-0">

      <section className="resume-section p-3 p-lg-5 d-flex d-column" ref={(section) => { this.about = section; }} id="about">
        <div className="my-auto">
          <h1 className="mb-0 header1"> Deshpande
            <span className="text-primary"> Rahul</span>
          </h1>
          <div className="subheading mb-5">3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
            <a href="mailto:name@email.com">name@email.com</a>
          </div>
          <p className="lead mb-5">I am experienced in building scalable web apps and agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
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
      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" ref={(section) => { this.experience = section; }} id="experience">
        <div className="my-auto">
          <h2 className="mb-5 header2">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0 header3">Full Stack Developer</h3>
              <div className="subheading mb-3">Robotic Solutions</div>
              <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2016 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0 header3">Web Developer</h3>
              <div className="subheading mb-3">Tesco</div>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2011 - March 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Junior Web Designer</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2010 - December 2011</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0 header3">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div>

        </div>

      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" ref={(section) => { this.education = section; }} id="education">
        <div className="my-auto">
          <h2 className="mb-5 header2">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0 header3">University of Cincinnati</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2006 - May 2010</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0 header3">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div>

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

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams</li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum</li>
          </ul>
        </div>
      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" ref={(section) => { this.interests = section; }} id="interests">
        <div className="my-auto">
          <h2 className="mb-5 header2">Interests</h2>
          <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
          <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
        </div>
      </section>

      <hr className="m-0"></hr>

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" ref={(section) => { this.awards = section; }} id="awards">
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
      </section>

    </div>
    </div>
    );
  }
  componentDidMount() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    // $('.template-2-root').scrollspy({
    //   target: '#sideNav'
    // });
  }
}


export default Template2;
