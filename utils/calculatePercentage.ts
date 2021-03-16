/**
 * Функция вычисления процента на основе новой и старой цены
 * @param oldPrice - старая цена
 * @param newPrice - новая цена
 */

export const percentCalc = (oldPrice: number, newPrice: number): number => {
  return Math.ceil(((newPrice - oldPrice) / oldPrice) * 100);
};
