import React from "react";
import classnames from "classnames";
import Navbar from "./../../Components/Navbar/Navabar";
import "../../assets/css/nucleo-icons.css";


// reactstrap components
import {
 
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
  TabContent,
  TabPane,
  Card,
   Button, 
   CardTitle, 
   CardText 
} from "reactstrap";
import EntrepriseModal from "../../Components/Modal/EntrepriseModal";
import { connect } from "react-redux";
import MyModal from "../../Components/uiKit/myModal";
import { apiURL } from "../../Config/config";



class EspaceClient extends React.Component {
    state = {
        loading: true,
        user: null,
  
        
 
        
      };

      constructor(props) {
        super(props);
        this.state = {
            id:props.id,
            password:"",
            withIcons: 1,
            isModalVisible:true,
            nomEntreprise:"",
            activite:"",
            produit:"",
            affaire:null,
            rne:null,
            siteweb:'',
        };
      }

      handleOk = () => {
        this.setState({isModalVisible:false})
       };
     
        handleCancel = () => {
         this.setState({isModalVisible:false})
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
  SaveChanges=()=>{
    let formdata = new FormData()

    formdata.append("first_name",this.state.first_name)
    formdata.append("last_name",this.state.last_name)
    formdata.append("email",this.state.email)
   

    fetch(apiURL+'/api/user_update_profile',{headers:{
      'Authorization': "Bearer "+this.props.auth.token
    },
    method:'POST',
    body: formdata
  }).then(response => {
      if(response.status == 201)
      {
        response.json().then(result =>{
          console.log(result);
        })
        this.props.history.goBack()
      }
      }
    )  

  }
  onSubmit = ()=>{
    console.log("im here");
    
    let formdata = new FormData()

    formdata.append("raison_sociale",this.state.nomEntreprise)
    formdata.append("cat_produits",this.state.produit)
    formdata.append("rne",this.state.rne)
    formdata.append("site_web",this.state.siteweb)
    formdata.append("chiffre_affaire",this.state.affaire)
    formdata.append("secteur_activite",this.state.activite)
  
    fetch(apiURL+'/api/Add_magasin_front',{headers:{
        'Authorization': "Bearer "+this.props.auth.token
      },
      method:'POST',
      body: formdata
    }).then(response => response.json())
    fetch(apiURL+"/api/getMagasinByIdToken", {headers: {
      'Authorization': 'Bearer '+this.props.auth.token}})
     .then(response => response.json()).then(data => {
      const action = {type:"GET_TOKEN",token:this.props.auth.token, client:data}
      this.props.dispatch(action)
       this.props.history.goBack()  

     })
      
          
        
        
       
      
}

onChangeActivite(e) {
  this.setState({
    activite: e
  });
 
}

onChangeProduit(e) {
  this.setState({
    produit: e
  });

}

onChangeAffaire(e) {
  this.setState({
    affaire: e
  });

}

onChangeRne(e) {
  this.setState({
    rne: e
  });
  
}
onChangeSiteweb(e) {
  this.setState({
    siteweb: e
  });

}
onChangeNomEnreprise(e) {
  this.setState({nomEntreprise:e})
 
}
  


  render() {
    console.log();
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
                            {this.props.auth.client && this.props.auth.client.user ?(
                              <h4 className="title left-marg" >{this.props.auth.client.user.firstName} {this.props.auth.client.user.lastName}</h4>
                            ): this.props.auth.client ? 
                           (<h4 className="title left-marg" >{this.props.auth.client.firstName} {this.props.auth.client.lastName}</h4>
                           
                           ):null                 
                          }
                           
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
                                            {this.props.auth.client && this.props.auth.client.user ?(
                                              <Input type="text" placeholder="First name"  onChange={(e)=>this.setState({first_name:e.target.value})} />
                                            ): this.props.auth.client ? (
                                              <Input type="text" placeholder="First name"  onChange={(e)=>this.setState({first_name:e.target.value})}/>
                                            ):null
                                           }    
                                           
                                        </FormGroup>
                                    </Col>
                                    <Col >
                                        <FormGroup>
                                            <Label >Seconde Name</Label>
                                            {this.props.auth.client && this.props.auth.client.user ?(
                                            <Input type="text" placeholder="Last name"  onChange={(e)=>this.setState({last_name:e.target.value})}/>
                                            ):this.props.auth.client ?
                                          (
                                            <Input type="text" placeholder="Last name"  onChange={(e)=>this.setState({last_name:e.target.value})} />
                                          ):null
                                          }
                                        </FormGroup>
                                    </Col>
                                </Row> 
                                <Row>
                                    <Col >
                                        <FormGroup>
                                            <Label >E mail Adresse</Label>
                                            {this.props.auth.client && this.props.auth.client.user ?(
                                            <Input type="text" placeholder="E mail Adresse"  onChange={(e)=>this.setState({username:e.target.value})}/>
                                            ):this.props.auth.client ? (
                                              <Input type="text" placeholder="E mail Adresse"  onChange={(e)=>this.setState({username:e.target.value})}/>
                                            ):null
                                          }
                                        </FormGroup>
                                    </Col>
                                   
                                </Row> 
                               
                            </Form>
                            <Button color="primary" onClick={this.SaveChanges.bind(this)}>Save Changes</Button>
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
                <Row>
                <Col sm="5">
                <div>
                Stores, programs, and resources
                Visit or manage the following stores, programs, and resources connected to your Shifti ID.
                
                </div>
                </Col>
                <Col sm="7">
                <Card body>
                  <CardTitle tag="h5">store name</CardTitle>
                  <CardText><a href={`http://localhost:3006/${this.props.auth.token}`}>
                  <Button>Go to Store</Button>
                  </a></CardText>
                  
                </Card>
                </Col>
                </Row>
                
               
               </TabPane>
        </TabContent>
        </CardBody>
        </Card>
        </Col>
        </Row>
        
       { !this.props.auth.client ?(
        <MyModal 
        entreprise={"entreprise"}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        isModalVisible= {this.state.isModalVisible}
        onChangeNomEntreprise={(e)=>this.onChangeNomEnreprise(e.target.value)}
         onChangeActivite={(e)=>this.onChangeActivite(e.target.value)}
         onChangeProduit={(e)=>this.onChangeProduit(e.target.value)}
         onChangeAffaire={(e)=>this.onChangeAffaire(e.target.value)}
         onChangeRne={(e)=>this.onChangeRne(e.target.value)}
         onChangeSiteweb={(e)=>this.onChangeSiteweb(e.target.value)}
         nom={"Nom de l'entreprise :"}
         activite={"Secteur d'activité :"}
         affaire={"Chiffre d'affaire annuel :"}
         rne={"Rne"}
         siteweb={"site web"}
         produit={"produits"}
        onSubmit={this.onSubmit}
        />
       ):null

       }
      
       

        

        </Container>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EspaceClient);