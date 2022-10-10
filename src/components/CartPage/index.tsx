import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

interface ICartPage {
  favorites?: number,
  cart?: number
}

const CartPage: FC<ICartPage> = ({ favorites = 0, cart = 0, ...props }) => {

  return (
    <div>
      <Header />
      cart
      <Footer />
    </div>
  );
}

export default CartPage;