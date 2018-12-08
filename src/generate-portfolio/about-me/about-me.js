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
            headline : "",
            interests : "",
            step : this.props.step,
            tip : true
        };
    }
    changeHandler = (id,value)=>{
        this.setState({
            [id] : value
        });
    }
    next = () =>{
        const data = {
            username : this.state.email,
            about : {
                name: this.state.name,
                surname: "",
                email: this.state.email,
                phone: this.state.phone,
                address : this.state.address,
                headline : this.state.headline,
                interests : this.state.interests
            }
        };
        if(this.state.name != "" && this.state.email !="" && this.state.address != "" && this.state.phone !="")
        {
            this.props.getData(this.state.email);
            this.props.next(data);
            this.setState({
                error : ""
            });
        }else{
            this.setState({
                error : "Please enter all the details"
            });
        }   
    }
    close = () =>{
        this.setState({
            tip : false
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
                {this.state.tip && <div className = "tip-section">
                    <div className = "tip"></div>
                    <div className = "tip-content">
                    If you already have created your portfolio, please enter the below details. We will pull your data for next steps.<div className = "got-it"onClick = {this.close}>Got it!</div>
                    </div>
                </div>}
                <div className = "details-wrap">
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
                            id = "address" 
                            placeholder = {"Address"} 
                            value = {this.state.address} 
                            type = "textarea" 
                            changeHandler = {this.changeHandler} 
                            focus = {false}/>
                        </div>
                    </div>
                    <div className = "details">
                        <div>
                            <InputComponent 
                            error = "" 
                            id = "headline" 
                            placeholder = {"Headline"} 
                            value = {this.state.headline} 
                            type = "text" 
                            changeHandler = {this.changeHandler} 
                            focus = {false}/>
                        </div>
                    </div>
                    <div className = "details">
                        <div>
                            <InputComponent 
                            error = "" 
                            id = "interests" 
                            placeholder = {"My Interests"} 
                            value = {this.state.interests} 
                            type = "textarea" 
                            changeHandler = {this.changeHandler} 
                            focus = {false}/>
                        </div>
                    </div>
                </div>
                {
                    this.state.error && <div className="error-section">{this.state.error}</div>
                }
                <div className="next">
                        <div className = "btn btn-info" onClick = {this.next}>Next</div>
                </div>
            </div>
        );
    }
}

export default AboutMe;