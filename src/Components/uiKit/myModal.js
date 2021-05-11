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
      nomEntreprise:"",
      activite:"",
      produit:"",
      affaire:"",
      rne:"",
      siteweb:''
    };
  }

  onChangeName(event) {
    this.setState({
      name: event.target.value
    });
    this.props.name(event.target.value);
  }
 onChangeNomEnreprise(event) {
    this.setState({
      nomEntreprise: event.target.value
    });
    this.props.nomEntreprise(event.target.value);
  }
  onChangePrenom(event) {
    this.setState({
      prenom: event.target.value
    });
    this.props.prenom(event.target.value);
  }
  onChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
    this.props.email(event.target.value);
  }
  onChangePasswordOne(event) {
    this.setState({
      password1: event.target.value
    });
    this.props.password1(event.target.value);
  }

  onChangePasswordTwo(event) {
    this.setState({
      password2: event.target.value
    });
    this.props.password2(event.target.value);
  }

  onChangeActivite(event) {
    this.setState({
      activite: event.target.value
    });
    this.props.activite(event.target.value);
  }

  onChangeProduit(event) {
    this.setState({
      produit: event.target.value
    });
    this.props.produit(event.target.value);
  }

  onChangeAffaire(event) {
    this.setState({
      affaire: event.target.value
    });
    this.props.affaire(event.target.value);
  }

  onChangeRne(event) {
    this.setState({
      rne: event.target.value
    });
    this.props.rne(event.target.value);
  }
  onChangeSiteweb(event) {
    this.setState({
      siteweb: event.target.value
    });
    this.props.siteweb(event.target.value);
  }


    render() {
        return (
        <div>
          <Modal title="Basic Modal" visible={this.props.isModalVisible} onOk={this.props.handleOk} onCancel={this.props.handleCancel}>
          <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input className="form-control color-input" id="name" value={this.state.naeme} onChange={this.onChangeName.bind(this)} />
          </div>
          <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input className="form-control color-input" id="prenom" value={this.state.prenom} onChange={this.onChangePrenom.bind(this)}/>
        </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control color-input"
              id="email"
              placeholder="name@example.com"
              value={this.state.email}
              onChange={this.onChangeEmail.bind(this)}
            />
          </div>
          <div className="form-group">
          <label htmlFor="password1">mot de passe</label>
          <input
            type="password"
            className="form-control color-input"
            id="password1"
              value={this.state.password1}
              onChange={this.onChangePasswordOne.bind(this)}

          />
        </div>
        <div className="form-group">
        <label htmlFor="password2">confirmer mot de passe</label>
        <input
          type="password"
          className="form-control color-input"
          id="password2"
          value={this.state.password2}
          onChange={this.onChangePasswordTwo.bind(this)}
        />
      </div>
          <div className="form-group">
            <button className="form-control btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>

        <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom de l'entreprise</label>
          <input className="form-control" id="name" value={this.state.nomEntreprise} onChange={this.onChangeNomEnreprise.bind(this)} />
        </div>
        <div className="form-group">
        <label htmlFor="activite">Secteur d'activité</label>
        <select  className="form-control color-input" id="activite" value={this.state.activite} onChange={this.onChangeActivite.bind(this)}  >
          <option>Industrielle</option>
          <option>Distribution</option>
          <option>Services</option>
        </select>
      </div>
      <div className="form-group">
          <label htmlFor="produit">Produits</label>
          <input
            className="form-control color-input"
            id="produit" 
            value={this.state.produit}
            onChange={this.onChangeProduit.bind(this)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="affaire">Votre chiffre d’affaires annuel</label>
          <input
            className="form-control color-input"
            id="affaire" 
            value={this.state.affaire}
            onChange={this.onChangeAffaire.bind(this)} 
          />
        </div>
        <div className="form-group">
        <label htmlFor="rne">RNE</label>
        <input
          className="form-control color-input"
          id="rne"
          value={this.state.rne}
          onChange={this.onChangeRne.bind(this)} 
        />
      </div>
      <div className="form-group">
      <label htmlFor="siteweb">Site web</label>
      <input
      onChange={this.onChangeSiteweb.bind(this)} 
        className="form-control color-input"
        id="siteweb"
        value={this.state.siteweb}
      />
    </div>
        <div className="form-group">
          <button className="form-control btn btn-primary" type="submit" >
            Submit
          </button>
        </div>
      </form>
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
