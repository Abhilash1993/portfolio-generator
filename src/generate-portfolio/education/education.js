import React, { Component } from 'react';
import InputComponent from "../../common/components/input-component/input-component";
import Progressbar from "../../common/components/progressbar/progressbar";

class Education extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email : "",
            phone : "",
            address : "",
            step : this.props.step
        };
    }
    changeHandler = (id,value)=>{
        this.setState({
            [id] : value
        });
    }
    render() {
        console.log(this.props.step , "education");
        return (
            <div>
                <div className = "title">
                    Education
                </div>
                <div className = "step">
                    {2} of {this.props.all}
                </div>
                <div>
                <Progressbar percentage = {this.props.step/this.props.all*100}/>
                </div>
            </div>
        );
    }
}

export default Education;