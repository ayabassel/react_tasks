import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from '../Model/productList'

export function ProductDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === +id);
  


    return (
        <div className='bg-dark p-5 text-center text-light '>
            <h2 className='text-white mb-4'>Product Details</h2>
            <div className="mt-5 d-flex justify-content-around align-items-center ">
                <img style={{height:"500px"}} src={product.src} alt="" />
                <div className="">
                    <h3>{product.productName}</h3>
                    <p>{product.description}</p>
                    <p>Price: {product.price} L.E.</p>
                </div>
            </div>
        </div>

    )
}