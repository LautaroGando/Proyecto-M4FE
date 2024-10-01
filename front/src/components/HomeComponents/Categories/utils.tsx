// Vendors
import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Types
import { ICategoryHome } from "./types";

// Styles
import styles from "./Categories.module.css";

export const categories: ICategoryHome[] = [
    {
        id: 1,
        name: 'Smartphones',
        image: "/assets/images/smartphones.png",
        link: '/products/smartphones',
    },
    {
        id: 2,
        name: 'Laptops',
        image: "/assets/images/laptops.png",
        link: '/products/laptops',
    },
    {
        id: 3,
        name: 'Tablets',
        image: "/assets/images/tablets.png",
        link: '/products/tablets',
    },
    {
        id: 4,
        name: 'Headphones',
        image: "/assets/images/headphones.png",
        link: '/products/headphones',
    },
    {
        id: 5,
        name: 'Cameras',
        image: "/assets/images/cameras.png",
        link: '/products/cameras',
    },
    {
        id: 6,
        name: 'Printers',
        image: "/assets/images/printers.png",
        link: '/products/printers',
    },
    {
        id: 7,
        name: 'Monitors',
        image: "/assets/images/monitors.png",
        link: '/products/monitors',
    },
    {
        id: 8,
        name: 'Storage',
        image: "/assets/images/storages.png",
        link: '/products/storage',
    },
    {
        id: 9,
        name: 'Accesories',
        image: "/assets/images/accesories.png",
        link: '/products/accesories',
    },
];

export const renderCategories = (categories: ICategoryHome): React.ReactElement => {

    return (

        <div className={styles.cardCategory}>
            <Link className="relative w-[380px] h-[300px]" href={categories.link}>
                <Image className="w-full h-[180px] object-cover" src={categories.image} alt="Imagen del producto" width={400} height={200} />
                <div className="w-full h-full bg-[#212121c4] absolute bottom-0 flex justify-start items-end p-3 backdrop-blur-sm transition-all">
                    <span className="textStrokeWhite text-xl translate-x-0 font-bold sm:text-2xl md:text-3xl">{categories.name}</span>
                </div>
            </Link>
        </div>

    )

};