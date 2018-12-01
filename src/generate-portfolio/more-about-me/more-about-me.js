import React, { Component } from 'react';
import './more-about-me.less';
import Progressbar from "../../common/components/progressbar/progressbar";
import InputComponent from "../../common/components/input-component/input-component";


class MoreAboutMe extends Component {
    constructor(props){
        super(props);
        this.state = {
            more : "",
            step : this.props.step
        };
    }
    next = () =>{
        const data = {
            more : this.state.more
        };
        this.props.next(data);
    }
    back = () =>{
        this.props.back();
    }
    changeHandler = (id,value)=>{
        this.setState({
            [id] : value
        });
    }
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
                <div className = "details">
                    <div>
                        <InputComponent 
                        error = "" 
                        id = "more" 
                        placeholder = {"Tell us more about you"} 
                        value = {this.state.more} 
                        type = "textarea" 
                        changeHandler = {this.changeHandler} 
                        focus = {false}/>
                    </div>
                </div>
                <div className="next" >
                  <div onClick = {this.next}>Next</div>
                </div>
                <div className="back">
                	<div onClick = {this.back}>back</div>
                </div>
            </div>
        );
    }
}

export default MoreAboutMe;