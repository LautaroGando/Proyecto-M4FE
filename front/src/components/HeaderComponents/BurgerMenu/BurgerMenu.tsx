// Vendors
import React from 'react';

// Next
import Link from 'next/link';

// Hooks
import { useMenu } from '@/context/MenuContext/MenuContext';

// Types
import { ICategoryHome } from '@/components/HomeComponents/Categories/types';
import { IPropsBurgerMenu } from './types';

// Styles
import styles from "./BurgerMenu.module.css";

const BurgerMenu: React.FC<IPropsBurgerMenu<ICategoryHome>> = ({links}: IPropsBurgerMenu<ICategoryHome>): React.ReactElement => {

    const {menu, handleToggleMenu, handleCloseMenu} = useMenu();

    return (

        <div>
            <input onChange={handleToggleMenu} className={`${styles.input} hidden`} type="checkbox" checked={menu} id="inputCheck" />
            <label htmlFor="inputCheck" className={`${styles.label} w-8 h-8 flex justify-center items-center relative cursor-pointer after:content-[""] after:absolute after:w-8 after:h-[2px] after:bg-[#f3f4f6] after:translate-y-[10px] after:transition-all before:content-[""] before:absolute before:w-8 before:h-[2px] before:bg-[#f3f4f6] before:-translate-y-[10px] before:transition-all`}>
                <span className={`${styles.line} block w-8 h-[2px] bg-[#f3f4f6] transition-all`}></span>
            </label>
            <div className={`${styles.menu} absolute top-16 left-0 bg-[#212121] w-full p-0 h-0 transition-all grid grid-cols-2 z-50 place-content-center place-items-center gap-5 overflow-hidden sm:grid-cols-3`}>
                {
                    links.map((link: ICategoryHome) => {
                        return (
                            <div onClick={handleCloseMenu} className='border-transparent border-b-2 transition-all hover:border-b-2 hover:border-[#f3f4f6]' key={link.id}>
                                <Link href={link.link}>{link.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )

};

export default BurgerMenu;