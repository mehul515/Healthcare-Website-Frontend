import Image from 'next/image'
import React from 'react'

export default function Testimonials() {

    const testimonialsData = [
        {
            name: "Aarav Mehta",
            review: "This platform helped me manage my parents' health effortlessly. Booking appointments and accessing services is incredibly easy. Highly recommended!",
            profilePicture: "/LandingPage/profile.avif",
            rating: 5
        },
        {
            name: "Priya Sharma",
            review: "Amazing caregiver services! The platform is user-friendly, and the support team ensured my parents got the best care possible. Thank you!",
            profilePicture: "/LandingPage/profile.avif",
            rating: 5
        },
        {
            name: "Karan Patel",
            review: "Fantastic experience! Booking virtual consultations with doctors is so simple, and the platform’s smooth interface makes everything hassle-free. Great job!",
            profilePicture: "/LandingPage/profile.avif",
            rating: 5
        },
        {
            name: "Ananya Iyer",
            review: "The health monitoring tools are excellent! Managing my parents' care remotely has been a breeze. Exceptional platform for family healthcare needs.",
            profilePicture: "/LandingPage/profile.avif",
            rating: 5
        }
    ];
    

    return (
        <div className=''>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <h2 className="text-center text-3xl font-bold sm:text-4xl mb-4 text-gray-700">
                    <span className='text-primary'>Trusted Testimonials</span> From Those We’ve <span className='text-primary'>Served</span>
                    </h2>
                    <p className="text-gray-600 hidden md:block w-[70%] mx-auto text-center font-medium">
                    Discover why our platform is trusted by users for reliable healthcare services and the care they received.
                    </p>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-20 gap-y-14 mt-10">
                        {
                            testimonialsData.map((item, index) => {
                                return (
                                    <blockquote className="rounded-xl bg-gray-100 p-6 shadow-sm sm:p-8">
                                        <div className="flex items-center gap-4">
                                            <Image
                                                alt="Profile Image"
                                                src={item.profilePicture}
                                                height={500}
                                                width={500}
                                                className="size-20 rounded-[20%] object-cover"
                                            />

                                            <div>
                                                <div className="flex gap-0.5 text-green-500">

                                                    <Image
                                                        src={"/LandingPage/stars.svg"}
                                                        width={20}
                                                        height={20}
                                                        alt='Star'
                                                    />

                                                    <Image
                                                        src={"/LandingPage/stars.svg"}
                                                        width={20}
                                                        height={20}
                                                        alt='Star'
                                                    />
                                                    <Image
                                                        src={"/LandingPage/stars.svg"}
                                                        width={20}
                                                        height={20}
                                                        alt='Star'
                                                    />
                                                    <Image
                                                        src={"/LandingPage/stars.svg"}
                                                        width={20}
                                                        height={20}
                                                        alt='Star'
                                                    />
                                                    <Image
                                                        src={"/LandingPage/stars.svg"}
                                                        width={20}
                                                        height={20}
                                                        alt='Star'
                                                    />
                                                </div>


                                                <p className="mt-3 text-gray-600 font-medium text-[15px]"> 
                                                    {item.review}
                                                </p>
                                                <p className="mt-0.5 text-lg font-semibold text-gray-700">- {item.name}</p>
                                            </div>

                                        </div>


                                    </blockquote>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
