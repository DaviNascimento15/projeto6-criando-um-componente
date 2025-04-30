import React from 'react'
import './Profile.css'

const Profile = ({ nome, idade, profissao, foto }) => {
  return (
    <>
      <div className="profile-container">
        <img src={foto} alt={`Foto de ${nome}`} className="profile-image" />
        <div className="profile-info">
          <h2>{nome}</h2>
          <p><strong>Idade:</strong> {idade}</p>
          <p><strong>Profissão:</strong> {profissao}</p>
        </div>
      </div>
    </>
  );
};

export default Profile