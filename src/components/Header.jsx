'use client'
import "./Header.css";
import Link from 'next/link'

function Header() {
  const switchTheme = () => {
    const html = document.querySelector("html");
    html.classList.toggle("light-mode");
  };

  return (
    <header id="header">
      <nav id="navbar">
        <Link href="/" className="nav-icon">HOME</Link>
        <Link href="/sobremim" className="nav-icon">SOBRE MIM</Link>
        <Link href="/tecnologias" className="nav-icon">TECNOLOGIAS</Link>
        <Link href="/projetos" className="nav-icon">PROJETOS</Link>
        <Link href="/contato" className="nav-icon">CONTATO</Link>
      </nav>
      <div id="icons-header">
        <input
          id="switch"
          type="checkbox"
          name="theme"
          onChange={switchTheme}
        />
        <label htmlFor="switch" />
        <p>A</p>
      </div>
    </header>
  );
}

export default Header;
