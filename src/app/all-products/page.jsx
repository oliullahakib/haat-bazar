"use client"
import ProductCard from '@/components/Shared/ProductCard';
import { useEffect, useState } from 'react';
const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    const [search, setSearch] = useState()
    useEffect(() => {
        fetch('http://localhost:3100/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    const searchProducts = allProducts.filter(p=>p.title?.toLowerCase().includes(search?.toLowerCase()))
    return (
        <div>
            <h1 className='text-primary text-5xl font-extrabold text-center'>All Products</h1>
            <p className='text-accent text-center'>Find the best products here</p>
            <div className='flex justify-center items-center mt-3'>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>
            </div>
            <div className='apps-container mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    searchProducts.map(p => <ProductCard key={p._id} product={p} ></ProductCard>)
                }

            </div>
        </div>
    );
};

export default AllProducts;