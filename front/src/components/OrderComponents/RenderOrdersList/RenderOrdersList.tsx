"use client";

// Vendors
import React from 'react';

// Next
import Image from 'next/image';

// Hooks
import { useToken } from '@/context/TokenContext/TokenContext';
import { useEffect, useState } from 'react';

// Types
import { IOrder } from '@/app/orders/types';
import { IProduct } from '@/app/products/types';

// Helpers
import { getOrdersFetch } from '@/helpers/getOrdersFetch';

const RenderOrdersList: React.FC = (): React.ReactElement => {

    const { token } = useToken();
    const [orders, setOrders] = useState<IOrder<IProduct>[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchData = async () => {

            const ordersData = token ? await getOrdersFetch(token) : [];

            setOrders(ordersData);
            setLoading(false);

        };

        fetchData();

    }, [token, loading]);

    const formatDate = (dateString: string) => {

        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}`;

    };

    return (

        <div className='w-full flex flex-col gap-5 h-full'>
            {
                loading ? (
                    <p className='text-[#f3f4f6] flex h-full justify-center items-center'>Cargando...</p>
                ) : orders.length > 0 ? (
                    orders.map((order: IOrder<IProduct>) => {
                        return (
                            <div className='flex flex-col gap-5 bg-[#373737] p-5 justify-between items-center text-[#f3f4f6] md:flex-row' key={order.id}>
                                <p className='font-semibold'>{formatDate(order.date)}</p>
                                <div className='flex flex-wrap gap-5 justify-center'>
                                    {
                                        order.products.map((product: IProduct) => {
                                            return (
                                                <div className='h-36 w-36' key={product.id}>
                                                    <div className='flex flex-col justify-between items-center gap-5 h-full'>
                                                        <Image src={product.image} alt='Imagen del producto' width={80} height={80} />
                                                        <p className='text-sm'>{product.name}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className='font-semibold text-[#6ca7ec]'>{order.status}</p>
                            </div>
                        )
                    })
                ) : (
                    <p className='text-[#f3f4f6] flex h-full justify-center items-center'>¡No se encontró ninguna orden!</p>
                )
            }
        </div>

    )

};

export default RenderOrdersList;