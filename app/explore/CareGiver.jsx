"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import caregiverData from "./caregiverData.json";
import Link from "next/link";

const CaregiversPage = () => {
    const [caregivers, setCaregivers] = useState(caregiverData);
    const [filteredCaregivers, setFilteredCaregivers] = useState(caregiverData);
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");

    // Filter caregivers based on city and category
    const filterCaregivers = () => {
        let filtered = caregivers;

        if (city) {
            filtered = filtered.filter((caregiver) =>
                caregiver.location.toLowerCase().includes(city.toLowerCase())
            );
        }

        if (category) {
            filtered = filtered.filter((caregiver) =>
                caregiver.category.toLowerCase().includes(category.toLowerCase())
            );
        }

        setFilteredCaregivers(filtered);
    };

    useEffect(() => {
        filterCaregivers();
    }, [city, category, caregivers]);

    const renderRatingStars = (rating) => {
        const fullStarSVG = (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 text-yellow-500">
                <path fill="#f5b40b" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
        );
        const halfStarSVG = (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 text-yellow-500">
                <path fill="#f5b40b" d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3 0 289.2zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
            </svg>
        );
        const emptyStarSVG = (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5 text-gray-300">
                <path fill="#f5b40b" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
            </svg>
        );

        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        let stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`}>{fullStarSVG}</span>);
        }
        if (halfStars) {
            stars.push(<span key="half">{halfStarSVG}</span>);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`}>{emptyStarSVG}</span>);
        }

        return stars;
    };

    return (
        <div className="flex flex-col items-center p-4 sm:p-6 lg:p-8">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-gray-700">Discover <span className='text-primary'>Expert Caregivers </span> Near You</h2>
                <p className="text-gray-600 hidden md:block w-[70%] mx-auto text-center font-medium">
                    Explore highly-rated caregivers based on your location and specific needs. Whether you need short-term assistance or long-term care, we have you covered.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-xl gap-4 md:gap-10 mb-10 px-5">
                <div className="w-72">
                    <label htmlFor="Category" className="block text-sm font-medium text-gray-600 mb-2">Category</label>
                    <select
                        id="Category"
                        className="w-full rounded-md border-gray-300 text-gray-600 py-2.5 px-3 shadow-sm sm:text-sm"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        <option value="Elderly Care">Elderly Care</option>
                        <option value="Post-Surgery Support">Post-Surgery Support</option>
                        <option value="Daily Assistance">Daily Assistance</option>
                    </select>
                </div>

                <div className="w-72">
                    <label htmlFor="Search" className="block text-sm font-medium text-gray-600 mb-2">Search by City</label>
                    <input
                        type="text"
                        id="Search"
                        placeholder="Enter city..."
                        className="w-full rounded-md text-gray-600 border-gray-300 py-2.5 px-3 shadow-sm sm:text-sm"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
            </div>


            <div className=" xl:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
                {filteredCaregivers.length > 0 ? (
                    filteredCaregivers.map((caregiver) => (
                        <div key={caregiver.id} className="border max-w-[320px] p-5 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <img
                                src={caregiver.image}
                                alt={caregiver.name}
                                className="w-28 h-28 rounded-full mx-auto mb-2 object-cover"
                            />
                            <h3 className="font-bold text-xl text-center">{caregiver.name}</h3>
                            <p className="text-sm text-gray-600 text-center">{caregiver.category}</p>
                            <p className="text-sm text-gray-500 text-center">{caregiver.location}</p>
                            <p className="text-lg font-semibold text-center mt-2">₹{caregiver.price}/day</p>

                            {/* Rating Stars */}
                            <div className="flex justify-center items-center mt-1 text-yellow-500">
                                <span className="font-semibold text-xl flex">{renderRatingStars(caregiver.rating)}</span>
                                <span className="ml-1 text-gray-500">{`(${caregiver.rating})`}</span>
                            </div>

                            <p className="text-sm text-gray-600 mt-2">{caregiver.bio}</p>
                            <div className="mt-3 flex justify-center">
                                <Link href={`/explore/caregivers/${caregiver.id}`}>
                                    <Button>Book Appointment</Button>
                                </Link>
                            </div>
                        </div>
                    ))) : (
                    <p className="text-gray-600">No caregivers found based on your filters.</p>
                )}
            </div>


        </div>
    );
};

export default CaregiversPage;
