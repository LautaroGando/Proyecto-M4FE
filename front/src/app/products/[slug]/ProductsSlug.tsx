// Vendors
import React from 'react';

// Components
import CardProduct from '@/components/ProductComponents/CardProduct/CardProduct';
import CategoryProduct from '@/components/ProductComponents/CategoryProduct/CategoryProduct';

const ProductsSlug: React.FC = (): React.ReactElement => {

    return (

        <div className='flex flex-col items-center justify-center gap-5 p-5'>
            <CategoryProduct />
            <div className='w-full heightPage scrollY overflow-y-scroll'>
                <CardProduct />
            </div>
        </div>

    )

};

export default ProductsSlug;