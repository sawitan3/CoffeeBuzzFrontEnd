export interface Drink {
  id: number;
  name_id: number;
  size_id: number;
  price: number;
  drink_name: DrinkName[];
  drink_size: DrinkSize[];
}

export class DisplayDrink {
  name: string;
  drinkDetails: DrinkDetails[];
}

export class DrinkDetails {
  size: string;
  price: number;
  itemId: number;
}

export interface DrinkName {
  id: number;
  name: string;
}

export interface DrinkSize {
  id: number;
  size: string;
}
