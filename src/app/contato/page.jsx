'use client';

import './contato.css';
import Header from "@/components/Header";
import Image from 'next/image';
import Link from 'next/link';

export default function Contato() {
  return (
    <main className="App">
      <Header />
      <div className="body-page body-contato">
        <img alt="user icon" width="120" height="120" src="./images/user-icon.png"></img>
        <h2 id="h2-contato">Me encontre aqui!</h2>
        <Link className="wrapper-redes" href="https://github.com/anderlehmann" target="_blank">
          <Image alt="github" src="/images/github.png" width="35" height="35"></Image>
          <p>GitHub</p>
        </Link>
        <Link className="wrapper-redes" href="https://www.linkedin.com/in/anderlehmann/" target="_blank">
          <Image alt="linkedin" src="/images/linkedin.png" width="35" height="35"></Image>
          <p>Linkedin</p>
        </Link>
        <Link className="wrapper-redes" href="mailto:andersonvlehmann@gmail.com" target="_blank">
          <Image alt="email" src="/images/enviar.png" width="35" height="35"></Image>
          <p>Email</p>
        </Link>
        <Link className="wrapper-redes" href="https://www.instagram.com/anderlehmann" target="_blank">
          <Image alt="instagram" src="/images/instagram.png" width="35" height="35"></Image>
          <p>Instagram</p>
        </Link>
      </div>
    </main>
  )
};
