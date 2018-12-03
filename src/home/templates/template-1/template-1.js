import React from 'react';
import {connect} from 'react-redux';
import './template-1.less';
import ACTION from '../../../common/action_constants';
import { Link } from 'react-router-dom';
import profileImage from '../../../../assets/images/profile-placeholder.png';

class Template1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    const user = this.props.home.user[0];
    return (
    <div className = "template-1-root">
        <div className = "content-holder">
            <div className = "bio-root">
                <div className = "bio-holder">
                    <div className = "profile-img">
                        <img src ={profileImage}/>
                    </div>
                    {
                        (user) && <div className = "bio">
                                            <div className="name">{user.about.name}<span> </span>{this.props.home.user[0].about.surname}</div>
                                            <div>{user.about.email}</div>
                                            <div>{user.about.phone}</div>
                                            <div>{user.about.headline}</div>
                                        </div>
                    }
                </div>

                <div className = "skillset">
                    <h5 className = "skill-head">SKILLS</h5>
                    {
                        user && user.skills.map((skill) => {
                            return (
                                <div>{skill}</div>
                            );
                        })
                    }
                </div>
            </div>

                <h5 className = "header">EDUCATION</h5>
                <div className = "sub-content-holder">
                {
                        user &&  user.education.map((eduData) => {
                            return(
                                <div className = "sub-content">
                                    <div>{eduData.degree}</div>
                                    <div>{eduData.name}</div>
                                    <div>{eduData.location}</div>
                                    <div>{eduData.startDate} - {eduData.endDate}</div>
                                </div>
                            );
                    })
                }

                </div>

                <h5 className = "header">EXPERIENCE</h5>
                <div className = "sub-content-holder">
                {
                    user && user.professional_exp.map((exp) => {
                        return(    
                            <div className = "sub-content">
                                <div>{exp.company}</div>
                                <div>{exp.location}</div>
                                <div>{exp.role}</div>
                                <div>{exp.startDate} - {exp.endDate}</div>
                            </div>
                        );
                    })
                }
                </div>

                <h5 className = "header">PROJECTS</h5>
                <div className = "sub-content-holder">
                {
                    user && user.projects.map((project) => {
                        return(
                            <div className = "sub-content full-content">
                                <div>{project.title}</div>
                                <div>{project.details}</div>
                                <div>{project.date}</div>
                            </div>
                        );
                    })
                }
                </div>
        </div>
    </div>
    );
  }
  componentDidMount() {
    const {dispatch} = this.props;
    const userName = (new URL(window.location.href)).searchParams.get('username');
    dispatch({type : ACTION.HOME.GETHOME, data : userName});
  }
}

const mapStateToProps = state => {
    return {
        home : state.home
    };
};

export default connect(mapStateToProps)(Template1);
