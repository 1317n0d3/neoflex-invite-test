import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import StoreItem from '../StoreItem';

interface IStore {
  favorites?: number,
  cart?: number
}

const Store: FC<IStore> = ({ favorites = 0, cart = 0, ...props }) => {
  const products = useAppSelector(state => state.storeReducer.products)
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
    <div>
      { products }
    </div>
  );
}

export default Store;