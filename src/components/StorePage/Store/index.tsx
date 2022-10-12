import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { useAppSelector } from '../../../hooks/redux';
import { headphones, wirelessHeadphones } from '../../../mock';
import StoreItem from '../StoreItem';

interface IStore {
}

const Store: FC<IStore> = ({ ...props }) => {
  const data1 = headphones
    .map(product => <StoreItem
      key={`product-`+ product.id}
      id={product.id}
      img={product.img} 
      title={product.title} 
      price={product.price}
      rate={product.rate}
      oldPrice={product?.oldPrice}
      />)

    const data2 = wirelessHeadphones
    .map(product => <StoreItem
      key={`product-`+ product.id}
      id={product.id}
      img={product.img} 
      title={product.title} 
      price={product.price}
      rate={product.rate}
      oldPrice={product?.oldPrice}
      />)
  

  return (
    <Wrapper>
      <Category>Наушники</Category>
      <ItemsWrapper>{ data1 }</ItemsWrapper>
      <Category>Беспроводные наушники</Category>
      <ItemsWrapper>{ data2 }</ItemsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    margin-top: 28px;
  `,
  Category = styled.p`
    color: ${colors.gray};
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  `,
  ItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  `;

export default Store;