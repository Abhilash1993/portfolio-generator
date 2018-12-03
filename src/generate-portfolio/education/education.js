import React, { Component } from 'react';
import InputComponent from "../../common/components/input-component/input-component";
import Progressbar from "../../common/components/progressbar/progressbar";
import "./education.less";

class Education extends Component {
    constructor(props){
        super(props);
        this.state = {
            university : [{
                name : "",
                degree : "",
                startDate : "",
                endDate : "",
                location :""
            }],
            step : this.props.step
        };
    }
    changeHandler = (id,value)=>{
        const index = id.split(".")[1];
        const idName = id.split(".")[0];
        let university = this.state.university.slice();
        university[index][idName] = value;
        this.setState({
            university
        });
    }
    addUniversity = () =>{
        let university = this.state.university;
        let tempUniversity = {
            name : "",
            degree : "",
            startDate : "",
            endDate : "",
            location: ""
        };
        university.push(tempUniversity);
        this.setState({
            university
        });
    }
    next = () =>{
        const data = {
            education : [...this.state.university]
        };
        if(this.validate()){
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
    validate = () =>{
        let flag = true;
        for(let i =0; i < this.state.university.length; i++){
            let temp = this.state.university[i];
            Object.keys(temp).forEach((key)=>{
                console.log("yes",temp[key] =="");
                if(temp[key] =="") {
                    flag = false;
                }
            });
        }
        return flag;
    }
    back = () =>{
        this.props.back();
    }
    render() {

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
                <div className = "content">
                {this.state.university.map((university,index)=>{
                    return (
                        <div className = "university-section" key = {index}>
                           <div className = "university-details">
                               <InputComponent 
                                error = "" 
                                id = {"name."+index} 
                                placeholder = {"University Name"} 
                                value = {university.name} 
                                type = "text" 
                                changeHandler = {this.changeHandler} 
                                focus = {true}/>
                             </div>
                             <div className = "university-details">
                               <InputComponent 
                                error = "" 
                                id = {"location."+index} 
                                placeholder = {"Location"} 
                                value = {university.location} 
                                type = "text" 
                                changeHandler = {this.changeHandler} 
                                focus = {false}/>
                             </div>
                            <div className = "university-details degree">
                                <InputComponent 
                                    error = "" 
                                    id = {"degree."+index} 
                                    placeholder = {"Degree"} 
                                    value = {university.degree} 
                                    type = "text" 
                                    changeHandler = {this.changeHandler} 
                                    focus = {false}/>
                            </div>
                            <div className = "university-details degree">
                               <InputComponent 
                                error = "" 
                                id = {"startDate."+index }
                                placeholder = {"Start date"} 
                                value = {university.startDate} 
                                type = "text" 
                                changeHandler = {this.changeHandler} 
                                focus = {false}/>
                            </div>
                            <div className = "university-details degree">
                                    <InputComponent 
                                        error = "" 
                                        id = {"endDate."+index}
                                        placeholder = {"End date"} 
                                        value = {university.endDate} 
                                        type = "text" 
                                        changeHandler = {this.changeHandler} 
                                        focus = {false}/>
                            </div>
                        </div>
                    );
                })}
                </div>
                <div>
                    <input type = "button" className = "btn btn-info" onClick = {this.addUniversity} value = "Add Another University"/>
                </div>
                {
                    this.state.error && <div className="error-section">{this.state.error}</div>
                }
                <div className="next" >
                        <div className = "btn btn-info"onClick = {this.next}>Next</div>
                </div>
                <div className="back">
                        <div className = "btn btn-info" onClick = {this.back}>back</div>
                </div>
            </div>
        );
    }
}

export default Education;