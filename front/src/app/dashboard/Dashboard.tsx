// Vendors
import React from 'react';

// Components
import ImageUser from '@/components/DashboardComponents/ImageUser/ImageUser';
import InfoUser from '@/components/DashboardComponents/InfoUser/InfoUser';

const Dashboard: React.FC = (): React.ReactElement => {

    return (

        <div className='flex flex-col m-auto h-auto gap-10 items-center md:flex-row'>
            <ImageUser />
            <div className='h-px w-full bg-[#f3f4f6] md:w-px md:h-[300px]'></div>
            <InfoUser />
        </div>

    )

};

export default Dashboard;