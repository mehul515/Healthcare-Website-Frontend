"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function SignUp() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const jwt = sessionStorage.getItem('jwt');
        if (jwt) {
            window.location.href = "/";
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the data object to send to the backend
        const userData = {
            username: fname + " " + lname, // Combine first and last name as username
            email: email,
            password: password,
        };

        try {
            setLoading(true);

            // Send POST request to register the user
            const response = await axios.post("http://localhost:1337/api/auth/local/register", userData);

            if (response.status === 200) {
                console.log(response);
                sessionStorage.setItem("user", JSON.stringify(response.data.user));
                sessionStorage.setItem("jwt", response.data.jwt);
                setTimeout(() => {
                    window.location.href = "/"; // Redirect to homepage or dashboard
                }, 500)
                window.location.href = "/";
            }
        } catch (error) {
            console.log(error)
            if (error.response) {
                console.log(error.response.data.error.message);
                toast.error(error.response.data.error.message)
            } else {
                toast.error("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    // Check if the form is valid
    const isFormValid = fname && lname && email && password && termsChecked;

    return (
        <div className="flex font-medium justify-center min-h-[80vh] md:mt-14 mt-6">
            <Toaster />
            {/* Container */}
            <div className="bg-white rounded-lg flex w-full overflow-hidden">
                {/* Left Section - Image */}
                <div className="hidden md:flex justify-end items-center my-auto md:h-3/4 md:w-[50%]">
                    <Image
                        className="w-4/5"
                        src={"/LandingPage/hero.png"}
                        width={900}
                        height={900}
                        alt="image"
                    />
                </div>

                {/* Right Section - Form */}
                <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 max-w-[470px] flex mx-auto">
                    <div className="w-full max-w-sm mx-auto">
                        <h2 className="text-3xl font-bold mb-2.5 text-center text-gray-700">Sign Up to Get Started</h2>
                        <p className="text-[15px] text-center mb-7 text-gray-600">Create an account to access expert doctors, trusted caregivers, and explore premium features.</p>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            {/* First Name and Last Name */}
                            <div className="flex flex-col md:flex-row gap-3 mb-3">
                                <div className="flex-1">
                                    <label className="block text-[11px] text-gray-600 font-medium">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full border-2 rounded px-3 py-1.5 mt-1 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary"
                                        onChange={(e) => setFname(e.target.value)}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-[11px] text-gray-600 font-medium">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Dane"
                                        className="w-full border-2 rounded px-3 py-1.5 mt-1 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary"
                                        onChange={(e) => setLname(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label className="block text-[11px] text-gray-600 font-medium">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="johndane@gmail.com"
                                    className="w-full border-2 rounded px-3 py-1.5 mt-1 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <label className="block text-[11px] text-gray-600 font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full border-2 rounded px-3 py-1.5 mt-1 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    className="w-3.5 h-3.5 mr-2"
                                    onChange={(e) => setTermsChecked(e.target.checked)}
                                />
                                <span className="text-[13px] text-gray-600">
                                    I agree to platform's Terms of Service and Privacy Policy
                                </span>
                            </div>

                            {/* Submit Button */}
                            <div className="w-full flex justify-center items-center">
                                <Button className="w-64" type="submit" disabled={!isFormValid || loading}>
                                    {loading ? "Signing Up..." : "Sign Up"}
                                </Button>
                            </div>
                        </form>

                        {/* Separator */}
                        <div className="flex items-center my-4">
                            <hr className="flex-1 border-gray-300" />
                            <span className="px-2 text-sm text-gray-500">or</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* Google Button */}
                        <div className="flex gap-2 mb-4">
                            <button className="flex gap-2 justify-center align-middle text-sm border rounded bg-white shadow-sm hover:bg-gray-100 w-64 mx-auto">
                                <Image
                                    src={"/LandingPage/googleIcon.svg"}
                                    height={30}
                                    width={30}
                                    alt="image"
                                    className="my-1"
                                />
                                <p className="my-2 text-gray-600">Sign up with Google</p>
                            </button>
                        </div>

                        <p className="text-center mt-4 text-[15px] text-gray-600">
                            Already have an account?{" "}
                            <Link className="text-primary hover:underline" href="/login">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}