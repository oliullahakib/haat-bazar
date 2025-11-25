import Mydiv from '@/components/Shared/Mydiv';
import React from 'react';

const AllCategories = () => {
    return (
        <Mydiv>
            <div className="states text-black flex flex-col justify-center items-center py-5 rounded-2xl">
                <h2 className=' text-xl text-white md:text-4xl font-bold my-5'>All Catagories</h2>
                <div className='flex flex-col lg:flex-row gap-20 border border-green-600 p-4 rounded-2xl'>
                    <div className="statesCard text-center   bg-green-400 p-4 rounded-2xl">
                        <h1 className='text-2xl min-w-40 font-bold py-2 text-black'>Vegetables</h1>
                        <p className='text-sm'>30+</p>

                    </div>
                   
                    <div className="statesCard text-center   bg-red-400 p-4 rounded-2xl">
                        <h1 className='text-2xl min-w-40 font-bold py-2 text-black'>Fruits</h1>
                        <p className='text-sm'>12+</p>

                    </div>
                    <div className="statesCard text-center  border-2 bg-blue-400 p-4 rounded-2xl">
                        <h1 className='text-2xl min-w-40 font-bold py-2 '>Dairy</h1>
                        <p className='text-sm'>25+</p>

                    </div>
                    <div className="statesCard text-center border-2 bg-amber-100 p-4 rounded-2xl">
                        <h1 className='text-2xl min-w-40 font-bold py-2 '>Grains</h1>
                        <p className='text-sm'>18+</p>

                    </div>
                </div>
            </div>
        </Mydiv>
    );
};

export default AllCategories;