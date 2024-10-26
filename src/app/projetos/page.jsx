'use client';

import Header from "@/components/Header";
import Link from "next/link";

import './projetos.css';

export default function Projetos() {
  return (
    <main className="App">
      <Header />
      <div className="body-page body-projetos">
        <Link href='https://soladostore.vercel.app' prefetch={false} className='projects'>
          <p id='over-message'>WIP...</p>
          <img id='img-shoes-store' src="https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/project-shoes-store_hi6ou4.jpg" />
          <p>Shoes Store</p>
        </Link>
      </div>
    </main>
  )
};
