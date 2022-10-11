import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Cart from './Cart';

interface ICartPage {
  favorites?: number,
  cart?: number
}

const CartPage: FC<ICartPage> = ({ favorites = 0, cart = 0, ...props }) => {

  return (
    <div>
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}

export default CartPage;