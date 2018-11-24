import React, { Component } from 'react';
import Progressbar from "../../common/components/progressbar/progressbar";

class Skills extends Component {
    constructor(props){
        super(props);
        this.state = {
            step : this.props.step
        };
    }
    render() {
        console.log(this.props.step , "skills");
        return (
            <div>
                <div className = "title">
                    Skills
                </div>
                <div className = "step">
                    {3} of {this.props.all}
                </div>
                <div>
                <Progressbar percentage = {this.props.step/this.props.all*100}/>
                </div>
            </div>
        );
    }
}

export default Skills;