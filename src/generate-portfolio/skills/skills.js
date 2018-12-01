import React, { Component } from 'react';
import Progressbar from "../../common/components/progressbar/progressbar";
import InputComponent from "../../common/components/input-component/input-component";
import './skills.less';
import CloseBtn from "../../../assets/images/close.svg";

class Skills extends Component {
    constructor(props){
        super(props);
        this.state = {
            step : this.props.step,
            skills : [],
            name : ""
        };
    }
    next = () =>{
        const data = {
           skills : [...this.state.skills]
        };
        if(this.validate()){
            this.setState({
                error : ""
            });
            this.props.next(data);
        }else{
            this.setState({
                error : "Please add at least one skill"
            });
        }
    }
    back = () =>{
        this.props.back();
    }
    changeHandler = (id,value)=>{
        this.setState({
            [id] : value
        });
    }
    addSkill = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        let skills = this.state.skills.slice();
        skills.push(this.state.name);
        this.setState({
            skills,
            name : "",
            error : ""
        });
    }
    removeSkill = (index) =>{
        let skills = this.state.skills.slice();
        console.log(index);
        skills.splice(index,1);
        this.setState({
            skills
        });
    }
    validate = () =>{
        if(this.state.skills.length > 0){
            return true;
        }
        return false;
    }
    render() {
        return (
            <div className = "skills-container-wrap">
                <div className = "title">
                    Skills
                </div>
                <div className = "step">
                    {3} of {this.props.all}
                </div>
                <div>
                    <Progressbar percentage = {this.props.step/this.props.all*100}/>
                </div>
                <form onSubmit = {this.addSkill}>
                    <div className = "skill-section">
                        <div className = "skill-input">
                            <InputComponent 
                            error = "" 
                            id = "name" 
                            placeholder = {"Skill e.g., javascript"} 
                            value = {this.state.name} 
                            type = "text" 
                            changeHandler = {this.changeHandler} 
                            focus = {true}/>
                        </div>
                        <div>
                            <input type = "submit" className = "btn" onClick = {this.addSkill} value = "Add a skill"/>
                        </div>
                        <div className = "skill-added">
                            {
                                this.state.skills.map((skill,index)=>{
                                    return(
                                        <div className="skill" key = {index}>
                                            {skill}<div onClick = {()=>this.removeSkill(index)} style = {{backgroundImage: `url(${CloseBtn})`}}  className ="close-btn"></div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </form>
                {
                    this.state.error && <div className="error-section">{this.state.error}</div>
                }
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

export default Skills;