import React, { FC } from 'react';
import styled from 'styled-components';
import favoriteIcon from './../../assets/favorite.svg';
import cartIcon from './../../assets/cart.svg';
import { useNavigate } from 'react-router-dom';

interface IHeader {
  favorites?: number,
  cart?: number
}

const Header: FC<IHeader> = ({ favorites = 0, cart = 0, ...props }) => {
  const navigate = useNavigate();


  return (
    <Wrapper>
      <NavContainer>
        <LogoContainer>
          <Logo onClick={() => navigate('/')}>
            QPICK
          </Logo>
        </LogoContainer>


        <Buttons>
          <Button>
            <img src={favoriteIcon} alt="Favorites" />
          </Button>

          <Button onClick={() => navigate('/cart')}>
            <img src={cartIcon} alt="Cart" />
          </Button>
        </Buttons>
      </NavContainer>
    </Wrapper>
  );
}


const Logo = styled.a`
    cursor: pointer;
  `,
  LogoContainer = styled.div`
  `,
  Button = styled.a`
    cursor: pointer;
  `,
  Buttons = styled.div`
  `,
  Wrapper = styled.header`
  `,
  NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
  `;

export default Header;