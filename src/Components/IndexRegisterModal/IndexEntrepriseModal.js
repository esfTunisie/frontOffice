import React, { Component } from 'react';


import EntrepriseModal from '../Modal/EntrepriseModal';
export class IndexEntrepriseModal extends Component {




  state = { isShown: true };

  closeModal = () => {
    this.setState({ isShown: false });
    
    this.toggleScrollLock();
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };
  render() {
    return (
      <React.Fragment>

        
          <EntrepriseModal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
       
      </React.Fragment>
    );
  }
}

export default IndexEntrepriseModal;