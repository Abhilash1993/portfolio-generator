import React, { Component } from 'react';
import { connect } from "react-redux";
import './preview.less';
import ACTION from '../../common/action_constants';
import Modal from "../../common/components/modal-popup/modalPopup";
import { push } from 'react-router-redux';
import scrollToComponent from 'react-scroll-to-component';

class Preview extends Component {
    constructor(props){
        super(props);
    }
    back = () =>{
        this.props.back();
    }
    submit = () =>{
        const {dispatch} = this.props;
        dispatch({type : ACTION.PORTFOLIO.SEND_DATA, data: this.props.portfolio });
    }
    goToHome = () =>{
        const {dispatch} = this.props;
        dispatch({type : ACTION.PORTFOLIO.STATUS, data: false });
        setTimeout(()=>{
            $('html, body').animate({scrollTop: $('#portfolio').offset().top -100 }, 'slow');
        },500);
        dispatch(push('/'));
    }
    render() {
        return (
            <div>
                {this.props.apiCall.status && <Modal toggleModal = {this.goToHome} messageType = "success" header = "Congratulations" body = "You can now choose the templatess"/>}
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
        portfolio: state.portfolio,
        apiCall : state.apiCall
    };
  };
export default connect(mapStateToProps)(Preview);
