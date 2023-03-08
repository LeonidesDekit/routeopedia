import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const { productId } = useParams();
    return (
        <div className='text-white'>
            <span>ProductDetails</span>
            <br />
            <span>Product Id : {productId}</span>
        </div>
    )
}

export default ProductDetails