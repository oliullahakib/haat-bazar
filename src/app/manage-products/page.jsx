'use client'

import DeleteButton from '@/components/Shared/DeleteButton';
import Mydiv from '@/components/Shared/Mydiv';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    const { user, isLoaded } = useUser()
    const [products, setProducts] = useState([])
    const [reFetch, setReFetch] = useState()
    useEffect(() => {
        if (isLoaded && user) {
            const email = user?.emailAddresses[0]?.emailAddress
            axios.get(`http://localhost:3100/products?email=${email}`)
                .then(res => setProducts(res.data))
        }

    }, [isLoaded, user, reFetch])


    return (
        <Mydiv>
            {
                products.length===0?<div className='flex flex-col justify-center items-center mt-8'>
                    <h1 className='text-4xl text-accent'>No data Available!</h1>
                    <Link className='btn btn-primary mt-5' href={'/add-product'}>Add Product</Link>
                </div>
                :<div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                SL
                            </th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id} >
                                <th>
                                    {i + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={product.image}
                                                    alt="product image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product.name}</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{product.price}tk</p>
                                </td>
                                <td>{product.category}</td>
                                <th>
                                    <Link href={`/product/${product._id}`} className="btn hover:btn-success">Details</Link>
                                    <DeleteButton reFetch={setReFetch} productId={product._id} />
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            }
        </Mydiv>
    );
};

export default ManageProducts;