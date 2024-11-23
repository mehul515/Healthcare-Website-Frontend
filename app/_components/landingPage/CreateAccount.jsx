import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CreateAccount = () => {
    return (
        <section className="my-16 ">
            <div className="max-w-7xl mx-auto p-6 flex flex-wrap items-center justify-center rounded-3xl overflow-hidden bg-slate-100">

                {/* Image Section */}
                <div className="w-full md:w-[45%] my-6 flex justify-center items-center">
                    <Image
                        alt=""
                        width={400}
                        height={300}
                        src="/LandingPage/hero.png"
                        className="object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-[45%]">
                    <h2 className="text-3xl md:text-3xl font-bold sm:text-4xl text-gray-700">
                        Take Control of Your Health with Trusted Care!
                    </h2>
                    <p className="text-gray-600 font-medium my-6">
                        Easily book doctor appointments and connect with trusted caregivers for personalized health and recovery support. Sign up now to get started on your journey to better health                    
                    </p>

                    <Link href={"/signup"}>
                    <Button>Create Your Account</Button>
                    </Link>
                </div>

                
            </div>
        </section>
    );
};

export default CreateAccount;