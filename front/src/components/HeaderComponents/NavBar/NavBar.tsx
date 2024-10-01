// Vendors
import React from 'react';

// Next
import Link from 'next/link';

// Hooks
import { useMenu } from '@/context/MenuContext/MenuContext';
import { useToken } from '@/context/TokenContext/TokenContext';

// Components
import BurgerMenu from '../BurgerMenu/BurgerMenu';

// Utils
import { links } from '../BurgerMenu/utils';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const NavBar: React.FC = (): React.ReactElement => {

    const { token } = useToken();
    const { handleCloseMenu } = useMenu();

    return (

        <nav className='flex justify-between items-center h-full px-10 text-[#f3f4f6]'>
            <Link onClick={handleCloseMenu} className='font-bold text-2xl' href="/">TechZen</Link>
            <div className='flex items-center justify-between w-32'>
                {
                    token ? (
                        <>
                            <Link onClick={handleCloseMenu} href="/dashboard">
                                <FontAwesomeIcon className='text-2xl' icon={faUser} />
                            </Link>
                            <Link onClick={handleCloseMenu} href="/cart">
                                <FontAwesomeIcon className='text-2xl' icon={faCartShopping} />
                            </Link>
                        </>
                    ) : (
                        <Link href="/login">Ingresar</Link>
                    )
                }
                <BurgerMenu links={links} />
            </div>
        </nav>

    )

};

export default NavBar;