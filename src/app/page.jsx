import './globals.css'
import './page.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <main className='App'>
      <Header />
      <div id="home" className='body-page'>
        <img src="image-user.jpg" id="user-img" alt="imagem perfil"></img>
        <div id="left-content">
          <p>Olá Mundo, me chamo</p>
          <h2>Anderson Lehmann</h2>
          <p id="content">Sou estudante de desenvolvimento web!</p>
        </div>
      </div>
    </main>
  );
};
