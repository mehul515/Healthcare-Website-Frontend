"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import caregiverData from "./caregiverData.json";

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

    return (
        <div className="bg-gray-100 flex flex-col items-center py-8 pb-14">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-gray-700">Discover <span className='text-primary'>Expert Caregivers </span> Near You</h2>
                <p className="text-gray-600 hidden md:block w-[70%] mx-auto text-center font-medium">
                Explore highly-rated caregivers based on your location and specific needs. Whether you need short-term assistance or long-term care, we have you covered.                </p>
            </div>

            {/* Filters in same row */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-xl gap-4 md:gap-10 mb-10 px-5">
                {/* Category Filter */}
                <div className="w-72">
                    <label htmlFor="Category" className="block text-sm font-medium text-gray-600 mb-2">
                        Category
                    </label>
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

                {/* Search Input for City */}
                <div className="w-72">
                    <label htmlFor="Search" className="block text-sm font-medium text-gray-600 mb-2">
                        Search by City
                    </label>
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

            {/* Caregiver Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:px-14 px-5">
                {filteredCaregivers.length > 0 ? (
                    filteredCaregivers.map((caregiver) => (
                        <div
                            key={caregiver.id}
                            className="bg-white py-6 px-6 rounded-lg shadow-lg flex flex-col items-center justify-between max-w-xs"
                        >
                            {/* Image */}
                            <img
                                src={caregiver.image}
                                alt={caregiver.name}
                                className="w-28 h-28 object-cover rounded-xl mb-4"
                            />
                            {/* Details */}
                            <div className="flex-1">
                                <h2 className="text-xl text-center font-semibold text-gray-800">{caregiver.name}</h2>
                                <p className="text-sm text-gray-600 mt-2">{caregiver.bio}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-sm font-medium text-gray-700">⭐ {caregiver.rating}</p>
                                    {/* Price */}
                                    <p className="text-sm font-semibold text-gray-800">{`$${caregiver.price}/hr`}</p>
                                </div>
                            </div>
                            {/* Button */}
                            <Button className="mt-3 self-start">
                                Book Now
                            </Button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No caregivers found based on your filters.</p>
                )}
            </div>
        </div>
    );
};

export default CaregiversPage;
