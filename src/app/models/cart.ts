export type ItemType = 'food' | 'drink';

export interface ItemPayload {
  item_type: ItemType;
  food_id?: number;
  drink_id?: number;
}

export interface OrderListPayload {
  qty: number;
  user_id: number;
  item_id: number;
}

export interface OrderListResponse {
  id: number;
  user_id: number;
  item_id: number;
  qty: number;
}
