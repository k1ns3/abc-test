import React from 'react';
import { PhoneItem } from '../../components/PhonesList/PhoneCard/PhoneItem';
import style from '../../styles/home.module.scss';

export default function PhonePage({ phone }) {
  return (
    <div className={style.container}>
      {phone ? (
        <PhoneItem
          image={phone.image}
          name={phone.name}
          link={phone.link}
          price={phone.price}
          priceDiskount={phone.priceDiskount}
          action={phone.action}
        />
      ) : (
        <div className={style.error}>Такого товара не существует </div>
      )}
    </div>
  );
}

export async function getServerSideProps({ query, req }) {
  if (!req) {
    return { phone: null };
  }

  const response = await fetch(`http://localhost:3001/phones?link=${query.phoneId}`);
  const [phone] = await response.json();
  return {
    props: { phone: phone ?? null }
  };
}
