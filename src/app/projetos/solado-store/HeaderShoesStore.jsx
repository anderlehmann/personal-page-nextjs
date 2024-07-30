'use client'
import Link from "next/link"

import './shoesStore.css';

export function HeaderShoesStore() {
  return (
    <header id='header-store'>
      <Link href='/projetos/solado-store'>Solado®</Link>
      <div id='icons-header'>
        <img id="search-desktop" className='icons-header-store' src="./images/search-desktop.svg" alt="pesquisar" />
        <img id="search-mobile" className='icons-header-store' src="./images/search-mobile.svg" alt="pesquisar" />

        <Link href="/projetos/solado-store/usuario" className='icons-header-store'>
          <img src="./images/cart.svg" alt="carrinho" />
        </Link>

        <Link href="/projetos/solado-store/usuario" className='icons-header-store'>
          <img src="./images/like.svg" alt="favoritos" />
        </Link>

        <Link href="/projetos/solado-store/usuario" className='icons-header-store'>
          <img src="./images/user.svg" alt="usuário" />
        </Link>
      </div>
    </header>
  )
}
