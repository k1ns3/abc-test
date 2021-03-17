import React from 'react';
import axios from 'axios';
import { Product } from '../../interfaces/types';
import style from './phones-list.module.scss';
import { PhoneItem } from './PhoneCard/PhoneItem';

type Props = {
  phones: Product[];
};

export const PhonesList: React.FC<Props> = ({ phones }) => {
  const [phonesState, setPhonesState] = React.useState<Product[]>(phones);
  const [page, setPage] = React.useState(1);
  const [fetching, setFetching] = React.useState(false);

  const scrollHandler = React.useCallback(event => {
    if (
      event.target.documentElement.scrollHeight -
        (event.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  React.useEffect(() => {
    if (fetching) {
      axios
        .get(`http://localhost:3001/phones?_limit=20&_page=${page}`)
        .then(({ data }) => {
          setPhonesState([...phonesState, ...data]);
          setPage(prevState => prevState + 1);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching, page, phonesState]);

  return (
    <>
      <div className={style.phones}>
        <div className={style.phones__list}>
          {phonesState.map(item => (
            <PhoneItem key={item.link} {...item} />
          ))}
        </div>
        <div style={{ height: 20 }} />
      </div>
    </>
  );
};
