import React from 'react';
import {connect} from 'react-redux';
import './carousel.less';
// import ACTION from '../common/action_constants';
import { Link } from 'react-router-dom';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        imageCount : 1
    };
    let interval;
  }

  setImage = (n) =>{
      const self =this;
        switch(n) {
            case 1 : document.getElementById("holder").style.left = "0px";
                        self.setState({imageCount : n});
                        break;
            case 2 : document.getElementById("holder").style.left = "-1200px";
                        self.setState({imageCount : n});
                        break;
            case 3 : document.getElementById("holder").style.left = "-2400px";
                        self.setState({imageCount : n});
                        break;
            case 4 : document.getElementById("holder").style.left = "-3600px";
                        self.setState({imageCount : n});  
                        break;
        }
    }
  

  render() {
    return (
      <div className = "">
        <center><h1>Resume Templates</h1></center>
        <div className="carousel-root">
            <div className="carousels">
                <span id="image-1"></span>
                <span id="image-2"></span>
                <span id="image-3"></span>
                <span id="image-4"></span>
                <div id = "holder" className="image-holder">
                    <img src = "../../assets/images/1.jpg" className = "image" />
                    <img src = "../../assets/images/2.jpg" className = "image" />
                    <img src = "../../assets/images/3.jpg" className = "image" />
                    <img src = "../../assets/images/4.jpg" className = "image" />
                </div>
                <div className="buttons">
                    <button className = {this.state.imageCount == 1 || this.state.imageCount == 5 ? "selected-button" : ""} onClick={()=>this.setImage(1)}></button>
                    <button className = {this.state.imageCount == 2 ? "selected-button" : ""} onClick={()=>this.setImage(2)}></button>
                    <button className = {this.state.imageCount == 3 ? "selected-button" : ""} onClick={()=>this.setImage(3)}></button>
                    <button className = {this.state.imageCount == 4 ? "selected-button" : ""} onClick={()=>this.setImage(4)}></button>
                </div>
            </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
        this.setImage(1);
        this.interval = setInterval(()=>{
            let i = this.state.imageCount % 4;
            i++;
            this.setState({imageCount : i});
            this.setImage(this.state.imageCount);     
        },3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    
}


export default Carousel;
