'use client'
import Link from "next/link"
import Image from "next/image";

import './shoesStore.css';

export function HeaderShoesStore() {
  return (
    <header id='header-store'>
      <Link href='/projetos/solado-store'>Solado®</Link>
      <div id='icons-header'>
        <Image width={25} height={25} id="search-desktop" className='icons-header-store' src="https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449075/search-desktop_kvf8a3.svg" alt="pesquisar" />
        <Image width={25} height={25} id="search-mobile" className='icons-header-store' src="https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/search-mobile_llymff.svg" alt="pesquisar" />

        <Link href="/projetos/solado-store/usuario" className='icons-header-store'>
          <Image width={25} height={25} src="https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/cart_mgrjub.svg" alt="carrinho" />
        </Link>

        <Link href="/projetos/solado-store/usuario" className='icons-header-store'>
          <Image width={25} height={25} src="https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/like_rlnmsc.svg" alt="favoritos" />
        </Link>

        <Link href="/projetos/solado-store/usuario" className='icons-header-store'>
          <Image width={25} height={25} src="https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/user_sflbco.svg" alt="usuário" />
        </Link>
      </div>
    </header>
  )
}
