import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Image from '../Image';
import langIcon from '../../assets/language.svg';
import vkIcon from '../../assets/VK.svg';
import tgIcon from '../../assets/Telegram.svg';
import whatsappIcon from '../../assets/Whatsapp.svg';

interface IFooter {
}

interface ISelector {
  active: boolean
}

const Footer: FC<IFooter> = ({ ...props }) => {
  return (
    <Wrapper>
      <NavContainer>
        <Logo>
          QPICK
        </Logo>


        <Column>
          <StyledLink>
            Избранное
          </StyledLink>
          <StyledLink>
            Корзина
          </StyledLink>
          <StyledLink>
            Контакты
          </StyledLink>
        </Column>


        <Column>
          <StyledLink>
            Условия сервиса
          </StyledLink>
          <Row>
            <Image src={ langIcon } alt='language' />
            <Selector active={false}>
              Каз
            </Selector>
            <Selector active={true}>
              Рус
            </Selector>
            <Selector active={false}>
              Eng
            </Selector>
          </Row>
        </Column>

        <Row>
          <Icon src={vkIcon} alt='VK' />
          <Icon src={tgIcon} alt='Telegram' />
          <Icon src={whatsappIcon} alt='WhatsApp' />
        </Row>
      </NavContainer>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
    background-color: ${colors.white};
    height: 150px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px 30px 0px 0px;
  `,
  Logo = styled.a`
    color: ${colors.dark};
    font-weight: 700;
    font-size: 25px;
  `,
  StyledLink = styled.a`
    cursor: pointer;
    font-weight: 400;
    font-size: 17px;
  `,
  Selector = styled.button<ISelector>`
    color: ${ props => props.active ? colors.orange : colors.dark };
    background-color: ${colors.white};
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 15px;
  `,
  Column = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  `,
  Row = styled.div`
    display: flex;
    justify-content: space-between;
  `,
  NavContainer = styled.nav`
    padding: 30px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: start;
  `,
  Icon = styled(Image)`
    cursor: pointer;
    margin-left: 18px;
  `;

export default Footer;