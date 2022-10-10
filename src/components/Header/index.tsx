import React, { FC } from 'react';
import styled from 'styled-components';
import favoriteIcon from './../../assets/favorite.svg';
import cartIcon from './../../assets/cart.svg';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../constants/colors';

interface IHeader {
  favorites?: number,
  cart?: number
}

const Header: FC<IHeader> = ({ favorites = 0, cart = 0, ...props }) => {
  const navigate = useNavigate();


  return (
    <Wrapper>
      <NavContainer>
        <Logo onClick={() => navigate('/')}>
          QPICK
        </Logo>


        <Buttons>
          <Button>
            <ButtonCounter>2</ButtonCounter>
            <img src={favoriteIcon} alt="Favorites" />
          </Button>

          <Button onClick={() => navigate('/cart')}>
            <ButtonCounter>2</ButtonCounter>
            <img src={cartIcon} alt="Cart" />
          </Button>
        </Buttons>
      </NavContainer>
    </Wrapper>
  );
}


const Logo = styled.a`
    cursor: pointer;
    color: ${colors.dark};
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
  `,
  Button = styled.a`
    width: 60px;
    height: 60px;
    margin-left: 10px;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Wrapper = styled.header`
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
  `,
  NavContainer = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  ButtonCounter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17px;
    height: 17px;
    border-radius: 100px;
    position: absolute;
    top: 12px;
    right: 12px;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
    background-color: ${colors.orange};
    color: ${colors.white};
  `;

export default Header;