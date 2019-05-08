export interface ApiResponse {
    data: any;
}

export class MenuItem {
    name: string;
    menuDetails: MenuDetails[];
}

export class MenuDetails {
    size?: string;
    qty?: number;
    price: number;
    itemId: number;
}


export interface User {
    id: number;
    username: string;
    email: string;
    role_id: number;
}

export enum Role {
    Manager = 1,
    Barista = 2,
    Customer = 3
}
