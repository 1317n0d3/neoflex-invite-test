import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Store from './Store';

interface IStorePage {
}

const StorePage: FC<IStorePage> = ({ ...props }) => {

  return (
    <>
      <Header />
      <Store />
      <Footer />
    </>
  );
}

export default StorePage;