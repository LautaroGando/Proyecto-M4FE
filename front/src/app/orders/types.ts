export interface IOrder<Item> {
    id: number;
    status: string;
    date: string;
    products: Item[];  
};