import Link from 'next/link';
import React from 'react';

const ProductCard = ({product}) => {
    const {title,image,price,rating,description}=product
   
    return (
        <div>
            <div className="card bg-base-100 flex h-96 shadow-sm mt-3 cursor-pointer hover:scale-110  transition duration-300 ease-in-out text-white border pt-3 ">
                <figure className="px-3 pt-3 ">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-full overflow-hidden" />
                </figure>

                <div className="card-body items-center justify-center text-center">
                    <h2 className="card-title">{title}</h2>
                    {
                       description.length>=40 ? description.slice(0,35)+"....":description
                    }
                <p>Price: <span className='text-primary font-bold text-2xl'>{price}tk</span> </p>
                </div>
                <div className="flex justify-between px-5 mb-4">
                    <button className="py-1 px-4 rounded-sm bg-amber-200 text-orange-500 text-lg ">★ {rating}</button>
                    <Link className='btn btn-primary' href={`/all-product`} >Details</Link>

                </div>
            </div>

        </div>
    );
};

export default ProductCard;