import React from 'react';
import { ActionsType, Product } from '../../../interfaces/types';
import { percentCalc } from '../../../utils/calculatePercentage';
import style from '../phones-list.module.scss';
import { useRouter } from 'next/router';

export const PhoneItem: React.FC<Product> = ({
  image,
  name,
  link,
  price,
  priceDiskount,
  action
}) => {
  const router = useRouter();

  const renderStickers = React.useCallback(() => {
    return action.map(item => {
      return item === ActionsType.HIT ? (
        <div className={style.phones__stickers_hit}>{item}</div>
      ) : (
        <div className={style.phones__stickers_new}>{item}</div>
      );
    });
  }, [action]);

  const renderSaleSticker = React.useCallback(() => {
    if (priceDiskount) {
      return (
        <div className={style.phones__stickers_sale}>
          {percentCalc(price, priceDiskount)}%
        </div>
      );
    }
  }, [priceDiskount, price]);

  const handleClickButton = React.useCallback(() => {
    const url = `/phone/${link}`;
    router.push(url, url);
  }, [router]);

  return (
    <div className={style.phones__item}>
      <div className={style.phones__stickers}>
        {renderStickers()} {renderSaleSticker()}
      </div>

      <div className={style.phones__imgWrap}>
        <img loading="lazy" className={style.phones__img} src={image} alt={link} />
      </div>

      <div className={style.phones__content}>
        <div className={style.phones__title}>{name.slice(0, 40).concat('...')}</div>

        <div className={style.phones__priceWrap}>
          {priceDiskount ? (
            <div className={`${style.phones__priceDef} ${style.phones__orange}`}>
              {priceDiskount.toLocaleString()} &#8381;
            </div>
          ) : null}

          {price ? (
            <div
              className={priceDiskount ? style.phones__priceDisc : style.phones__priceDef}
            >
              {price.toLocaleString()} &#8381;
            </div>
          ) : null}
        </div>

        <div className={style.phones__btnWrap}>
          <button onClick={handleClickButton} className={style.phones__btn}>
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};
