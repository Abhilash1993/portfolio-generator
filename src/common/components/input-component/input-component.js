import React from 'react';
import './input-component.less';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

export default class InputComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocus : false,
		};
	}
		changeHandler = (e) =>{
			e.preventDefault();
			this.props.changeHandler(this.props.id, e.target.value);
		}
		focus = (e) =>{
			if(e) {
				e.preventDefault(); 
			}
			this.setState({
				isFocus : true
			});
		}
		blur = (e) =>{
			if(e) {
				e.preventDefault(); 
			}
			if(!this.props.value){
				this.setState({
					isFocus : false
				});
			}
		}
		onClickLable = (e) =>{
			e.preventDefault();
			const el = findDOMNode(this.refs[this.props.id]);
			$(el).focus();
			this.setState({
				isFocus : true
			});
		}
		render() {
			const error = this.props.error;
			return (
				<div className = "input-component normal">
					<div className = {this.state.isFocus ? "placeholder-lable floating-label" : "placeholder-lable"} onClick = {this.onClickLable}>{this.props.placeholder}</div>
					{this.props.type == "text" && <input autoComplete="off" ref = { this.props.id} id= {this.props.id} type = {this.props.type} onChange = {this.changeHandler} value = {this.props.value} className = {this.state.isFocus ? "input validated":"input"} onFocus = {this.focus} onBlur = {this.blur}/>}
					{this.props.type == "textarea" && <textarea autoComplete="off" ref = { this.props.id} id= {this.props.id} type = {this.props.type} onChange = {this.changeHandler} value = {this.props.value} className = {this.state.isFocus ? "input validated textarea":"input textarea"} onFocus = {this.focus} onBlur = {this.blur}></textarea>}
					{error && <div className = "errorMsg">{error}</div>}
				</div>
			);
		}
		componentDidMount(){
			const el = findDOMNode(this.refs[this.props.id]);
			if(this.props.focus) {
				$(el).focus();
				this.focus();
			} else{
				$(el).blur();
			}
			if(this.props.value){
				$(el).focus();
				this.focus();
			}
		}
		componentWillReceiveProps(newProps){
			const el = findDOMNode(this.refs[this.props.id]);
			// if(newProps.focus) {
			// 	$(el).focus();
			// 	this.focus();
			// } else{
			// 	$(el).blur();
			// }
			if(newProps.value) {
				$(el).focus();
				this.focus();
			}
		}
}
