

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
import { apiURL } from "../../Config/config";

// core components


class Offre extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getOffre = ()=>{
    
     fetch(apiURL+'/get_offre').then(response => response.json()).then(data =>{console.log("datya",data)} )
  }
    


  componentDidMount(){
    
    this.getOffre()
  }
 
  render() {
   console.log("state", this.state.dataOffre && this.state.dataOffre);
  return (
    <>
      <div>
         <Navbar/>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("../../assets/img/path3.png").default}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Choose the Plan{" "}
                  <span className="text-info">that fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
              {this.state.dataOffre && this.state.dataOffre.map((offre)=>(
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../../assets/img/bitcoin.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">{offre.nom}</h4>
                        <span>Plan {offre.prix}</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                    <span>Plan {offre.description}	</span>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  className="btn-simple" color="primary">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
                ))}
              </Col>
              
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
export default connect (mapStateToProps, mapDispatchToProps)(Offre)