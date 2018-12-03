import React, { Component } from 'react';
import './professional-experience.less';
import Progressbar from "../../common/components/progressbar/progressbar";
import InputComponent from "../../common/components/input-component/input-component";

class ProfessionalExperience extends Component {
    constructor(props){
        super(props);
        this.state = {
            professional_exp : [{
                company : "",
                location : "",
                role: "",
                startDate : "",
                endDate : ""
            }],
            step : this.props.step
        };
    }
    changeHandler = (id,value)=>{
        const index = id.split(".")[1];
        const idName = id.split(".")[0];
        let professional_exp = this.state.professional_exp.slice();
        professional_exp[index][idName] = value;
        this.setState({
            professional_exp
        });
    }
    addProfessionalExperience = () =>{
        let professional_exp = this.state.professional_exp;
        let temp_professional_exp = {
            company : "",
            location : "",
            role: "",
            startDate : "",
            endDate : ""
        };
        professional_exp.push(temp_professional_exp);
        this.setState({
            professional_exp
        });
    }
    next = () =>{
        const data = {
            professional_exp : [...this.state.professional_exp]
        };
        if(true){
            this.setState({
                error : ""
            });
            this.props.next(data);
        }else{
            this.setState({
                error : "Please enter all the fields of the university"
            });
        }
    }
    back = () =>{
        this.props.back();
    }
    validate = () =>{
        let flag = true;
        for(let i =0; i < this.state.professional_exp.length; i++){
            let temp = this.state.professional_exp[i];
            Object.keys(temp).forEach((key)=>{
                if(temp[key] =="") {
                    flag = false;
                }
            });
        }
        return flag;
    }
    render() {
        return (
            <div className = "professional-exp-wrap">
                <div className = "title">
                    Professional Experience
                </div>
                <div className = "step">
                    {4} of {this.props.all}
                </div>
                <div>
                    <Progressbar percentage = {this.props.step/this.props.all*100}/>
                </div>
                {this.state.professional_exp.map((professional_exp,index)=>{
                            return(
                                <div key = {index}>
                                    <div className = "details">
                                        <div>
                                            <InputComponent 
                                            error = "" 
                                            id = {"company."+index} 
                                            placeholder = {"Company"} 
                                            value = {professional_exp.company} 
                                            type = "text" 
                                            changeHandler = {this.changeHandler} 
                                            focus = {true}/>
                                        </div>
                                    </div>
                                    <div className = "details">
                                        <div>
                                            <InputComponent 
                                            error = "" 
                                            id = {"location."+index} 
                                            placeholder = {"Location"} 
                                            value = {professional_exp.location} 
                                            type = "text" 
                                            changeHandler = {this.changeHandler} 
                                            focus = {false}/>
                                        </div>
                                    </div>
                                    <div className = "details">
                                        <div>
                                            <InputComponent 
                                            error = "" 
                                            id = {"role."+index} 
                                            placeholder = {"Role"} 
                                            value = {professional_exp.role} 
                                            type = "textarea" 
                                            changeHandler = {this.changeHandler} 
                                            focus = {false}/>
                                            </div>
                                    </div>
                                    <div className = "details">
                                        <div className = "dates">
                                            <InputComponent 
                                            error = "" 
                                            id = {"startDate."+index} 
                                            placeholder = {"Start date"} 
                                            value = {professional_exp.startDate} 
                                            type = "text" 
                                            changeHandler = {this.changeHandler} 
                                            focus = {false}/>
                                        </div>
                                        <div className = "dates">
                                            <InputComponent 
                                            error = "" 
                                            id = {"endDate."+index} 
                                            placeholder = {"End date"} 
                                            value = {professional_exp.endDate} 
                                            type = "text" 
                                            changeHandler = {this.changeHandler} 
                                            focus = {false}/>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                <div>
                    <input type = "button" className = "btn btn-info"onClick = {this.addProfessionalExperience} value = "Add Company"/>
                </div>
                {
                    this.state.error && <div className="error-section">{this.state.error}</div>
                }
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

export default ProfessionalExperience;