// Список вариаций
export enum ActionsType {
  HIT,
  NEW
}

// Товар
export interface Product {
  // Изображение
  image: string;
  // Название
  name: string;
  // Ссылка для перхода
  link: string;
  // Актуальная цена
  price: number;
  // Цена со скидкой
  priceDiskount: number;
  // Акции
  action?: ActionsType[];
}
