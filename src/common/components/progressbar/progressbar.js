import React, { Component } from 'react';
import './progressbar.less';

class Progressbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            width : 0
        };
    }
    componentDidMount(){
        this.setState({
            width : this.props.percentage
        });
    }
    componentWillReceiveProps(props){
        setTimeout(()=>{
            this.setState({
                width : props.percentage
            });
        },1000);
    }
    render() {
        return (
            <div className ="progressbar-section" >
                <div className = "completed " style = {{width : this.state.width+"%"}}>

                </div>
            </div>
        );
    }
}

export default Progressbar;