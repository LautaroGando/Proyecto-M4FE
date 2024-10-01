// Vendors
import React from 'react';

// Components
import CardProductDetail from '@/components/ProductComponents/CardProductDetail/CardProductDetail';

// Types
import { IPropsDetailProduct } from './types';

const ProductDetail: React.FC<IPropsDetailProduct> = ({ params: { id } }): React.ReactElement => {

    return (

        <div>
            <CardProductDetail id={+id} />
        </div>

    )

};

export default ProductDetail;