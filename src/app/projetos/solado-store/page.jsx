'use client';

import './shoesStore.css'
import { HeaderShoesStore as Header } from './HeaderShoesStore';
import { IconShoes } from '@/components/shoes-store/IconShoes';
import { useEffect, useState } from 'react';

export default function HomeShoesStore() {
  const [dataShoes, setDataShoes] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3090/shoes');
      const result = await response.json();
      setDataShoes(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message)
    }
  };

  const dataMapped = () => {
    if (dataShoes.length > 0) {
      return dataShoes.map((shoe, index) => {
        return <IconShoes
          key={index}
          src={shoe.image_url}
          brand={shoe.brand}
          model={shoe.model}
          price={shoe.price}
        />
      })
    }
    return <p className='p-home-load-error'>Não foi possível carregar os dados.</p>
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='main-background'>
      <div id='main-content'>
        <Header />
        <section id='icons-shoes-wrapper'>
          {/* <div id='icons-shoes-wrapper-center'> */}
          {isLoading ? <p className='p-home-load-error'>Carregando...</p> : dataMapped()}
          {/* </div> */}
        </section>
      </div>
    </div>
  )
};
