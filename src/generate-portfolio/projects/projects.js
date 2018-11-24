import React, { Component } from 'react';
import Progressbar from "../../common/components/progressbar/progressbar";


class Projects extends Component {
    render() {
        return (
            <div>
                <div className = "title">
                    Projects
                </div>
                <div className = "step">
                    {5} of {this.props.all}
                </div>
                <div>
                    <Progressbar percentage = {this.props.step/this.props.all*100}/>
                </div>
            </div>
        );
    }
}

export default Projects;