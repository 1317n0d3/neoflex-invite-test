import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IFooter {
  favorites?: number,
  cart?: number
}

const Footer: FC<IFooter> = ({ favorites = 0, cart = 0, ...props }) => {
  return (
    <footer>
      <nav>
      </nav>
    </footer>
  );
}

export default Footer;