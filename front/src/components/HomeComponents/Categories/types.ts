import React from "react";

export interface ICategory {
    id: number;
    name: string;
};

export interface ICategoryHome extends ICategory {
    image: string;
    link: string;
}

export interface IPropsCategory<Item> {
    categories: Item[];
    renderCategories: (category: ICategoryHome) => React.ReactNode;
};