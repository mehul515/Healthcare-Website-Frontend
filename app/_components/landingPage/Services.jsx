import Image from 'next/image'
import React from 'react'

export default function Services() {

    const servicesData = [
        {
          title: "AI-Powered Health Analysis",
          description: "Use AI to analyze your health data and provide personalized insights for better health management.",
          icon: "/LandingPage/Services/1.svg",
        },
        {
          title: "Doctor Appointment Booking",
          description: "Book appointments with doctors quickly based on their specialty and availability to meet your health needs.",
          icon: "/LandingPage/Services/2.svg",
        },
        {
          title: "Caregiver Booking",
          description: "Find and book experienced caregivers to assist with your daily needs and provide essential support during recovery.",
          icon: "/LandingPage/Services/3.svg",
        },
        {
          title: "Personalized Care Assistance",
          description: "Get detailed care plans made just for you to meet your health goals and manage your condition effectively.",
          icon: "/LandingPage/Services/4.svg",
        },
        {
          title: "Virtual Health Consultations",
          description: "Talk to expert doctors online and get trusted advice from the comfort of your home at a time that works best.",
          icon: "/LandingPage/Services/5.svg",
        },
        {
          title: "Health Data Analytics",
          description: "View and understand your health data better, helping you make smarter choices for a healthier lifestyle.",
          icon: "/LandingPage/Services/6.svg",
        },
      ];
      
            
    return (
        <div>
            <section className="font-medium">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl text-gray-700 mb-4">Top <span className='text-primary'>Services</span> We Provide</h2>

                        <p className="text-gray-600 hidden md:block w-[70%] mx-auto text-center font-medium">
                        Experience the best in healthcare with our wide range of services, including expert consultations, AI-driven solutions, and dedicated caregiver support.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
                        {servicesData.map((item, index) => {
                            return (
                                <div key={index} className="block rounded-xl bg-gray-100 border-2 p-8 shadow-xl">
                                    <Image
                                        src={item.icon}
                                        width={60}
                                        height={60}
                                        alt='Icon'
                                    />
                                    <h2 className="mt-4 text-xl font-bold text-[#4F9697]">{item.title}</h2>

                                    <p className="mt-1 text-[15px] text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
