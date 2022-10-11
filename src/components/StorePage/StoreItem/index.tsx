import React, { FC } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { IStoreItem } from '../../../models/IStoreItem';
import starIcon from '../../../assets/star.svg';
import Image from '../../Image';
import { useAppDispatch } from '../../../hooks/redux';
import { cartSlice } from '../../../store/reducers/CartSlice';

const StoreItem: FC<IStoreItem> = ({id, img, title, price, rate, oldPrice, ...props }) => {
  const dispatch = useAppDispatch();
  const { addToCart } = cartSlice.actions;

  return (
    <Wrapper>

      <StyledImage src={require(`./../../../assets/${img}`)} alt={title} />

      <ColumnFlexed>
        <RowFlexed>
          <Title>{title}</Title>

          <PriceWrapper>
            <Price>{price} ₽</Price>
            {oldPrice ? <OldPrice>{oldPrice} ₽</OldPrice> : undefined}
          </PriceWrapper>
        </RowFlexed>

        <RowFlexed>
          <Rate>
            <Image src={starIcon} alt='rating' />
            {rate}
          </Rate>
          <Button onClick={() => dispatch(addToCart({item: {id, img, title, price, rate, oldPrice}}))}>Купить</Button>
        </RowFlexed>
      </ColumnFlexed>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    width: 350px;
    height: 407px;
    background-color: ${colors.white};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
  Title = styled.p`
    color: ${colors.darkBlue};
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
  `,
  Price = styled.p`
    color: ${colors.orange};
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
  `,
  OldPrice = styled.p`
    color: ${colors.orange};
    position: absolute;
    top: 25px;
    left: 5px;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-decoration-line: line-through;
  `,
  PriceWrapper = styled.div`
    position: relative;
  `,
  Rate = styled.p`
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: ${colors.gray};
  `,
  RowFlexed = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Button = styled.button`
    cursor: pointer;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    border: none;
    border-radius: 10px;
    color: ${colors.dark};
    background-color: ${colors.white};
  `,
  StyledImage = styled(Image)`
    margin-top: 20px;
    width: 210px;
  `,
  ColumnFlexed = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
  `;

export default StoreItem;