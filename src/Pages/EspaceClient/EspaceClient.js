import React from "react";
import classnames from "classnames";
import Navbar from "./../../Components/Navbar/Navabar";
import "../../assets/css/nucleo-icons.css";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Col,
  Row,
  NavItem,
  NavLink,
  Nav,
  Label,
  FormGroup,
  Form,
  FormText,
  Input,
  Button,
  Table,
  TabContent,
  TabPane
} from "reactstrap";

class EspaceClient extends React.Component {
    state = {
        loading: true,
        user: null
      };
      async componentDidMount() {
          //fake API in the URL
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ user: data.results[0], loading: false });
      }
      //get the new password 
      updatePassword(event) {
        this.setState({
          password: event.target.value 
        });
      }
    constructor(props) {
    super(props);
    this.state = {
        id:props.id,
        password:"",
        withIcons: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  //onclick function 
  updateNewPassword() {
    var context = this;

  }
  render() {
    if (this.state.loading) {
        return <div>loading...</div>;
      }
  
      if (!this.state.user) {
        return <div>didn't get a user</div>;
      }
    return (
      <>
      <Navbar />
        <Container className="align-items-center">
        <Row className="top-marg">
        <Col className="ml-auto mr-auto" lg="10" md="6">
            <Card className="card-coin card-plain">
                        <CardHeader>
                            <img
                            alt="..."
                            className="img-center img-fluid rounded-circle"
                            src={this.state.user.picture.large}
                            />
                            <h4 className="title left-marg" >{this.state.user.name.first}  {this.state.user.name.last}</h4>
                        </CardHeader>
                        <CardBody>
        <Nav
          className="nav-pills-primary nav-pills-icons"
          pills
          role="tablist"
        >
          {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 1
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 1)}
              href="#pablo"
            >
              <i className="tim-icons icon-laptop" />
              User Informations
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 2
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 2)}
              href="#pablo"
            >
              <i className="tim-icons icon-settings-gear-63" />
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.withIcons === 3
              })}
              onClick={e => this.toggleTabs(e, "withIcons", 3)}
              href="#pablo"
            >
              <i className="tim-icons icon-calendar-60" />
              Magasin
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="tab-space" activeTab={"withIcons" + this.state.withIcons}>
          <TabPane tabId="withIcons1">
          <Form>
                                <Row>
                                    <Col >
                                        <FormGroup>
                                            <Label >First name</Label>    
                                            <Input type="text" placeholder="First name" value={this.state.user.name.first} />
                                        </FormGroup>
                                    </Col>
                                    <Col >
                                        <FormGroup>
                                            <Label >Seconde Name</Label>
                                            <Input type="text" placeholder="Last name" value={this.state.user.name.last} />
                                        </FormGroup>
                                    </Col>
                                </Row> 
                                <Row>
                                    <Col >
                                        <FormGroup>
                                            <Label >E mail Adresse</Label>    
                                            <Input type="text" placeholder="E mail Adresse" value={this.state.user.email} />
                                        </FormGroup>
                                    </Col>
                                    <Col >
                                        <FormGroup>
                                            <Label >Phone Number</Label>
                                            <Input type="text" placeholder="Phone Number" value={this.state.user.phone}/>
                                        </FormGroup>
                                    </Col>
                                </Row> 
                                <Row>
                                    <Col >
                                        <FormGroup>
                                            <Label >Home Adresse</Label>    
                                            <Input type="text" placeholder="Home Adresse" value={this.state.user.location.street.name} />
                                        </FormGroup>
                                    </Col>
                                    <Col >
                                        <FormGroup>
                                            <Label >Postal Code</Label>
                                            <Input type="text" placeholder="Postal Code" value={this.state.user.location.street.number}/>
                                        </FormGroup>
                                    </Col>
                                </Row> 
                            </Form>
                            <Button color="primary">Save Changes</Button>
          </TabPane>
          <TabPane tabId="withIcons2">
          <Row>
                            <Label sm="3">Old Password</Label>
                            <Col sm="9">
                                <FormGroup>
                                <Input
                                    placeholder="Old Password"
                                    type="Password"
                                />
                                <FormText color="default" tag="span">
                                    Please enter a Same Password.
                                </FormText>
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Label sm="3">New Password</Label>
                            <Col sm="9">
                                <FormGroup>
                                <Input placeholder="New Password" type="Password" value={this.state.password} onChange={this.updatePassword.bind(this)} />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Label sm="3">Confirme Password</Label>
                            <Col sm="9">
                                <FormGroup>
                                <Input placeholder="Confirme Password" type="Password"  />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Button color="primary" onClick={this.updateNewPassword.bind(this)}>Save Changes</Button>
          </TabPane>
          <TabPane tabId="withIcons3">
                            <Table className="tablesorter" responsive>
                                <thead className="text-primary">
                                    <tr>
                                    <th className="text-center">#</th>
                                    <th >Name</th>
                                    <th >Categorie</th>
                                    <th className="text-center">Since</th>
                                    <th className="text-center">Offre</th>
                                    <th className="header">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-center"><img
                                            alt="..."
                                            src={this.state.user.picture.large}/>
                                        </td>
                                        <td>{this.state.user.name.first}</td>
                                        <td>{this.state.user.name.last}</td>
                                        <td className="text-center">{this.state.user.registered.date}</td>
                                        <td className="text-center"> {this.state.user.phone} DT</td>
                                        <td className="text-center">
                                            <Button className="btn-round btn-icon" color="primary">
                                                <i className="tim-icons icon-double-right" />
                                            </Button>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </Table>
          </TabPane>
        </TabContent>
        </CardBody>
        </Card>
        </Col>
        </Row>
        </Container>
      </>
    );
  }
}

export default EspaceClient;