'use client'
import Link from "next/link"
import Image from "next/image";

import './shoesStore.css';

export function HeaderShoesStore() {
  return (
    <header id='header-store'>
      <Link href='/projetos/solado-store'>Solado®</Link>

      <div id='search-container'>

        <Image
          src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449075/search-desktop_kvf8a3.svg'
          alt='pesquisar'
          id='search-desktop'
          width={20}
          height={20}
        />

        <input type='text' id='search-box' placeholder='Pesquisar' />
        <button id='search-button'>&gt;</button>
      </div>

      <div id='icons-header-wrapper'>
        <Image
          src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/search-mobile_llymff.svg'
          width={60}
          height={60}
          id='search-mobile'
          className='icons-header-store'
          alt='pesquisar'
        />

        <Link href='/projetos/solado-store/carrinho'>

          <Image
            src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/cart_mgrjub.svg'
            alt='carrinho'
            className='icons-header-store'
            width={60}
            height={60}
          />

        </Link>

        <Link href='/projetos/solado-store/favoritos'>

          <Image
            width={60}
            height={60}
            className='icons-header-store'
            src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/like_rlnmsc.svg'
            alt='favoritos'
          />

        </Link>

        <Link href="/projetos/solado-store/usuario">

          <Image
            width={60}
            height={60}
            className='icons-header-store'
            src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722449186/user_sflbco.svg'
            alt='usuário'
          />

        </Link>
      </div>
    </header>
  )
}
