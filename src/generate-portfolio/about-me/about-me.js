import React, { Component } from 'react';
import './about-me.less';
import InputComponent from "../../common/components/input-component/input-component";
import Progressbar from "../../common/components/progressbar/progressbar";

class AboutMe extends Component {
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
        return (
            <div className = "about-me-wrap">
                <div className = "title">
                    About Me
                </div>
                <div className = "step">
                    {this.state.step} of {this.props.all}
                </div>
                <div>
                <Progressbar percentage = {this.props.step/this.props.all*100}/>
                </div>
                <div className = "details">
                    <div>
                        <InputComponent 
                        error = "" 
                        id = "name" 
                        placeholder = {"Name"} 
                        value = {this.state.name} 
                        type = "text" 
                        changeHandler = {this.changeHandler} 
                        focus = {true}/>
                    </div>
                </div>
                <div className = "details">
                    <div>
                        <InputComponent 
                        error = "" 
                        id = "email" 
                        placeholder = {"Email ID"} 
                        value = {this.state.email} 
                        type = "text" 
                        changeHandler = {this.changeHandler} 
                        focus = {false}/>
                    </div>
                </div>
                <div className = "details">
                    <div>
                        <InputComponent 
                        error = "" 
                        id = "phone" 
                        placeholder = {"Phone number"} 
                        value = {this.state.phone} 
                        type = "text" 
                        changeHandler = {this.changeHandler} 
                        focus = {false}/>
                    </div>
                </div>
                <div className = "details">
                    <div>
                        <InputComponent 
                        error = "" 
                        id = "phone" 
                        placeholder = {"Address"} 
                        value = {this.state.phone} 
                        type = "textarea" 
                        changeHandler = {this.changeHandler} 
                        focus = {false}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;