import Mydiv from '@/components/Shared/Mydiv';
import React from 'react';

const Status = () => {
    return (
        <Mydiv>
             <div className="states bg-green-200 text-black flex flex-col justify-center items-center py-5 rounded-2xl">
                    <h2 className=' text-xl text-green-700 md:text-4xl font-bold my-5'>See Fist,Then Trust</h2>
                    <div className='flex flex-col md:flex-row gap-20'>
                        <div className="statesCard text-center text-accent border-2 border-green-500 p-4 rounded-2xl">
                            <p className='text-sm'>Active Farmers</p>
                            <h1 className='text-5xl font-bold py-2 text-primary'>500+</h1>
                            
                        </div>
                        <div className="statesCard text-center text-accent border-2 border-green-500 p-4 rounded-2xl">
                            <p className='text-sm'>Happy Customers</p>
                            <h1 className='text-5xl font-bold py-2 text-primary'>10K</h1>
                    
                        </div>
                        <div className="statesCard text-center text-accent border-2 border-green-500 p-4 rounded-2xl">
                            <p className='text-sm'>Product Types</p>
                            <h1 className='text-5xl font-bold py-2 text-primary'>12+</h1>
                            
                        </div>
                    </div>
                </div>
        </Mydiv>
    );
};

export default Status;