import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Store from './Store';

interface IStorePage {
  favorites?: number,
  cart?: number
}

const StorePage: FC<IStorePage> = ({ favorites = 0, cart = 0, ...props }) => {

  return (
    <>
      <Header />
      <Store />
      <Footer />
    </>
  );
}

export default StorePage;