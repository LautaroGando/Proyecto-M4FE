"use client";

// Vendors
import React from 'react';

// Next
import Link from 'next/link';

// Hooks
import { useToken } from '@/context/TokenContext/TokenContext';
import { useEffect, useState } from 'react';

// Types
import { IPropsInfoUser } from './types';

const InfoUser: React.FC = (): React.ReactElement => {

    const { handleLogout } = useToken();
    const [userData, setUserData] = useState<IPropsInfoUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const user = localStorage.getItem("userData");

        const parsedUser = user ? JSON.parse(user) : null;

        setUserData(parsedUser);
        setLoading(false);

    }, []);

    return (

        <div className='text-[#f3f4f6] flex flex-col gap-3 justify-between text-lg p-5'>
            {
                loading ? (
                    <p className='text-[#f3f4f6] flex h-full justify-center items-center'>Cargando...</p>
                ) : (
                    <>
                        <h4 className='font-light'>
                            <strong className='font-semibold'>Nombre: </strong>
                            {userData?.name}
                        </h4>
                        <h4 className='font-light'>
                            <strong className='font-semibold'>Correo electrónico: </strong>
                            {userData?.email}
                        </h4>
                        <h4 className='font-light'>
                            <strong className='font-semibold'>Dirección: </strong>
                            {userData?.address}
                        </h4>
                        <h4 className='font-light'>
                            <strong className='font-semibold'>Teléfono: </strong>
                            {userData?.phone}
                        </h4>
                        <div className='mt-5 flex justify-between gap-5'>
                            <Link className='w-36 px-5 py-3 text-sm rounded-md transition-all bg-[#6ca7ec] flex justify-center hover:bg-[#6ca7ecc4] md:text-base md:w-44' href="/orders">ORDENES</Link>
                            <button onClick={handleLogout} className='w-36 px-5 text-sm flex justify-center py-3 rounded-md transition-all bg-red-400 hover:bg-[#b54e4e] md:text-base md:w-44'>CERRAR SESIÓN</button>
                        </div>
                    </>
                )
            }
        </div>

    )

};

export default InfoUser;