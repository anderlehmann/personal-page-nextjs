'use client'

import './Header.css';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useEffect, useState, useRef } from 'react';

function Header() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    lockScroll();
    readTheme();
  }, []);

  const readTheme = () => {
    if (typeof window !== "undefined") {
      const html = document.querySelector("html");
      if (html.classList.contains("light-mode")) {
        setIsDarkTheme(true);
        return;
      }
      setIsDarkTheme(false);
    };
  };

  const switchTheme = () => {
    if (typeof window !== "undefined") {
      const html = document.querySelector("html");
      html.classList.toggle("light-mode");

      setIsDarkTheme(html.classList.contains("light-mode"));
    };
  };

  const switchActiveMenu = () => {
    if (typeof window !== "undefined") {
      const navBar = document.querySelector("#navbar");
      navBar.classList.toggle("active");
    }
  };

  const lockScroll = () => {
    if (typeof window !== "undefined") {
      const navBar = document.querySelector("#navbar");
      if (navBar.classList.contains("active")) {
        document.body.style.overflow = "hidden";
        return
      }
      document.body.style.overflow = "auto";
    }
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
          onChange={() => { switchTheme() }}
          checked={isDarkTheme}
        />
        <label htmlFor="switch" />
        <p>A</p>
      </div>
    </header>
  );
}

export default Header;
