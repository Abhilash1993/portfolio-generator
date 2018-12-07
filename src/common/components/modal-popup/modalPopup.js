import React from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import './modalPopup.less';

export default class ModalPopup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocus : false,
		};
    }
		render() {
			const error = this.props.error;
			return (
				<div className = "modal-root">
                    <div id="myModal" className="modal">

                        {  (this.props.messageType === 'premium') &&
                            <div className="modal-content">
                                <div className="modal-header">
                                <h2>{this.props.header}</h2>
                                <span className="close" onClick = {this.props.toggleModal}>&times;</span>
                                </div>
                                <div className="modal-body">
                                    <p>{this.props.body}</p>
                                </div>
                                <div className="modal-footer">
                                    <button className = "btn btn-info accept" onClick = {this.props.toggleModal}>Accept</button>
                                    <button className = "btn btn-info decline" onClick = {this.props.toggleModal}>Decline</button>
                                </div>
                            </div>
                        }
                        {  (this.props.messageType === 'success' || this.props.messageType === 'failure') &&
                            <div className="modal-content">
                                <div className="modal-header">
                                <h2>{this.props.header}</h2>
                                <span className="close" onClick = {this.props.toggleModal}>&times;</span>
                                </div>
                                <div className="modal-body">
                                    <p>{this.props.body}</p>
                                </div>
                                <div className="modal-footer">
                                    <button className = "btn btn-info accept" onClick = {this.props.toggleModal}>Okay</button>
                                </div>
                            </div>
                        }
                    </div>
				</div>
			);
		}
		componentDidMount(){
		}
		componentWillReceiveProps(newProps){
		}
}
