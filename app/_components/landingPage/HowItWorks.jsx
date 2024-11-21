import React from "react";

const HowItWorks = () => {

    const stepsData = [
        {
            title: "Sign Up and Create an Account",
            description: "Easily sign up, create your profile, and access personalized healthcare services for yourself or your loved ones, ensuring tailored care and support right from the start."
        },
        {
            title: "Find and Book Services",
            description: "Explore a wide range of healthcare options, including doctors and caregivers, and book appointments or consultations quickly based on your specific health or caregiving needs."
        },
        {
            title: "Receive Expert Care and Support",
            description: "Get professional medical care, caregiver assistance, and health monitoring, ensuring seamless management of your health or loved ones' care through our platform's advanced tools."
        }
    ];


    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
                {/* Centered Heading */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-gray-700">
                        How <span className="text-primary">our platform</span> works
                    </h2>
                    <p className="text-gray-600 hidden md:block w-[70%] mx-auto text-center font-medium">
                    Navigate through our platform seamlessly by following these steps and connect with caregivers, consult doctors, and access tailored healthcare services.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center lg:items-center gap-8">
                    {/* Left Side: Stepper Component */}
                    <div className="lg:w-[45%] self-center">
                        <div className="space-y-12">
                            {/* Step 1 */}
                            {
                                stepsData.map((item, index) => {
                                    return (
                                        <div className="flex items-start text-[15px] font-">
                                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary text-white font-bold rounded-full">
                                                {index+1}
                                            </div>
                                            <div className="ml-6">
                                                <h3 className="text-lg font-semibold text-gray-800">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {item.description}                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="hidden lg:flex lg:w-[45%] items-center justify-center">
                        <img
                            src="/hero.png"
                            alt="Certified Team"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
