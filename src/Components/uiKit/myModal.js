import React, { Component } from 'react'
import { Modal, Button, Input, Select } from 'antd';
import 'antd/dist/antd.css'; 

class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    

    };
  }

  




    render() {
      console.log(this.props);
        return (
        <div>
          <Modal
          title={this.props.title}
          visible={this.props.isModalVisible}
          closable={false}
          footer={null}
          onOk={this.props.onOk}
          onCancel={this.props.onCancel}
              >
         {this.props.register === "register" ? (

          <div>
            <span >{this.props.labelname}</span>
            <Input  id="name"  onChange={this.props.onChangeName} />
          </div>
          ):null
        
        }
          { this.props.register === "register" ?
          (
            <div >
            <span >{this.props.labelprenom}</span>
            <Input  id="prenom"  onChange={this.props.onChangePrenom}/>
          </div>
          ):null
          }
          {this.props.register === "register" ? (
            <div >
            <span>{this.props.email}</span>
            <Input
              type="email"
              className="form-control color-input"
              id="email"
              placeholder="name@example.com"
          
              onChange={this.props.onChangeEmail}
            />
          </div>
          ):null

          }
          
          {this.props.register === "register" ? (
            <div >
            <span>{this.props.password}</span>
            <Input
              type="password"
              className="form-control color-input"
              
              onChange={this.props.onChangePasswordOne}
  
            />
          </div>
          ):null

          }

          {this.props.register === "register" ? (
            <div >
            <span>{this.props.confirmpassword}</span>
            <Input
              type="password"
              className="form-control color-input"
              id="password2"
     
              onChange={this.props.onChangePasswordTwo}
            />
            </div>
          ):null

          }


     

          {this.props.entreprise === "entreprise" ? (
            <div>
          <span >{this.props.nom}</span>
          <Input onChange={this.props.onChangeNomEntreprise} />
        </div>
          ):null

          }

          {this.props.entreprise === "entreprise" ? (
            <div >
        <span>{this.props.activite}</span>
        <select  className="form-control color-input" id="activite"  onChange={this.props.onChangeActivite}  >
          <option>Industrielle</option>
          <option>Distribution</option>
          <option>Services</option>
        </select>
      </div>
          ):null

          }
          
          {this.props.entreprise === "entreprise" ? (
            <div >
            <span>{this.props.produit}</span>
            <input
              className="form-control color-input"
              id="produit" 
             
              onChange={this.props.onChangeProduit} 
            />
          </div>
          ):null

          }
          
          {this.props.entreprise === "entreprise" ? (
            <div >
            <span>{this.props.affaire}</span>
            <input
              className="form-control color-input"
              id="affaire" 
            
              onChange={this.props.onChangeAffaire} 
            />
          </div>
          ):null

          }
          
          {this.props.entreprise === "entreprise" ? (
            <div >
        <span>{this.props.rne}</span>
        <input
          className="form-control color-input"
          id="rne"
          onChange={this.props.onChangeRne} 
        />
      </div>
          ):null

          }
        
          {this.props.entreprise === "entreprise" ? (
            <div >
      <span>{this.props.siteweb}</span>
      <input
      onChange={this.props.onChangeSiteweb} 
        className="form-control color-input"
        id="siteweb"
   
      />
       </div>
          ):null

          }
      

        
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

export default MyModal