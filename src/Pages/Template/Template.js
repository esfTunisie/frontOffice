

import React, { Component } from "react";
import Navbar from "../../Components/Navbar/Navabar"
// react plugin used to create charts
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { connect } from "react-redux";
import { ImageUrl } from "../../Config/imageUrlConfig";

// core components


class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getTemplate = ()=>{
    
    fetch('http://localhost:8000/api/get_templates')
    .then(response => response.json()).then(data => this.setState({dataTemplate:data}) )
 }
 
 componentDidMount(){
    
  this.getTemplate()
}
  render() {
  
  return (
    <>
      <div>
         <Navbar/>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("../../assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Choose Your Shop{" "}
                  <span className="text-info">that fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
            {this.state.dataTemplate && this.state.dataTemplate.map((template)=>(
              <Col md="4">
              
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={template.templateImage}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">{template.name}</h4>
                        
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                    <span>Plan {template.description}	</span>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <a  className="btn-simple" href={template.url} target="_blank" color="primary">
                      Get plan
                    </a>
                  </CardFooter>
                </Card>
                
              </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
}
const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
})


const mapDispatchToProps = (dispatch) => {
return {
dispatch: (action) => {
dispatch(action);
},
};
};
export default connect (mapStateToProps, mapDispatchToProps)(Template)