import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { useAppSelector } from '../../../hooks/redux';
import CartItem from '../CartItem';

interface ICart {
}

const Cart: FC<ICart> = ({ ...props }) => {
  const products = useAppSelector(state => state.cartReducer.products);
  const productsElems = products.map(product => <CartItem
    cartCount={product.cartCount}
    id={product.id}
    img={product.img}
    price={product.price}
    rate={product.rate}
    title={product.title}
    key={`cart-item-${product.id}`}
    oldPrice={product.oldPrice}
  />)

  const totalPrice = products.reduce((prev, curr) => {
    return prev + curr.cartCount * curr.price
  }, 0)


  return (
    <Wrapper>
      <Category>Корзина</Category>
      <FlexDiv>
        <ItemsWrapper>
          { productsElems }
        </ItemsWrapper>


        <TotalPrice>
          <FlexRow>
            <Paragraph>ИТОГО</Paragraph>
            <Paragraph>₽ {totalPrice}</Paragraph>
          </FlexRow>
          <Button>Перейти к оформлению</Button>
        </TotalPrice>
      </FlexDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    min-height: 100vh;
  `,
  Category = styled.p`
    color: ${colors.darkBlue};
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  `,
  TotalPrice = styled.div`
    width: 350px;
    height: 115px;
    background-color: ${colors.white};
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  `,
  Button = styled.button`
    width: 100%;
    height: 65px;
    cursor: pointer;
    border: none;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: ${colors.white};
    background-color: ${colors.dark};
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
  `,
  FlexRow = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Paragraph = styled.p`
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
  `,
  ItemsWrapper = styled.div``,
  FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `;

export default Cart;