import React from 'react';
import {connect} from 'react-redux';
import './template.less';
// import ACTION from '../common/action_constants';
import { Link } from 'react-router-dom';
import firstImg from '../../../assets/template1.png';
import secondImg from '../../../assets/template2.png';
import ThirdImg from '../../../assets/template3.png';
import FourthImg from '../../../assets/template4.png';
import fifthImg from '../../../assets/images/coming-soon.jpg';
import sixthImg from '../../../assets/images/coming-soon.jpg';

class Templates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        templateData : [{
            project : "Elegant Template",
            category : "Free trial for a month!",
            imageUrl : firstImg
        },{
            project : "Professional",
            category : "Free Trial for a month!",
            imageUrl : secondImg
        },{
            project : "Project C",
            category : "Category C",
            imageUrl : ThirdImg
        },{
            project : "Project D",
            category : "Category D",
            imageUrl : FourthImg
        },{
            project : "Project E",
            category : "Category E",
            imageUrl : fifthImg
        },{
            project : "Project F",
            category : "Category F",
            imageUrl : sixthImg
        }]
    };
  }

  

  render() {
    return (
    <div>
      <section className="p-0" id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters popup-gallery">
            {
                this.state.templateData.map((template)=>{
                    return (
                        
                            
                                    <div className="col-lg-4 col-sm-6">
                                        <a className="portfolio-box" href={template.imageUrl}>
                                        <img className="img-fluid" src={template.imageUrl} alt=""/>
                                        <div className="portfolio-box-caption">
                                            <div className="portfolio-box-caption-content">
                                            <div className="project-category text-faded">
                                                {template.project}
                                            </div>
                                            <div className="project-name">
                                                {template.category}
                                            </div>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                    );
                })
              }

            </div>
          </div>
      </section>

     <section className="bg-dark text-white">
      <div className="container text-center">
        <h2 className="mb-4">Try out the templates!</h2>
        <a className="btn btn-light btn-xl sr-button" href="">Go!</a>
      </div>
    </section>
    </div>
    );
  }
  componentDidMount() {
  }
  componentWillReceiveProps(newProps){
    // console.log(newProps);
  }
}


export default Templates;
