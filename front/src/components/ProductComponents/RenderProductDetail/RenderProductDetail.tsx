// Vendors
import React from 'react';

// Next
import Image from 'next/image';

// Hooks
import { useState } from 'react';

// Components
import ButtonAddProduct from '../ButtonAddProduct/ButtonAddProduct';

// Types
import { IPropsRenderProductDetail } from './types';
import { IProduct } from '@/app/products/types';

const RenderProductDetail: React.FC<IPropsRenderProductDetail<IProduct>> = ({product}: IPropsRenderProductDetail<IProduct>) => {

    const [quantity, setQuantity] = useState<number | null>(null);

    const handleQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {

        setQuantity(+e.target.value);

    };

    const verifyQuantity = quantity ?? 0;

    return (

        <div className="flex flex-col items-center w-5/6 h-auto p-10 gap-3 lg:flex-row lg:gap-10 lg:p-0 lg:w-5/6">
            <Image src={product.image} alt="Imagen del producto" width={400} height={400} />
            <div className="flex flex-col justify-evenly text-[#f3f4f6]">
                <div className="flex flex-col gap-10 lg:gap-3">
                    <h2 className="text-3xl font-semibold">{product.name}</h2>
                    <p className="font-light text-xl">{product.description}</p>
                </div>
                <h2 className="text-3xl font-semibold py-10">${product.price * verifyQuantity === 0 ? product.price : product.price * verifyQuantity}.00</h2>
                <div className="flex flex-col gap-10 justify-between lg:flex-row">
                    <select onChange={handleQuantity} className="w-full bg-[#212121] outline-none border-b-2 p-3 lg:w-[200px]" required>
                        <option value="">Seleccione la cantidad:</option>
                        {
                            [...Array(product.stock)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>{`${i + 1} ${i + 1 > 1 ? "Unidades" : "Unidad"}`}</option>
                            ))
                        }
                    </select>
                    <ButtonAddProduct product={product} quantity={verifyQuantity} width='w-full lg:w-[200px]' text='AGREGAR AL CARRITO' disabled={verifyQuantity === 0}/>
                </div>
            </div>
        </div>

    )

};

export default RenderProductDetail;