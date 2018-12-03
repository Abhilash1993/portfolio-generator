import React, { Component } from 'react';
import { connect } from "react-redux";
import './preview.less';
import ACTION from '../../common/action_constants';

class Preview extends Component {
    constructor(props){
        super(props);
        this.state = {
            
       };
    }
    back = () =>{
        this.props.back();
    }
    submit = () =>{
        const {dispatch} = this.props;
        dispatch({type : ACTION.PORTFOLIO.SEND_DATA, data: this.props.portfolio });
    }
    render() {
        console.log(this.props.portfolio , "From preview");
        return (
            <div>
                <div className = "title">
                    You are almost there!
                </div>
                <div className ="content">
                    <div className = "sub-title">
                        Click on submit if information provided by you in the previous steps is correct
                    </div>
                    <div className = "other-info">
                        Else go Back and submit again!
                    </div>
                    <div>
                        <input type = "button" className = "btn btn-success" onClick = {this.submit} value = "Submit"/>
                    </div>
                </div>
                
                <div className="back">
                        <div className = "btn btn-info" onClick = {this.back}>back</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        portfolio: state.portfolio
    };
  };
export default connect(mapStateToProps)(Preview);
