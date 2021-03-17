import React from 'react';
import { PhonesList } from '../components/PhonesList/PhonesList';
import style from '../styles/home.module.scss';

export default function Home({ phones }) {
  return (
    <div className={style.container}>
      <PhonesList phones={phones} />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  if (!req) {
    return { phones: null };
  }
  const response = await fetch(`http://localhost:3001/phones?_limit=20&_page=0`);
  const phones = await response.json();
  return {
    props: { phones }
  };
}
