"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaUserAlt, FaCalendarAlt, FaSignOutAlt, FaHome, FaSearch, FaEnvelope, FaSignInAlt, FaUserPlus, FaInfoCircle, FaNewspaper, FaStar } from 'react-icons/fa'; // Replaced FaRocket with FaStar
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // Handle logout
  const handleLogout = () => {
    localStorage.clear(); // Clears sessionStorage
    setIsLoggedIn(false); // Update state for logout
    window.location.href = '/login'; // Redirects to login page after logout
  };

  const Menu = [
    { id: 1, name: 'Home', path: '/', icon: <FaHome className="mr-2" /> },
    { id: 2, name: 'Explore', path: '/explore', icon: <FaSearch className="mr-2" /> },
    { id: 5, name: 'Blogs', path: '/blogs', icon: <FaNewspaper className="mr-2" /> },  // Blogs icon
    { id: 4, name: 'About Us', path: '/aboutUs', icon: <FaInfoCircle className="mr-2" /> },  // About icon
    { id: 3, name: 'Contact Us', path: '/contactUs', icon: <FaEnvelope className="mr-2" /> },
  ];

  // Authentication links (Login/Signup)
  const AuthLinks = [
    { id: 1, name: 'Login', path: '/login', icon: <FaSignInAlt className="mr-2" /> },
    { id: 2, name: 'Sign Up', path: '/signup', icon: <FaUserPlus className="mr-2" /> }
  ];

  // Profile menu options with icons
  const ProfileLinks = [
    { name: 'Profile', path: '/user/profile', icon: <FaUserAlt className="mr-2" /> },
    { name: 'My Appointments', path: '/user/appointments', icon: <FaCalendarAlt className="mr-2" /> },
    { name: 'Logout', path: '#', icon: <FaSignOutAlt className="mr-2" />, onClick: handleLogout }
  ];

  // Upgrade link (only visible if logged in)
  const UpgradeLink = { name: 'Upgrade Now', path: '/pricing', icon: <FaStar className="mr-2" /> }; // Updated icon to FaStar

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown-menu') && !e.target.closest('.user-profile')) {
      setIsDropdownOpen(false);
    }
  };

  // Listen for clicks outside
  useEffect(() => {
    // Check login status after the component mounts (client-side)
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token) { setIsLoggedIn(true) }; // Set state based on the presence of the token
    const parsedData = JSON.parse(user);
    setUserData(parsedData)
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
        <ul className="md:flex gap-8 hidden">
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
          {isLoggedIn ? (
            <>
              {/* Add the Upgrade link */}
              <Link href={UpgradeLink.path}>
                <li className="text-base text-gray-600 font-medium hover:text-primary cursor-pointer transition-all ease-in-out transform hover:scale-105 py-1.5 px-4 rounded-md hover:bg-gray-100 flex items-center gap-x-1">
                  {UpgradeLink.icon}
                  {UpgradeLink.name}
                </li>
              </Link>
              {ProfileLinks.map((item, index) => (
                <Link key={index} href={item.path} onClick={item.onClick}>
                  <li className="text-base text-gray-600 font-medium hover:text-primary cursor-pointer transition-all ease-in-out transform hover:scale-105 py-1.5 px-4 rounded-md hover:bg-gray-100 flex items-center gap-x-1">
                    {item.icon}
                    {item.name}
                  </li>
                </Link>
              ))}

            </>
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
      {isLoggedIn ? (
        <div className="relative user-profile hidden md:block" onClick={toggleDropdown}>
          <Avatar className="w-10 h-10 cursor-pointer">
            {console.log(userData.image)}
            <AvatarImage src={userData.image || '/default-avatar.png'} alt={userData.name} />
            <AvatarFallback>{userData.name ? userData.name.split(' ').map(n => n[0]).join('') : 'P'}</AvatarFallback>
          </Avatar>
          {/* Profile dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white shadow-md rounded-lg p-4 z-50 dropdown-menu">
              <ul className="flex flex-col gap-1">
                {ProfileLinks.map((item, index) => (
                  <Link key={index} href={item.path} onClick={item.onClick}>
                    <li className="text-base text-gray-600 font-medium hover:text-primary cursor-pointer transition-all ease-in-out transform hover:scale-105 py-1.5 px-4 rounded-md hover:bg-gray-100 flex items-center gap-x-1">
                      {item.icon}
                      {item.name}
                    </li>
                  </Link>
                ))}
                {/* Add the Upgrade link in the profile dropdown */}
                <Link href={UpgradeLink.path}>
                  <li className="text-base text-gray-600 font-medium hover:text-primary cursor-pointer transition-all ease-in-out transform hover:scale-105 py-1.5 px-4 rounded-md hover:bg-gray-100 flex items-center gap-x-1">
                    {UpgradeLink.icon}
                    {UpgradeLink.name}
                  </li>
                </Link>
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
  );
}

export default Header;