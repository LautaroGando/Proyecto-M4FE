"use client";

// Vendors
import React from 'react';

// Hooks
import { useToken } from '@/context/TokenContext/TokenContext';
import { useState, useEffect } from 'react';

// Types
import { IProduct, IProductWhitQuantity } from '@/app/products/types';
import { IPropsButtonFinalizePurchase, IUserData } from './types';

// Helpersy
import { postOrdersFetch } from '@/helpers/postOrdersFetch';

const ButtonFinalizePurchase: React.FC<IPropsButtonFinalizePurchase<IProductWhitQuantity>> = ({ handleUpdateCart }: IPropsButtonFinalizePurchase<IProductWhitQuantity>): React.ReactElement | null => {

    const { token } = useToken();
    const [userData, setUserData] = useState<IUserData | null>(null);

    useEffect(() => {

        const storedUserData = localStorage.getItem("userData");

        if (storedUserData) {

            setUserData(JSON.parse(storedUserData));

        };

    }, [token]);

    if (!userData) return null;

    const userId = userData.id;

    const storedProducts = localStorage.getItem(`productsCart-${userId}`);

    const productsCart = storedProducts ? JSON.parse(storedProducts) : [];

    const productsCartId = productsCart.map((product: IProduct) => product.id);

    const fetchData = async () => {

        const ordersData = token ? await postOrdersFetch(token, userId, productsCartId) : null;

        const updatedOrders = [...userData?.orders, {
            id: ordersData.id,
            status: "approved",
            date: new Date().toISOString(),
        }];

        const updatedUserData = {
            ...userData,
            orders: updatedOrders,
        };

        setUserData(updatedUserData);

        localStorage.setItem("userData", JSON.stringify(updatedUserData));

        localStorage.removeItem(`productsCart-${userId}`);

        handleUpdateCart([]);

    };

    return <button onClick={() => fetchData()} className='btn bg-[#6ca7ec] w-52 m-auto mt-5 hover:bg-[#6ca7ecca]'>FINALIZAR COMPRA</button>

};

export default ButtonFinalizePurchase;