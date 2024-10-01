"use client";

// Vendors
import React from 'react';

// Hooks
import { useProducts } from '@/hooks/useProducts';
import { usePathname, useRouter } from 'next/navigation';

// Components
import { categories } from '@/components/HomeComponents/Categories/utils';

// Types
import { ICategoryHome } from '@/components/HomeComponents/Categories/types';
import { IProduct } from '@/app/products/types';

// Utils
import { renderProducts } from './utils';

const CardProduct: React.FC = (): React.ReactElement | null => {

    const { products, loading } = useProducts();
    const pathname = usePathname();
    const router = useRouter();

    const categoryPath = pathname.split("/")[2];

    const validCategories = ['smartphones', 'laptops', 'tablets', 'headphones', 'cameras', 'printers', 'monitors', 'storage', 'accesories'];

    if (!validCategories.includes(categoryPath)) {

        router.push("/not-found");

        return null;

    };

    const selectedCategory = categories.find((category: ICategoryHome) => category.name.toLowerCase() === categoryPath);

    const filterProducts = products.filter((product: IProduct) => product.categoryId === selectedCategory?.id);

    return (

        <div className='flex w-full h-full flex-wrap justify-center gap-3'>
            {
                loading ? (
                    <p className='text-[#f3f4f6] self-center text-lg'>Cargando...</p>
                ) : (
                    filterProducts.length > 0 ? (
                        filterProducts.map((product: IProduct) => {
                            return <div className='bg-[#f3f4f6] w-[300px] h-[400px]' key={product.id}>{renderProducts(product)}</div>
                        })
                    ) : (
                        <p className='text-[#f3f4f6] self-center text-lg'>¡No se encontró ningún producto!</p>
                    )
                )
            }
        </div>

    )

};

export default CardProduct;