import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoStarSharp } from 'react-icons/io5';
import { MdLocationOn } from "react-icons/md";


const ProductDetails = async ({ params }) => {
    const res = await params
    const id = res.id
    const result = await fetch(`https://haat-bazar-server.vercel.app/product/${id}`)
    const product = await result.json()
    
    const { name, image, price, rating, description, _id, category, min_quantity, max_quantity, location, arrival_days } = product
    return (
        <div>
            <div className="hero min-h-screen">
                <title>Game Hub - App Details</title>
                <div className="hero-content flex-col gap-8 lg:flex-row">
                    <img
                        src={image}
                        className="h-80 rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-2xl sm:text-5xl font-bold mb-6">{name}</h1>
                        <p className='text-primary text-2xl font-semibold'><span className='font-extrabold'>Price:</span>{price}tk/kg</p>
                        <p className='text-accent'><span className='font-bold'>Minimum Quantity:</span>{min_quantity}kg</p>
                        <p className='text-accent'><span className='font-bold'>Maximam Quantity:</span>{max_quantity}kg</p>

                        <div className='flex gap-5 my-5'>
                            {/* location */}
                            <div className='flex justify-center flex-col border-r border-base-200 px-3'>
                                <p className='flex items-center'>{location}<MdLocationOn />  </p>
                                <p className='text-accent text-sm'>location</p>
                            </div>
                            {/* category */}
                            <div className='flex justify-center flex-col px-3'>
                                <p className='flex items-center'>{arrival_days} days </p>
                                <p className='text-accent text-sm'>Arrival </p>
                            </div>
                        </div>
                        <div className='flex gap-5 my-5'>
                            {/* reviews */}
                            <div className='flex justify-center flex-col border-r border-base-200 px-3'>
                                <p className='flex items-center'>{rating}<IoStarSharp /> </p>
                                <p className='text-accent text-sm'>reviews</p>
                            </div>
                            {/* category */}
                            <div className='flex justify-center flex-col px-3'>
                                <p className='flex items-center'>{category} </p>
                                <p className='text-accent text-sm'>Category</p>
                            </div>
                        </div>

                        <div className='my-5'>
                            <h2 className='text-xl '>Description</h2>
                            <p className='text-accent'>
                                {description}
                            </p>
                        </div>
                        <Link href={"/all-products"} className='btn btn-success text-black'><FaArrowLeftLong /> Go To All Products</Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProductDetails;