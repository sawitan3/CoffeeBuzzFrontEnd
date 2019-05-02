export interface Drink {
  id: number;
  name_id: number;
  size_id: number;
  price: number;
  drink_name: DrinkName[];
  drink_size: DrinkSize[];
}

export interface DrinkName {
  id: number;
  name: string;
}

export interface DrinkSize {
  id: number;
  size: string;
}
