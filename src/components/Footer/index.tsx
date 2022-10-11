import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

interface IFooter {
  favorites?: number,
  cart?: number
}

const Footer: FC<IFooter> = ({ favorites = 0, cart = 0, ...props }) => {
  return (
    <Wrapper>
      <nav>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: ${colors.white};
  height: 150px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 0px 0px;
`;

export default Footer;