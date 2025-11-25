import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import logo from "@/assest/HaatBazar.png"
import Image from 'next/image';
const Navbar = () => {
    const links = <>
        <li> <NavLink href={"/"}>Home</NavLink></li>
        <li> <NavLink href={"/add-product"}>Add Product</NavLink></li>
        <li> <NavLink href={"/manage-products"}>Manage Products</NavLink></li>
        <li> <NavLink href={"/all-products"}>All Products</NavLink></li>
    </>
    return (
        <div className="navbar glass-card sticky z-10 top-0 shadow-sm">
            <div className=" navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-4 shadow">
                        {links}

                    </ul>
                </div>
                <Link href={'/'} className="linear-text text-2xl font-extrabold">
                <Image className='w-40 rounded-xl' src={logo} alt='logo' />
                </Link>
                
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-primary font-bold px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                < SignedOut>
                    <SignInButton>
                        <button className="bg-[#00A63E] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 mx-3 sm:px-5 cursor-pointer">
                            Sign In
                        </button>
                    </SignInButton>
                    <SignUpButton>
                        <button className="bg-[#91C4C3] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                            Sign Up
                        </button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
};

export default Navbar;