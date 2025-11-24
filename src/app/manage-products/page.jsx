import Mydiv from '@/components/Shared/Mydiv';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const ManageProducts = async () => {
    const user = await currentUser()
    const email = user.emailAddresses[0].emailAddress
    const res = await fetch(`http://localhost:3100/products?email=${email}`)
    const products = await res.json()
    console.log(products)
    return (
        <Mydiv>
            <div className="overflow-x-auto">
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
                    products.map((product,i) =><tr key={product._id} >
                            <th>
                              {i+1}
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
                                <button className='btn hover:btn-error'><MdDeleteForever /></button>
                            </th>
                        </tr> )
                    }
                                   
                    </tbody>
                </table>
            </div>
        </Mydiv>
    );
};

export default ManageProducts;