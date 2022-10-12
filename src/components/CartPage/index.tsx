import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Cart from './Cart';

interface ICartPage {
}

const CartPage: FC<ICartPage> = ({...props }) => {

  return (
    <div>
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}

export default CartPage;