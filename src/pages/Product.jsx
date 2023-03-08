import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Product() {
    const navigate = useNavigate();
    const [goToProduct, setGoToProduct] = useState(() => {
        return false;
    })
    return (
        <div>
            <span className='text-white h2'>Product</span>
            <br />
            <button onClick={() => {
                navigate("/product/create")
            }}>Add Product{" "}</button>
            <Link to={`/product/details/3`}>
                <button>Navigate to Product Detail - 3</button>
            </Link>

            {
                goToProduct && <Navigate to="/product/details/5" />
            }
            <button onClick={() => {
                setGoToProduct({ goToProduct: true })
            }}>Navigate to product - 5</button>
        </div>
    )
}

export default Product