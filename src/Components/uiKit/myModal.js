import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css'; 
import PropTypes from 'prop-types'
export default class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      prenom:"",
      email:"",
      password1:"",
      password2:"",

    };
  }

  




    render() {
        return (
        <div>
          <Modal title="Basic Modal" visible={this.props.isModalVisible} onOk={this.props.handleOk} onCancel={this.props.handleCancel}>
          
          <div>
            <label htmlFor="name">{this.props.labelname}</label>
            <input className="form-control color-input" id="name"  onChange={this.props.onChangeName} />
          </div>
          <div >
          <label htmlFor="prenom">{this.props.labelprenom}</label>
          <input className="form-control color-input" id="prenom"  onChange={this.props.onChangePrenom}/>
        </div>
          <div >
            <label htmlFor="email">{this.props.email}</label>
            <input
              type="email"
              className="form-control color-input"
              id="email"
              placeholder="name@example.com"
          
              onChange={this.props.onChangeEmail}
            />
          </div>
          <div >
          <label htmlFor="password1">{this.props.prassword}</label>
          <input
            type="password"
            className="form-control color-input"
            id="password1"
              
              onChange={this.onChangePasswordOne}

          />
        </div>
        <div >
        <label htmlFor="password2">{this.props.confirmpassword}</label>
        <input
          type="password"
          className="form-control color-input"
          id="password2"
 
          onChange={this.onChangePasswordTwo}
        />

     

        </div>
        <div>
          <label htmlFor="nom">{this.props.nom}</label>
          <input className="form-control color-input" id="nom" onChange={this.props.onChangeNomEntreprise} />
        </div>
        <div >
        <label htmlFor="activite">{this.props.activite}</label>
        <select  className="form-control color-input" id="activite"  onChange={this.props.onChangeActivite}  >
          <option>Industrielle</option>
          <option>Distribution</option>
          <option>Services</option>
        </select>
      </div>
      <div >
          <label htmlFor="produit">{this.props.produit}</label>
          <input
            className="form-control color-input"
            id="produit" 
           
            onChange={this.props.onChangeProduit} 
          />
        </div>
        <div >
          <label htmlFor="affaire">{this.props.affaire}</label>
          <input
            className="form-control color-input"
            id="affaire" 
          
            onChange={this.props.onChangeAffaire} 
          />
        </div>
        <div >
        <label htmlFor="rne">{this.props.rne}</label>
        <input
          className="form-control color-input"
          id="rne"
          onChange={this.onChangeRne} 
        />
      </div>
      <div >
      <label htmlFor="siteweb">{this.props.siteweb}</label>
      <input
      onChange={this.onChangeSiteweb} 
        className="form-control color-input"
        id="siteweb"
   
      />
    </div>
        <div >
          <button className="form-control btn btn-primary" type="submit" onClick={this.props.onSubmit} >
            Submit
          </button>
        </div>
          </Modal>
            </div>
        )
    }
}
MyModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
}
