import React from 'react'
import { useNavigate } from 'react-router-dom'
function CreateProduct() {
    const navigate = useNavigate();
    return (
        <div>
            <span className='text-white h2'>CreateProduct</span>
            <br />
            <button onClick={() => {
                navigate(-1)
            }}>Go Back</button>
        </div>
    )
}

export default CreateProduct