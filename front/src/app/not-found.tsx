// Vendors
import React from "react";

// Next
import Link from "next/link";

const NotFoundPage: React.FC = (): React.ReactElement => {

    return (

        <div className="flex justify-center items-center heightPage">
            <div className="text-center max-w-full p-5">
                <h1 className="text-[90px] font-bold text-red-400 m-0">404</h1>
                <h2 className="text-xl text-[#f3f4f6] mb-4">¡Ups! Página no encontrada</h2>
                <p className="text-lg text-[#f3f4f6] mb-5">La página que estás buscando no existe o ha sido movida.</p>
                <Link href="/" className="">
                    <button className="bg-[#6ca7ec] text-[#f3f4f6] py-4 px-8 border-none rounded-md transition-all hover:bg-[#6ca7ecca]">Volver al inicio</button>
                </Link>
            </div>
        </div>

    )

};

export default NotFoundPage;