// Vendors
import React from "react";

// Next
import Image from "next/image";

// Types
import { IOffer } from "./types";

export const offers: IOffer[] = [
    {
        id: 1,
        image: "https://www.macstation.com.ar/web/image/product.image/525/image_1024/AirPods%20Pro%20%282nd%20generation%29?unique=edd59f1",
        discount: "50%",
    },
    {
        id: 2,
        image: "https://todoapplecaba.com.ar/wp-content/uploads/2021/03/iphone11-purple-select-2019.png",
        discount: "25%",
    },
    {
        id: 3,
        image: "https://outtec.com.ar/wp-content/uploads/2021/09/apple-mg143ll-a_11-70264a5df169d47b2516027743338172-640-0.png",
        discount: "75%",
    },
];

export const renderOffers = (offers: IOffer): React.ReactElement => {

    return (

        <div className="relative w-[300px] h-full -z-10">
            <Image src={offers.image} alt="Oferta" width={300} height={400}/>
            <span className="flex justify-center items-center text-5xl font-bold absolute bottom-0 right-0 bg-[#6ca7ec] text-[#f3f4f6] w-1/2 h-32 rounded-tl-3xl">{offers.discount}</span>
        </div>

    )

};