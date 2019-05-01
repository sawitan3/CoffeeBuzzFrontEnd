export class Drink {
  id: number;
  name_id: number;
  size_id: number;
  price: number;
  drink_name: {
    id: number;
    name: string;
  }[];
  drink_size: {
    id: number;
    size: string;
  }[];
}
