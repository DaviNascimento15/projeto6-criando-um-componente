import React from 'react';
import Profile from './components/pessoa/index.jsx';

const App = () => {
  return (
    <div>
      <h1>Perfis de Usuários</h1>
      
      <Profile nome="Amanda Mendes" idade={21} profissao="Atora" foto="https://i.pinimg.com/originals/0d/39/24/0d39245b27c24333fe9356b788ce8feb.jpg" />
      <Profile nome="Juliana Costa" idade={17} profissao="Engenheira" foto="https://tse1.mm.bing.net/th/id/OIP.RskHY1i8sOqpHZD_hr3hKwHaHa?rs=1&pid=ImgDetMain" />
      <Profile nome="Davi Delas" idade={16} profissao="Desenvolvedor" foto="https://avatars.githubusercontent.com/u/178114108?v=4&size=64" />
    </div>
  );
};

export default App;
