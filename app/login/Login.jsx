import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Login() {
    return (
        <div className="flex font-medium justify-center min-h-[80vh] mt-6">
            {/* Container */}
            <div className="bg-white rounded-lg flex w-full overflow-hidden">
                {/* Left Section - Image */}
                <div className="hidden md:flex justify-end items-center md:h-3/4 md:w-[50%]">
                    <Image
                        className="w-4/5"
                        src={"/LandingPage/hero.png"}
                        width={900}
                        height={900}
                        alt="image"
                    />
                </div>

                {/* Right Section - Form */}
                <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 max-w-[470px] flex mx-auto ">
                    <div className="w-full max-w-sm mx-auto">
                        <h2 className="text-3xl font-bold mb-2.5 text-center text-gray-700">Welcome Back</h2>
                        <p className="text-[15px] text-center mb-7 text-gray-600">Reconnect with trusted caregivers, expert doctors, and all your personalized health insights.</p>

                        {/* Form */}
                        <form>
                            {/* Email */}
                            <div className="mb-3">
                                <label className="block text-[11px] text-gray-600 font-medium">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="johndane@gmail.com"
                                    className="w-full border-2 rounded px-3 py-1.5 mt-1 text-[13px] focus:outline-none focus:ring-2 focus:ring-primary"
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
                                <Button className="w-64">Login</Button>
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
                                <p className="my-2 text-gray-600">Login with Google</p>
                            </button>
                        </div>

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
