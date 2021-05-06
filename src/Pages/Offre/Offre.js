

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

// core components


class Offre extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getOffre = async ()=>{
    await fetch('http://localhost:8000/api/get_offre',{
      headers:{
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjAxNjM3NTMsImV4cCI6MTYyMDE2NzM1Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.CfN9SRiFQNiv8tRfXJRmNQX6DhVPV3TaeO_sXWPwejrX0GU3wsjeNTvuoH7B96taTnWYdvnM3VHKzzWOF0iHTM1XzMIelhwl73ZqV1uic534SLfpsY7pVb6WKuoXIMH2c7ZDMllEkwAGDcly7TfnYWlR7vXkkr_QOj6mT2BiRydKclcImEoFd_1AdTSy__PeR6FDIGvhb__sOjRj0Z5fhDa8OA0NjfdyE6uaRjIRmSMWgDp1egYObBvyBGDDHav_B9HHUDDza33IiPlNqF5MUCsP2NeQD-2R3INJv2-Fxe2fG9YcEX7VEl51L_JqtCmBlftW2rDC0nXc2oHeOFjPew'

      }
    }).then(response => response.json()).then(data => this.setState({dataOffre:data}))
    const action = {type:"GET_OFFRE_DATA", value:this.state.dataOffre}
    this.props.dispatch(action)
  }
 
  render() {
    console.log(this.props.auth.dataOffre);
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
              {this.props.auth.dataOffre.map((offre)=>(
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
                        <span>Plan {offre.prix}	</span>
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