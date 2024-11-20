import Image from 'next/image'
import React from 'react'

export default function Services() {

    const servicesData = [
        {
          title: "AI-Powered Health Monitoring",
          description: "Track your health with AI insights, monitor vitals daily, and stay updated about potential risks in real-time.",
          icon: "/sampleIcon.svg",
        },
        {
          title: "Doctor Appointment Booking",
          description: "Book appointments with doctors quickly based on their specialty and availability to meet your health needs.",
          icon: "/sampleIcon.svg",
        },
        {
          title: "Caregiver Booking",
          description: "Find and book experienced caregivers to assist with your daily needs and provide essential support during recovery.",
          icon: "/sampleIcon.svg",
        },
        {
          title: "Personalized Care Assistance",
          description: "Get detailed care plans made just for you to meet your health goals and manage your condition effectively.",
          icon: "/sampleIcon.svg",
        },
        {
          title: "Virtual Health Consultations",
          description: "Talk to expert doctors online and get trusted advice from the comfort of your home at a time that works best.",
          icon: "/sampleIcon.svg",
        },
        {
          title: "Health Data Analytics",
          description: "View and understand your health data better, helping you make smarter choices for a healthier lifestyle.",
          icon: "/sampleIcon.svg",
        },
      ];
      
            
    return (
        <div>
            <section className="font-medium">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Top <span className='text-primary'>Services</span> We Provide</h2>

                        <p className="mt-4 text-gray-600">
                        Experience the best in healthcare with our wide range of services, including expert consultations, AI-driven solutions, and dedicated caregiver support.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {servicesData.map((item, index) => {
                            return (
                                <div className="block rounded-xl bg-[#E4F7F7] border-secondary border-[2px] p-8 shadow-xl">
                                    <Image
                                        src={"/sampleIcon.svg"}
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
