// Vendors
import React from 'react';

// Components
import RenderOrdersList from '../RenderOrdersList/RenderOrdersList';

const OrdersList: React.FC = (): React.ReactElement => {

    return (

        <div className='w-full h-96 flex flex-col items-center overflow-y-scroll scrollY p-5'>
            <RenderOrdersList />
        </div>

    )

};

export default OrdersList;