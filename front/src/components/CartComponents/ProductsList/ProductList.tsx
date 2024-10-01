"use client";

// Vendors
import React from 'react';

// Hooks
import { useEffect, useState } from 'react';

// Components
import RenderProductsCart from '../RenderProductsCart/RenderProductsCart';
import ButtonFinalizePurchase from '../ButtonFinalizePurchase/ButtonFinalizePurchase';

// Types
import { IProductWhitQuantity } from '@/app/products/types';

const ProductList: React.FC = (): React.ReactElement => {

    const [products, setProducts] = useState<IProductWhitQuantity[]>([]);

    useEffect(() => {

        const userData = localStorage.getItem("userData");

        const userId = userData ? JSON.parse(userData).id : null;
    
        const storedProducts = localStorage.getItem(`productsCart-${userId}`);
    
        if (storedProducts) {

            setProducts(JSON.parse(storedProducts));

        };

    }, []);

    const handleUpdateCart = (updateCart: IProductWhitQuantity[]) => {

        setProducts(updateCart);

    };

    return (

        <>
            {
                products.length > 0 ? (
                    <>
                        <table className='w-full h-96 flex flex-col items-center overflow-y-scroll scrollY'>
                            <thead className='text-[#f3f4f6] w-full border-b-2 sticky top-0 bg-[#212121]'>
                                <tr className='flex items-center h-11'>
                                    <th className='w-1/5 text-sm lg:text-base'>Producto</th>
                                    <th className='w-1/5 text-sm lg:text-base'>Precio</th>
                                    <th className='w-1/5 text-sm lg:text-base'>Cantidad</th>
                                    <th className='w-1/5 text-sm lg:text-base'>Total</th>
                                    <th className='w-1/5 text-sm lg:text-base'></th>
                                </tr>
                            </thead>
                            <tbody className='text-[#f3f4f6] w-full'>
                                <RenderProductsCart products={products} />
                            </tbody>
                        </table>
                        <ButtonFinalizePurchase handleUpdateCart={handleUpdateCart}/>
                    </>
                ) : (
                    <p className='text-[#f3f4f6] flex h-full justify-center items-center'>¡No se encontró ningún producto!</p>
                )
            }
        </>

    )

};

export default ProductList;