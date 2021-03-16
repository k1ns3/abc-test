import React from 'react';
import { Product } from '../../interfaces/types';
import style from './phones-list.module.scss';
import { PhoneItem } from './PhoneCard/PhoneItem';

type Props = {
  pizzas: Product[];
};

//TODO: сделать lazyLoad

export const PhonesList: React.FC<Props> = ({ pizzas }) => {
  return (
    <div className={style.phones}>
      <div className={style.phones__list}>
        {pizzas.map(item => (
          <PhoneItem key={item.link} {...item} />
        ))}
      </div>
    </div>
  );
};
