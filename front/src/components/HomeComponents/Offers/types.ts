import React from "react";

export interface IOffer {
    id: number;
    image: string;
    discount: string;
};

export interface IPropsOffer<Item> {
    offers: Item[];
    renderOffer: (offer: Item) => React.ReactNode;
};