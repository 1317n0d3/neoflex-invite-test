import React, { FC } from 'react';
import { IStoreItem } from '../../../models/IStoreItem';

const StoreItem: FC<IStoreItem> = ({id, img, title, price, rate, oldPrice, ...props }) => {
  return (
    <div>
      `${title}`
    </div>
  );
}

export default StoreItem;