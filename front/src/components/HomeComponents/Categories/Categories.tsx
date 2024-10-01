// Vendors
import React from 'react';

// Types
import { ICategoryHome, IPropsCategory } from './types';

const Categories: React.FC<IPropsCategory<ICategoryHome>> = ({categories, renderCategories}: IPropsCategory<ICategoryHome>): React.ReactElement => {

    return (

        <div className='grid grid-cols-2 place-items-center p-5 sm:grid-cols-3 sm:p-10'>
            {
                categories.map((category: ICategoryHome) => {
                    return <div className='w-full h-auto' key={category.id}>{renderCategories(category)}</div>
                })
            }
        </div>

    )

};

export default Categories;