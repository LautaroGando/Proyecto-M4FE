"use client";

// Vendors
import React from 'react';

// Hooks
import { usePathname } from 'next/navigation';

// Components
import NavBar from '../NavBar/NavBar';

const Header: React.FC = (): React.ReactElement => {

    const pathname = usePathname();

    const verifyHeader = ["/login", "/register"];

    const showHeader = !verifyHeader.includes(pathname);

    return (

        <>
            {
                showHeader && (
                    <header className='w-full h-16 transition-all z-50 sticky top-0 bg-[#212121]'>
                        <NavBar />
                    </header>
                )
            }
        </>

    )

};

export default Header;