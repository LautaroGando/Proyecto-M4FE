"use client";

// Vendors
import React from 'react';

// Hooks
import { useProducts } from '@/hooks/useProducts';

// Components
import RenderProductDetail from '../RenderProductDetail/RenderProductDetail';

// Types
import { IPropsProductId } from './types';
import { IProduct } from '@/app/products/types';

const CardProductDetail: React.FC<IPropsProductId> = ({ id }: IPropsProductId): React.ReactElement => {

    const { products, loading } = useProducts();

    const filterProduct = products.filter((product: IProduct) => product.id === id);

    return (

        <div className='flex justify-center'>
            {
                loading ? (
                    <p className='text-[#f3f4f6] w-full text-center text-lg'>Cargando...</p>
                ) : (
                    filterProduct.length > 0 ? (
                        filterProduct.map((product: IProduct) => {
                            return <RenderProductDetail key={product.id} product={product} />
                        })
                    ) : (
                        <p className='text-[#f3f4f6] flex h-full justify-center items-center'>¡No se encontró ningún producto!</p>
                    )
                )
            }
        </div>

    )

};

export default CardProductDetail;