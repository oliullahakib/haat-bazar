import ProductCard from '@/components/Shared/ProductCard';
import Link from 'next/link';
import React from 'react';

const TopProducts = async () => {
    const res = await fetch(`https://haat-bazar-server.vercel.app/products?short=true&limit=4`)
    const topProducts = await res.json()
    return (
        <div>
            <div className="trending-app mt-20 w-11/12 mx-auto">
                <div className='flex flex-col items-start'>
                    <h2 className='text-5xl font-bold'>Top Products</h2>
                </div>
                <div className='apps-container mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                      topProducts.length!==0?<div>
                        <h2 className='text-center text-2xl text-accent font-bold'>No Data Available!</h2>
                      </div>:topProducts.map(p => <ProductCard key={p._id} product={p} ></ProductCard>)
                    }

                </div>
                <div className='flex justify-center items-center my-5'>
                    <Link href={'/all-products'} className="btn bg-linear-to-l from-[#00A63E] to-[#0E542B] text-white"> Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default TopProducts;