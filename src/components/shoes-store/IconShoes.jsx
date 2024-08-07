'use client'
import Link from 'next/link'
import Image from 'next/image';

import './IconShoes.css';

export function IconShoes({ src, brand, model, price }) {
  return (
    <article id='box-icon-shoes'>
      <Image
        src={src}
        alt='tenis'
        id='image-icon-shoes'
        width={200}
        height={200}
        priority
      />
      <div id='model-price-box'>
        <p>{`${brand} ${model}`}</p>
        <p>R$ {price}</p>
      </div>
    </article>
  )
}