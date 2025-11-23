import Image from 'next/image';
import React from 'react';
import heroImg1 from "@/assest/hero-img1.webp"
import Link from 'next/link';
const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#d0fce6] min-h-96 text-black">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className='flex-1'>
                        <Image
                            src={heroImg1}
                            className="h-[400px] object-cover rounded-2xl shadow-2xl"
                            alt='hero image'
                            loading='eager'
                        />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold text-center md:text-start"><span className='text-primary text-6xl'>Take Fresh</span>,
                        <br />
                        Be Fresh,
                        <br />
                        <span className='text-secondary '>Make Fresh</span></h1>
                        <p className="py-3 text-center md:text-start text-accent">
                            Connect directly with local farmers. Get the freshest produce at fair prices while supporting your community.
                        </p>
                        <Link href={'/all-products'} className='btn btn-primary'>Visit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;