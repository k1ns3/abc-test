import React from 'react';
import { PhoneItem } from '../../components/PhonesList/PhoneCard/PhoneItem';

export default function PhonePage({ phone }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      <PhoneItem
        image={phone[0].image}
        name={phone[0].name}
        link={phone[0].link}
        price={phone[0].price}
        priceDiskount={phone[0].priceDiskount}
        action={phone[0].action}
      />
    </div>
  );
}

export async function getServerSideProps({ query, req }) {
  if (!req) {
    return { phone: null };
  }

  const response = await fetch(`http://localhost:3001/phones?link=${query.phoneId}`);
  const phone = await response.json();
  return {
    props: { phone }
  };
}
