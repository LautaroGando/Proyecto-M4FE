// Vendors
import React from 'react';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ImageUser: React.FC = (): React.ReactElement => {

    return (

        <div className='bg-[#373737] w-36 h-36 rounded-full flex items-center justify-center overflow-hidden'>
            <FontAwesomeIcon className='text-8xl text-[#212121]' icon={faUser} />
        </div>

    )

};

export default ImageUser;