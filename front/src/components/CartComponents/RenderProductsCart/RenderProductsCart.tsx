// Vendors
import React from 'react';

// Next
import Image from 'next/image';

// Types
import { IProductWhitQuantity } from '@/app/products/types';
import { IPropsRenderProductsCart } from './types';

const RenderProducts: React.FC<IPropsRenderProductsCart<IProductWhitQuantity>> = ({products}: IPropsRenderProductsCart<IProductWhitQuantity>): React.ReactElement => {

    return (

        <>
            {
                products.map((product: IProductWhitQuantity) => {
                    return (
                        <tr className='flex justify-between' key={product.id}>
                            <td className='w-1/5 h-20 flex items-center gap-2 text-sm lg:text-base'>
                                <Image src={product.image} alt='Imagen del producto' width={50} height={50}/>
                                <span className='hidden sm:block'>{product.name}</span>
                            </td>
                            <td className='w-1/5 h-20 flex items-center justify-center text-sm lg:text-base'>${product.price}.00</td>
                            <td className='w-1/5 h-20 flex items-center justify-center text-sm lg:text-base'>{product.quantity}</td>
                            <td className='w-1/5 h-20 flex items-center justify-center text-sm lg:text-base'>${product.price * product.quantity}.00</td>
                            <td className='w-1/5 h-20 flex items-center justify-center text-sm lg:text-base'>
                                <button>❌</button>
                            </td>
                        </tr>
                    )
                })
            }
        </>

    )

};

export default RenderProducts;