import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='flex flex-col mt-5 border-t border-gray-100 text-black-100'>
            <div className="flex max-md:flex-col justify-between gap-5 px-6  sm:px-16 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image src="/logo.svg" width={118} height={18} alt="car hub" className='object-contain' />
                    <p className="text-base text-gray-700">
                        Carhub 2024
                        <br />
                        All Rights Reserved ©
                    </p>
                </div>
                <div className="footer__links">
                    <div className="footer__link">
                        <h2 className='font-bold'>About</h2>
                        <div className="flex flex-col gap-5">
                            <Link href='/' className='text-gray-500'>
                                How It Works
                            </Link>
                            <Link href='/' className='text-gray-500'>
                                Featured
                            </Link>
                            <Link href='/' className='text-gray-500'>
                                Partnership
                            </Link>
                            <Link href='/' className='text-gray-500'>
                                Bussiness Ralation
                            </Link>
                        </div>
                    </div>
                    <div className="footer__link">
                        <h2 className='font-bold'>Company</h2>
                        <div className="flex flex-col gap-5">
                            <Link href='/' className='text-gray-500'>
                                Events
                            </Link>
                            <Link href='/' className='text-gray-500'>
                                Blog
                            </Link>
                            <Link href='/' className='text-gray-500'>
                                Podcast
                            </Link>
                            <Link href='/' className='text-gray-500'>
                                Invite A Friend
                            </Link>
                        </div>
                    </div>
                    <div className="footer__link">
                        <h2 className='font-bold'>Socials</h2>
                        <div className="flex flex-col gap-5">
                            <Link href='/' className='text-gray-500'>
                                Discord
                            </Link>
                            <Link href='/' className='text-gray-500'>
                                Instagram
                            </Link>
                            <Link href='/' className='text-gray-500'>
                                Twitter
                            </Link>
                            <Link href='/' className='text-gray-500'>
                                Facebook
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex border-t border-gray-100 justify-between items-center flex-wrap mt-10 px-6 sm:px-16 py-10">
                <p>@2024 CarHub. All rights reserved</p>
                <div className="footer__copyrights-link">
                    <Link href='/' className='text-gray-500'>
                        Privacy & Policy
                    </Link>
                    <Link href='/' className='text-gray-500'>
                        Terms & Condition
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
