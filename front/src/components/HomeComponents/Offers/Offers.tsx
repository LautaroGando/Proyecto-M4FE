// Vendors
import React from 'react';

// Types
import { IOffer, IPropsOffer } from './types';

const Offers: React.FC<IPropsOffer<IOffer>> = ({offers, renderOffer}: IPropsOffer<IOffer>): React.ReactElement => {

    return (

        <div className='flex gap-3 items-center overflow-x-scroll h-auto scrollX'>
            {
                offers.map((offer: IOffer) => {
                    return <div className='h-full' key={offer.id}>{renderOffer(offer)}</div>
                })
            }
        </div>

    )

};

export default Offers;