import React from 'react';
import { Product } from '../../interfaces/types';
import style from './phone-card.module.scss';

export const PhoneCard: React.FC<Product> = ({
  image,
  name,
  link,
  price,
  priceDiskount,
  action
}) => {
  return (
    <div className={style.phoneCard}>
      <div className={style.phoneCard__img}>
        <img src={image} alt={name} />
      </div>

      <div className={style.phoneCard__title}>{name}</div>

      <div className={style.price}>
        <div className={style.price__default_sale}>{price}</div>
        <div className={style.price__discount}>{priceDiskount}</div>
      </div>
    </div>
  );
};
