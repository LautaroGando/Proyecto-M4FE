// Vendors
import React from 'react';

// Components
import OrdersList from '@/components/OrderComponents/OrdersList/OrdersList';

const Orders: React.FC = (): React.ReactElement => {

    return (

        <div className='w-5/6 m-auto h-[400px]'>
            <OrdersList />
        </div>

    )

};

export default Orders;