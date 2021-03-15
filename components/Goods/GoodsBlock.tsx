import React from 'react';
import { Product } from '../../interfaces/types';
import style from './goods-block.module.scss';
import { PhoneCard } from '../PhoneCard/PhoneCard';

type Props = {
  pizzas: Product[];
};

export const GoodsBlock: React.FC<Props> = ({ pizzas }) => {
  return (
    <div className={style.goodsBlock}>
      <div className={style.label}>
        <h3>Товары</h3>
        <div className={style.goodsList}>
          {pizzas.map(item => (
            <PhoneCard key={item.link} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
