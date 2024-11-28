"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., sending data to the backend)
        console.log(formData);
    };

    return (
        <>

            <div className="py-10 px-8 min-h-screen bg-gray-100 rounded-2xl mt-10 items-center justify-center">

            <h2 className="text-3xl font-bold mb-2.5 text-center text-gray-700">Contact Us</h2>
            <p className="text-[15px] text-center mb-7 text-gray-600">Get in touch with us for any queries or feedback. We'd love to hear from you!</p>
                {/* Main Content */}
                <div className="container flex flex-col md:flex-row gap-6 w-full max-w-5xl mt-10 mx-auto bg-gray-100 rounded-lg overflow-hidden">



                    {/* Left Section: Contact Info with Image */}
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-2xl font-semibold text-primary">Contact Information</h2>
                            <ul className="mt-6 space-y-4 text-gray-600">
                                <li className="flex items-center">
                                    <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                                    <span className="ml-4">123 Health St, City, Country</span>
                                </li>
                                <li className="flex items-center">
                                    <FaPhoneAlt className="w-6 h-6 text-primary" />
                                    <span className="ml-4">123-456-7890</span>
                                </li>
                                <li className="flex items-center">
                                    <FaEnvelope className="w-6 h-6 text-primary" />
                                    <span className="ml-4">support@healthcareplatform.com</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Right Section: Contact Form */}
                    <div className="w-full rounded-xl shadow-xl bg-white md:w-1/2 p-8">
                        <h2 className="text-2xl font-semibold text-primary">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-600">Full Name</label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-600">Email Address</label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg"
                                    placeholder="Your email address"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-600">Message</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 mt-2 border border-gray-300 rounded-lg"
                                    placeholder="Your message"
                                    required
                                />
                            </div>
                            <Button type="submit" className="">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUsPage;
