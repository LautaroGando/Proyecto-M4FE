// Next
import Link from "next/link";
import Image from "next/image";

// Components
import ButtonAddProduct from "../ButtonAddProduct/ButtonAddProduct";

// Types
import { IProduct } from "@/app/products/types";

export const renderProducts = (products: IProduct): React.ReactElement => {

    return (

        <div className="flex flex-col items-center h-full justify-between px-2 py-1">
            <Image className="w-auto h-[260px] object-contain" src={products.image} alt="Imagen del producto" width={180} height={0} />
            <div className="flex justify-between w-full text-[#212121] text-xl">
                <h3 className="text-lg">{products.name}</h3>
                <h3 className="font-semibold">{`$${products.price}.00`}</h3>
            </div>
            <div className="flex justify-between w-full gap-1">
                <Link className="btn w-32 bg-[#373737] hover:bg-[#373737ca]" href={`/products/detail/${products.id}`}>DETALLE</Link>
                <ButtonAddProduct product={products} quantity={1} width="w-[128px]" text="AGREGAR" disabled={false}/>
            </div>
        </div>

    )

};