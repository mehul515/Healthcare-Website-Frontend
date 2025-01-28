"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Ensure axios is imported
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            window.location.href = "/";
        }
    }, [])


    const onLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const userData = {
            email: email,
            password: password,
        };

        try {
            setLoading(true);
            // Send POST request to login the user
            const response = await axios.post("https://healthcare-website-backend.onrender.com/api/user/login", userData);

            if (response.data.success) {
                console.log(response.data);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                localStorage.setItem("token", response.data.token);
                toast.success("Login Successful")
                setTimeout(() => {
                    window.location.href = "/"; // Redirect to homepage or dashboard
                }, 500)
            }else{
                toast.error(response.data.message);
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
    }

    return (
        <div className="flex font-medium justify-center min-h-[80vh] md:mt-20 mt-6">
            {/* Container */}
            <Toaster position="top-center" />
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
                        <h2 className="text-3xl font-bold mb-2.5 text-center text-gray-700">Welcome Back</h2>
                        <p className="text-[15px] text-center mb-7 text-gray-600">Reconnect with trusted caregivers, expert doctors, and all your personalized health insights.</p>

                        {/* Form */}
                        <form onSubmit={onLogin}> {/* Use onSubmit here */}
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

                            {/* Forgot Password */}
                            <div className="mb-4 text-right">
                                <Link href="/forgot-password" className="text-[13px] text-primary hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <div className="w-full flex justify-center items-center">
                                <Button
                                    className="w-64"
                                    type="submit" // Use submit type to trigger form submission
                                    disabled={!(email && password) || loading}
                                >
                                    {loading ? "Logging In..." : "Login"}
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
                        {/* <div className="flex gap-2 mb-4">
                            <button className="flex gap-2 justify-center align-middle text-sm border rounded bg-white shadow-sm hover:bg-gray-100 w-64 mx-auto">
                                <Image
                                    src={"/LandingPage/googleIcon.svg"}
                                    height={30}
                                    width={30}
                                    alt="image"
                                    className="my-1"
                                />
                                <p className="my-2 text-gray-600">Login with Google</p>
                            </button>
                        </div> */}

                        <p className="text-center mt-4 text-[15px] text-gray-600">
                            Don’t have an account?{" "}
                            <Link className="text-primary hover:underline" href="/signup">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}