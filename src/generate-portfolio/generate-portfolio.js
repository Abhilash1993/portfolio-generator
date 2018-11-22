import React, { Component } from 'react';
import './generate-portfolio.less';
import SingleDataComponent from "./single-data-component";

class GeneratePortfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            next : true,
            loaded : false 
        };
    }
    next = () =>{
        this.setState({
            next : !this.state.next
        });
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loaded : true
            });
        },2000);
    }
    render() {
        const next = this.state.next; 
        const loaded = this.state.loaded;
        return (
            <div className = "generate-portfolio-wrap">
                <div className = {next ? "generate-portfolio-section" : "generate-portfolio-section collapse"}>
                    <div>1</div>
                    <div>
                        <div className="next" onClick = {this.next}>Next</div>
                    </div>
                </div>
                <div className = {!next ? "generate-portfolio-section" : loaded ? "generate-portfolio-section collapse" :"generate-portfolio-section first-load collapse"}>
                    <div>2</div>
                        <div>
                            <div className="next" onClick = {this.next}>Next</div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default GeneratePortfolio;