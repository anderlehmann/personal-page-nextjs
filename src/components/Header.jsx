'use client'
import "./Header.css";
import Link from 'next/link'
import { useEffect, useState } from "react";

function Header() {
  document.body.style.overflow = "auto";

  const [isLightTheme, setLightTheme] = useState(
    localStorage.getItem("isLightTheme") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLightTheme", isLightTheme);
  }, [isLightTheme]);

  const switchTheme = () => {
    const html = document.querySelector("html");
    html.classList.toggle("light-mode");

    setLightTheme((prevTheme) => !prevTheme);
  };

  const switchActiveMenu = () => {
    const navBar = document.querySelector("#navbar");
    navBar.classList.toggle("active");
  };

  const lockScroll = () => {
    const navBar = document.querySelector("#navbar");
    if (navBar.classList.contains("active")) {
      document.body.style.overflow = "hidden";
      return
    }
    document.body.style.overflow = "auto";
  };

  return (
    <header id="header">
      <button id="nav-button" onClick={() => { switchActiveMenu(); lockScroll() }}></button>
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
          onClick={() => { switchTheme() }}
          checked={!isLightTheme}
        />
        <label htmlFor="switch" />
        <p>A</p>
      </div>
    </header>
  );
}

export default Header;
