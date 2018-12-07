import React, { Component } from 'react';
import './more-about-me.less';
import Progressbar from "../../common/components/progressbar/progressbar";
import InputComponent from "../../common/components/input-component/input-component";
import ACTION from '../../common/action_constants';

class MoreAboutMe extends Component {
    constructor(props){
        super(props);
        this.state = {
            more : "",
            step : this.props.step,
            gitHub: "",
            linkedIn: ""
        };
    }
    next = () =>{
        const data = {
            more : this.state.more
        };
        const {dispatch} = this.props;
        let URLs = [];
        URLs.push({
            title : "GitHub",
            url : this.state.gitHub
        });
        URLs.push({
            title : "LinkedIn",
            url : this.state.linkedIn
        });
        dispatch({type : ACTION.PORTFOLIO.STORE_URLS, data: URLs});
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
    componentWillReceiveProps(props){
        if(props.portfolio.more ){
            this.setState({
                more : props.portfolio.more
            });
            if(props.portfolio.about.URLs && props.portfolio.about.URLs.length > 0){
                let gitHub, linkedIn;
                if(props.portfolio.about.URLs[0].title == "GitHub"){
                    gitHub = props.portfolio.about.URLs[0].url;
                    linkedIn = props.portfolio.about.URLs[1] ? props.portfolio.about.URLs[1].url : "";
                }else if(props.portfolio.about.URLs[0].title == "LinkedIn"){
                    gitHub = props.portfolio.about.URLs[1] ? props.portfolio.about.URLs[1].url : "";
                    linkedIn = props.portfolio.about.URLs[0] ? props.portfolio.about.URLs[0].url : "";
                }
                this.setState({
                    gitHub ,
                    linkedIn
                });
            }
        }
    }
    render() {
        return (
            <div className = "more-about-me">
                <div className = "title">
                    More about me
                </div>
                <div className = "step">
                    {6} of {this.props.all}
                </div>
                <div>
                    <Progressbar percentage = {this.props.step/this.props.all*100}/>
                </div>
                <div className = "details-wrap content">
                    <div className = "details">
                        <div className="">
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
                    <div className = "details">
                        <div className="">
                            <InputComponent 
                            error = "" 
                            id = "gitHub" 
                            placeholder = {"GitHub URL"} 
                            value = {this.state.gitHub} 
                            type = "text" 
                            changeHandler = {this.changeHandler} 
                            focus = {false}/>
                        </div>
                    </div>
                    <div className = "details">
                        <div className="">
                            <InputComponent 
                            error = "" 
                            id = "linkedIn" 
                            placeholder = {"LinkedIn URL"} 
                            value = {this.state.linkedIn} 
                            type = "text" 
                            changeHandler = {this.changeHandler} 
                            focus = {false}/>
                        </div>
                    </div>
                </div>
                <div className="next" >
                  <div className = "btn btn-info"onClick = {this.next}>Next</div>
                </div>
                <div className="back">
                	<div className = "btn btn-info"onClick = {this.back}>back</div>
                </div>
            </div>
        );
    }
}

export default MoreAboutMe;