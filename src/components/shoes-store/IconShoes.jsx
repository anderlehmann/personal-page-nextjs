'use client'
import Link from 'next/link'
import Image from 'next/image';

import './IconShoes.css';

export function IconShoes() {
  return (
    <article id='box-icon-shoes'>
      <Image
        src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1722625879/shoesAdidas_by1ixm.jpg'
        alt='tenis'
        id='image-icon-shoes'
        width={200}
        height={200}
      />
      <div id='model-price-box'>
        <p>Adidas Advantage Base</p>
        <p>R$ 599,00</p>
      </div>
    </article>
  )
}