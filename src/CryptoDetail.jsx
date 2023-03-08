import React from 'react'
import { useParams } from 'react-router-dom'

function CryptoDetail() {
    const { cryptoSymbol, id } = useParams();
    return (
        <div className="text-white">
            <h4>CryptoDetail</h4>
            <span>Symbol : {cryptoSymbol}</span>
            <br />
            <span>ID : {id}</span>
        </div>
    )
}

export default CryptoDetail