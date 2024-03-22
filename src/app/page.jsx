'use client';

import './globals.css'
import './page.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <main className='App'>
      <Header />
      <div id="home" className='body-page'>
        <div id="left-content">
          <p>Olá Mundo, me chamo</p>
          <h2>Anderson Lehmann</h2>
          <p id="content">Sou estudante de desenvolvimento web!</p>
        </div>
        <img src="./images/image-profile.png" id="user-img" alt="imagem perfil"></img>
      </div>
    </main>
  );
};
