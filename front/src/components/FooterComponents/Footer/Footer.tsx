"use client";

// Vendors
import React from 'react';

// Hooks
import { usePathname } from 'next/navigation';

// Utils
import { date } from '@/utils/Date/date';

const Footer: React.FC = (): React.ReactElement => {

    const pathname = usePathname();

    const verifyFooter = ["/login", "/register"];

    const showFooter = !verifyFooter.includes(pathname);

    return (

        <>
            {
                showFooter && (
                    <footer className='w-full h-20 flex justify-center items-center shadow-2xl shadow-[#f3f4f6]'>
                        <p className='text-[#f3f4f6]'>&copy;Copyright TechZen {date}</p>
                    </footer>
                )
            }
        </>

    )

};

export default Footer;