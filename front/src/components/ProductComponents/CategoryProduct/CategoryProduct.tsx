"use client";

// Vendors
import React from 'react';

// Hooks
import { usePathname, useRouter } from 'next/navigation';

const CategoryProduct: React.FC = (): React.ReactElement | null => {

    const pathname = usePathname();
    const router = useRouter();

    const category = pathname.split("/")[2];

    const validCategories = ['smartphones', 'laptops', 'tablets', 'headphones', 'cameras', 'printers', 'monitors', 'storage', 'accesories'];

    if (!validCategories.includes(category)) {

        router.push("/not-found");

        return null;

    };

    return <h1 className='textStrokeWhite text-5xl text-transparent font-bold capitalize self-start sm:text-6xl'>{category}</h1>

};

export default CategoryProduct;