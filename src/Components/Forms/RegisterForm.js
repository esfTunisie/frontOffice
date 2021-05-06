import React from 'react';

export const RegisterForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nom</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
      <label htmlFor="prenom">Prénom</label>
      <input className="form-control" id="prenom" />
    </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
      <label htmlFor="password1">mot de passe</label>
      <input
        type="password"
        className="form-control"
        id="password1"
        
      />
    </div>
    <div className="form-group">
    <label htmlFor="password2">confirmer mot de passe</label>
    <input
      type="password"
      className="form-control"
      id="password2"
      
    />
  </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;