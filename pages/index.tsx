import React from 'react';
import axios from 'axios';
import { GoodsBlock } from '../components/Goods/GoodsBlock';
import style from '../styles/home.module.scss';
import { Product } from '../interfaces/types';

export default function Home() {
  const [phones, setPhones] = React.useState<Product[]>([]);

  React.useEffect(() => {
    axios.get(`http://localhost:3001/phones`).then(({ data }) => {
      setPhones(data);
    });
  }, []);

  console.log(phones);

  return (
    <div className={style.goodsWrapper}>
      <GoodsBlock pizzas={phones} />
    </div>
  );
}
