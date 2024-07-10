import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
    return (
        <header className='w-full z-10 absolute'>
            <nav className='flex justify-between items-center px-6 sm:px-16 py-4 bg-transparent'>
                <Link href="/" className='flex justify-center items-center'>
                    <Image src="/logo.svg" alt='car hub logo' className='object-contain' width={118} height={18} />
                </Link>
                <CustomButton
                    title='Sign Up'
                    btnType="button"
                    containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                />
            </nav>
        </header>
    )
}

export default Navbar
