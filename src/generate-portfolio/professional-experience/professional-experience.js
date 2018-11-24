import React, { Component } from 'react';
import './professional-experience.less';
import Progressbar from "../../common/components/progressbar/progressbar";

class ProfessionalExperience extends Component {
    render() {
        return (
            <div>
                <div className = "title">
                    Professional Experience
                </div>
                <div className = "step">
                    {4} of {this.props.all}
                </div>
                <div>
                    <Progressbar percentage = {this.props.step/this.props.all*100}/>
                </div>
            </div>
        );
    }
}

export default ProfessionalExperience;