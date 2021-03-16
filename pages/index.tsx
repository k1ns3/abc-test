import React from 'react';
import axios from 'axios';
import { PhonesList } from '../components/PhonesList/PhonesList';
import style from '../styles/home.module.scss';
import { Product } from '../interfaces/types';

export default function Home() {
  const [phones, setPhones] = React.useState<Product[]>([]);

  React.useEffect(() => {
    axios.get(`http://localhost:3001/phones`).then(({ data }) => {
      setPhones(data);
    });
  }, []);

  return (
    <div className={style.container}>
      <PhonesList pizzas={phones} />
    </div>
  );
}
