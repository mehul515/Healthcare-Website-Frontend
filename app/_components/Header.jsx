"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore'
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/contactUs'
        }
    ]

    const AuthLinks = [
        {
            id: 1,
            name: 'Login',
            path: '/login'
        },
        {
            id: 2,
            name: 'Sign Up',
            path: '/signup'
        }
    ]

    return (
        <div className="relative flex items-center justify-between p-4 shadow-sm text-gray-700 font-medium">
            <div className="flex items-center gap-10">
                {/* Logo visible on both desktop and mobile header */}
                <Image src="logo.svg" alt="logo" width={160} height={80} />

                {/* Menu for large screens */}
                <ul className="md:flex gap-8 hidden">
                    {Menu.map((item, index) => (
                        <Link key={index} href={item.path}>
                            <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Hamburger Icon for smaller screens */}
            <div className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 right-0 bg-white shadow-md rounded-lg p-4 pr-20 z-50 w-auto transition-all ease-in-out duration-300">
                    {/* Only menu items here, logo is not included */}
                    <ul className="flex flex-col gap-4">
                        {Menu.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <li className="text-lg font-medium hover:text-primary cursor-pointer transition-all ease-in-out transform hover:scale-105">
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                        {/* Add Login and Sign Up links to mobile menu */}
                        {AuthLinks.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <li className="text-lg font-medium hover:text-primary cursor-pointer transition-all ease-in-out transform hover:scale-105">
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}

            {/* Button (only visible on larger screens) */}
            <div className="hidden md:block">
                <Link href={"/signup"}>
                    <Button>Get Started</Button>
                </Link>
            </div>
        </div>
    )
}

export default Header
