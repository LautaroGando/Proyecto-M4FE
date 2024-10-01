// Vendors
import React from 'react';

// Next
import Link from 'next/link';

// Types
import { ILinks } from '@/utils/Links/types';

// Utils
import { links } from '@/utils/Links/links';

const Menu: React.FC = (): React.ReactElement => {

    return (

        <div className=''>
            {
                links.map((link: ILinks) => {
                    return <Link key={link.id} href={link.link}>{link.name}</Link>
                })
            }
        </div>

    )

};

export default Menu;