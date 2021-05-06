import React from 'react';
import { Component } from 'react';
import { apiURL } from '../../Config/config';


class EntrepriseForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name:"",
          activite:"",
          produit:"",
          affaire:"",
          rne:"",
          siteweb:''
        };
      }
      handleChangeName = (event)=>{
          this.setState({
            name:event.target.value,

          })
      }
      handleChangeActivitie = (event)=>{
        this.setState({
          activite:event.target.value,

        })
    }
    handleChangeProduit = (event)=>{
        this.setState({
          produit:event.target.value,

        })
    }
    handleChangeAffaire = (event)=>{
        this.setState({
          affaire:event.target.value,

        })
    }
    handleChangeRne = (event)=>{
        this.setState({
          rne:event.target.value,

        })
    }

    handleChangeSiteweb = (event)=>{
        this.setState({
          siteweb:event.target.value,

        })
    }
    onSubmit = async()=>{
        let formdata = new FormData()

        formdata.append("raison_sociale",this.state.name)
        formdata.append("cat_produits",this.state.produit)
        formdata.append("rne",this.state.rne)
        formdata.append("site_web",this.state.siteweb)
        formdata.append("chiffre_affaire",this.state.affaire)
        formdata.append("secteur_activite",this.state.activite)
       await fetch(apiURL+'/api/Add_magasin_front',{headers:{
            'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MTk2OTU3NzYsImV4cCI6MTYxOTY5OTM3Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZmFyb3VrYnIwNTBAZ21haWwuY29tIn0.i_S0gp5OPV9Zlabb2F0DWQS82afMUZVQhu-wLbwQaVIrlUf2FTaBEYTFMjv0ZEXSc4yJtK_NNlEFSIoewtLk7wlh6ETkTcPK6c3zJZZ1x5WTUZFxer90hXDmStwT1BIUvSH13CBQnPofRqmJWYqK-KCTFUWZ6eQXjxggB-O64FE1KvU-l0DMdKGfNQZ1-xD0ca4U8kXS7G97Sekwb5Zsce56xBYglvyI2Jbg59kCvX_oH6i_Y9qtEGdjAWL110_aV6uvGzoGvIlxGvbcr_E18NVH-HuViPG9UvJ3pOn835JaKC6QXWWanFr45t_CVU1B_9ySATuRJ86SNA32HC3KEw",
            'Content-Type': 'application/json'
          },
          method:'POST',
          body: formdata
        }).then(response => {
       
            if(response.status == 201)
            {
            console.log("res",response);
              response.json().then(result =>{
                console.log(result);
              })
            }
            }
          )  
          
    }
    render(){
        return (
            <form >
              <div className="form-group">
                <label htmlFor="name">Nom de l'entreprise</label>
                <input className="form-control" id="name" onChange={this.handleChangeName.bind(this)} />
              </div>
              <div className="form-group">
              <label htmlFor="activite">Secteur d'activité</label>
              <select  className="form-control" id="activite" onChange={this.handleChangeActivitie.bind(this)}  >
                <option>Industrielle</option>
                <option>Distribution</option>
                <option>Services</option>
              </select>
            </div>
            <div className="form-group">
                <label htmlFor="produit">Produits</label>
                <input
                  className="form-control"
                  id="produit" 
                  onChange={this.handleChangeProduit.bind(this)} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="affaire">Votre chiffre d’affaires annuel</label>
                <input
                  className="form-control"
                  id="affaire" 
                  onChange={this.handleChangeAffaire.bind(this)} 
                />
              </div>
              <div className="form-group">
              <label htmlFor="rne">RNE</label>
              <input
                className="form-control"
                id="rne"
                onChange={this.handleChangeRne.bind(this)} 
              />
            </div>
            <div className="form-group">
            <label htmlFor="siteweb">Site web</label>
            <input
            onChange={this.handleChangeSiteweb.bind(this)} 
              className="form-control"
              id="siteweb"
            />
          </div>
              <div className="form-group">
                <button className="form-control btn btn-primary" type="submit" onClick={this.onSubmit.bind(this)}>
                  Submit
                </button>
              </div>
            </form>
          );

    }
  
};
export default EntrepriseForm;