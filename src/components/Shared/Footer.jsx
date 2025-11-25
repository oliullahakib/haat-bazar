import Link from 'next/link';
import React from 'react';
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
    const links = <>
     <Link href={"/"}>Home</Link>
     <Link href={"/add-products"}>Add Product</Link>
     <Link href={"/manage-products"}>Manage Products</Link>
     <Link href={"/all-products"}>All Products</Link>
    </>
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-row md:grid-flow-col gap-4">
                {links}
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link href={"https://x.com/"} target='_blank'>
                        <FaXTwitter size={25} />
                    </Link>
                    <Link href={'https://www.youtube.com/'} target='_blank'>
                       <FaYoutube size={25} />
                    </Link>
                    <Link href={'https://www.facebook.com/'}target='_blank' >
                        <IoLogoFacebook size={25} />
                    </Link>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Haat-Bazar LTD.</p>
            </aside>
           
        </footer>
    );
};

export default Footer;