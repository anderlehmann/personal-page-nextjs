'use client';

import Header from "@/components/Header";
import Link from "next/link";

import './projetos.css';

export default function Projetos() {
  return (
    <main className="App">
      <Header />
      <div className="body-page body-projetos">
        <Link href='/projetos/solado-store' className='projects'>
          <p id='over-message'>WIP...</p>
          <img id='img-shoes-store' src="./images/project-shoes-store.jpg" />
          <p>Shoes Store</p>
        </Link>
      </div>
    </main>
  )
};
