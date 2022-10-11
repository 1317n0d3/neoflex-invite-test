import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import trashIcon from '../../../assets/recycle-bin.svg';
import Image from '../../Image';

interface ICartItem {
}

const CartItem: FC<ICartItem> = ({ ...props }) => {

  return (
    <Wrapper>
      <Column>
        <ItemImage src={require(`./../../../assets/BOROFONE.png`)} alt='remove' />
        <Row>
          <Counter>
            <Button>-</Button>
            <Count>1</Count>
            <Button>+</Button>
          </Counter>
        </Row>
      </Column>
      <Column>
        <Title>Title</Title>
        <Price>2312 ₽</Price>
      </Column>
      <ColumnEnd>
        <Icon src={trashIcon} alt='remove' />
        <TotalPrice>2312 ₽</TotalPrice>
      </ColumnEnd>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    width: 633px;
    height: 218px;
    background-color: ${colors.white};
    border-radius: 30px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Column = styled.div`
    margin-left: 30px;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  ColumnEnd = styled.div`
    margin-right: 30px;
    height: 85%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  `,
  Row = styled.div`
    display: flex;
    justify-content: space-between;
  `,
  TotalPrice = styled.p`
    color: ${colors.darkBlue};
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: right;
  `,
  Price = styled.p`
    color: ${colors.priceGray};
    font-weight: 600;
    font-size: 15px;
    margin: 12px 0;
  `,
  ItemImage = styled(Image)`
    height: 135px;
  `,
  Button = styled.button`
    background-color: ${colors.orange};
    color: ${colors.white};
    font-width: 700;
    font-size: 20px;
    height: 30px;
    width: 30px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `,
  Count = styled.p`
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
  `,
  Title = styled.p`
    margin: 0;
    color: ${colors.darkBlue};
    font-weight: 500;
    font-size: 17px;
  `,
  Icon = styled(Image)`
    height: 20px;
    width: 20px;
    cursor: pointer;
  `,
  Counter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
  `;

export default CartItem;