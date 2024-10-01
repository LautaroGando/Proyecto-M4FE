export interface IPropsButtonFinalizePurchase<Item> {
    handleUpdateCart: (handleUpdateCart: Item[]) => void;
};

export interface IUserData {
    id: number;
    orders: {
        id: string;
        status: string;
        date: string;
    }[];
}