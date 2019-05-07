export interface MenuResponse {
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
