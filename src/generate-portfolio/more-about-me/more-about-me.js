import React, { Component } from 'react';
import './more-about-me.less';
import Progressbar from "../../common/components/progressbar/progressbar";

class MoreAboutMe extends Component {
    render() {
        return (
            <div>
                <div className = "title">
                    More about me
                </div>
                <div className = "step">
                    {6} of {this.props.all}
                </div>
                <div>
                    <Progressbar percentage = {this.props.step/this.props.all*100}/>
                </div>
            </div>
        );
    }
}

export default MoreAboutMe;