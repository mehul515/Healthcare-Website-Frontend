'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CaregiverCTA = () => {
    return (
        <section>
            <div className="max-w-7xl mx-auto py-12 px-6 flex flex-wrap items-center justify-center border-primary rounded-3xl overflow-hidden">
                {/* Main Heading Section */}

                {/* Image Section */}
                <div className="w-full md:w-[45%] flex justify-center items-center">
                    <Image
                        alt=""
                        width={400}
                        height={300}
                        src="/LandingPage/hero.png"
                        className="object-cover"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-[45%] p-6">
                    <div className="w-full flex justify-center items-center mb-6">
                        <h2 className="text-3xl md:text-3xl font-bold sm:text-4xl text-gray-700">
                            Want to Make an Impact? <span className="text-primary">Apply to Be a Caregiver</span> Today
                        </h2>
                    </div>
                    <p className="text-gray-600 font-medium mb-6">
                        Make a real difference in someone’s life by becoming a caregiver. We’re looking for compassionate individuals who are ready to provide care and support to those who need it most. Join our team and be part of something meaningful.
                    </p>

                    <Link href={"/applyCareGiver"} >
                        <Button>Apply Now</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CaregiverCTA;