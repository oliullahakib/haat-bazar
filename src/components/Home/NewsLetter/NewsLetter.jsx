import React from 'react';
import cropImg from "@/assest/corp-img.png"
import Image from 'next/image';
import Mydiv from '@/components/Shared/Mydiv';
const NewsLetter = () => {
    return (
        <Mydiv>
            <div className=' flex relative justify-center items-center oswald-font bg-linear-to-l from from-[#99EE2D40] via-[#111111] to-[#2DEED740] py-10 rounded-2xl'>
            <Image 
            src={cropImg}
            className='absolute left-0 bottom-0 w-70 hidden md:block'
             alt="corp" />
            <div>

                <h1 className='text-3xl sm:text-5xl text-primary font-bold my-5'>Be Connected</h1>
                <div className="flex flex-col gap-2 items-center">
                    <input className="input join-item text-accent" placeholder="example@gmail.com" />
                    <button className="btn btn-success join-item w-40 ">Join</button>
                </div>
            </div>
            <Image 
            src={cropImg}
            className='absolute right-0 bottom-0 w-70 hidden md:block'
             alt="corp" />
        </div>
        </Mydiv>
    );
};

export default NewsLetter;