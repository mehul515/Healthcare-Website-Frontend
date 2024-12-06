"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaUserAlt, FaCalendarAlt, FaSignOutAlt, FaHome, FaSearch, FaEnvelope, FaSignInAlt, FaUserPlus } from 'react-icons/fa' 

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [user, setUser] = useState(null) // Track user data

    // Example: Set a sample user for testing
    useEffect(() => {
        // Sample user for demonstration
        const sampleUser = {
            name: "John Doe",
            image: "https://randomuser.me/api/portraits/men/13.jpg"
        }

        // Simulating user login status
        setUser(sampleUser)
    }, [])

    // Menu items
    const Menu = [
        { id: 1, name: 'Home', path: '/', icon: <FaHome className="mr-2" /> },
        { id: 2, name: 'Explore', path: '/explore', icon: <FaSearch className="mr-2" /> },
        { id: 3, name: 'Contact Us', path: '/contactUs', icon: <FaEnvelope className="mr-2" /> }
    ]

    // Authentication links (Login/Signup)
    const AuthLinks = [
        { id: 1, name: 'Login', path: '/login', icon: <FaSignInAlt className="mr-2" /> },
        { id: 2, name: 'Sign Up', path: '/signup', icon: <FaUserPlus className="mr-2" /> }
    ]

    // Profile menu options with icons
    const ProfileLinks = [
        { name: 'Profile', path: '/profile', icon: <FaUserAlt className="mr-2" /> },
        { name: 'My Appointments', path: '/appointments', icon: <FaCalendarAlt className="mr-2" /> },
        { name: 'Logout', path: '/logout', icon: <FaSignOutAlt className="mr-2" /> }
    ]

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    // Close dropdown if clicked outside
    const handleClickOutside = (e) => {
        if (!e.target.closest('.dropdown-menu') && !e.target.closest('.user-profile')) {
            setIsDropdownOpen(false);
        }
    }

    // Listen for clicks outside
    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-between p-4 shadow-sm text-gray-700 font-medium">
            <div className="flex items-center gap-10">
                {/* Logo visible on both desktop and mobile header */}
                <Image src="/logo.svg" alt="logo" width={160} height={80} />

                {/* Menu for large screens */}
                <ul className="md:flex gap-10 hidden">
                    {Menu.map((item, index) => (
                        <Link key={index} href={item.path}>
                            <li className="text-base text-gray-600 font-medium hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out flex items-center">
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            {/* Hamburger Icon for smaller screens */}
            <div className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-0 bg-white shadow-md rounded-lg p-4 z-50 w-auto transition-all ease-in-out duration-300`}>
                <ul className="flex flex-col gap-2">
                    {/* Menu links with icons */}
                    {Menu.map((item, index) => (
                        <Link key={index} href={item.path}>
                            <li className="text-base text-gray-600 font-medium hover:text-primary cursor-pointer transition-all ease-in-out transform hover:scale-105 py-1.5 px-4 rounded-md hover:bg-gray-100 flex items-center gap-x-1">
                                {item.icon}
                                {item.name}
                            </li>
                        </Link>
                    ))}

                    {/* Show Profile Links if user is logged in, else show AuthLinks */}
                    {user ? (
                        ProfileLinks.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <li className="text-base text-gray-600 font-medium hover:text-primary cursor-pointer transition-all ease-in-out transform hover:scale-105 py-1.5 px-4 rounded-md hover:bg-gray-100 flex items-center gap-x-1">
                                    {item.icon}
                                    {item.name}
                                </li>
                            </Link>
                        ))
                    ) : (
                        AuthLinks.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <li className="text-base text-gray-600 font-medium hover:text-primary cursor-pointer transition-all ease-in-out transform hover:scale-105 py-1.5 px-4 rounded-md hover:bg-gray-100 flex items-center gap-x-1">
                                {item.icon}
                                    {item.name}
                                </li>
                            </Link>
                        ))
                    )}
                </ul>
            </div>

            {/* Profile Icon (only visible if user is logged in) */}
            {user ? (
                <div className="relative user-profile hidden md:block" onClick={toggleDropdown}>
                    <Image
                        src={user.image}
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full cursor-pointer"
                    />
                    {/* Profile dropdown menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-60 bg-white shadow-md rounded-lg p-4 z-50 dropdown-menu">
                            <ul className="flex flex-col gap-1">
                                {ProfileLinks.map((item, index) => (
                                    <Link key={index} href={item.path}>
                                        <li className="text-base text-gray-600 font-medium hover:text-primary cursor-pointer transition-all ease-in-out transform hover:scale-105 py-1.5 px-4 rounded-md hover:bg-gray-100 flex items-center gap-x-1">
                                            {item.icon}
                                            {item.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                // Show the Get Started button if user is not logged in
                <div className="hidden md:block">
                    <Link href={"/signup"}>
                        <Button>Get Started</Button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Header