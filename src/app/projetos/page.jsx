'use client';

import Header from "@/components/Header";
import Link from "next/link";

export default function Projetos() {
  return (
    <main className="App">
      <Header />
      <div className="body-page">
        <h1>Projetos</h1>
        <Link href='/projetos/shoes-store'>Shoes Store</Link>
      </div>
    </main>
  )
};
