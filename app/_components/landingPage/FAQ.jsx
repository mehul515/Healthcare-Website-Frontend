import React from 'react'

export default function FAQ() {

    const faqData = [
        {
            question: "Is there a cost to use the platform?",
            answer: "You can access basic features for free, such as browsing the platform and booking appointments with doctors and caregivers. The cost comes only when you book appointments, and for premium features, you need to subscribe to a Plus or Premium plan."
        },
        {
            question: "How can I find a caregiver for my loved one?",
            answer: "Browse our list of professional caregivers based on your specific needs, such as home care, elderly assistance, or post-surgery recovery. Once you find a suitable match, you can book their services directly through the platform."
        },
        {
            question: "How do I make payments for doctor or caregiver services?",
            answer: "Payments for appointments with doctors or caregivers are made directly through the platform. You will be charged based on the professional’s rate, and the payment will be processed securely."
        },
        {
            question: "Do I need to pay in advance for doctor or caregiver appointments?",
            answer: "You will be required to pay for doctor or caregiver appointments at the time of booking. Payment is made directly through the platform, and the professional will receive the fee based on their set rate."
        },
        {
            question: "Can I cancel or reschedule an appointment?",
            answer: "Yes, you can cancel or reschedule an appointment directly from your account. Please review our cancellation policy, as some services may have a time frame within which cancellations can be made."
        },
        {
            question: "Are the caregivers and doctors verified?",
            answer: "Yes, all doctors and caregivers listed on our platform are thoroughly vetted and verified to ensure they meet our standards for quality and professionalism. You can trust that the professionals you book through our platform are qualified and experienced."
        },
        {
            question: "What are the benefits of upgrading to the Premium plan?",
            answer: "The Premium plan offers full access to AI-powered health reports, a 24/7 health chatbot, and all the features from the Plus plan, enabling you to manage your health more effectively with advanced tools."
        }
    ];



    return (
        <div className="space-y-4 mt-24 ">
            <h2 className="text-center text-3xl font-bold sm:text-4xl mb-8 text-gray-700">
                <span className='text-primary block'>Frequently Asked Questions</span> About Our Platform
            </h2>
            {
                faqData.map((item, index) => {
                    return (
                        <details key={index}
                            className="mx-auto max-w-[800px] group rounded-xl bg-gray-100 py-3 px-6 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                                <h2 className="font-medium text-gray-700">
                                    {item.question}
                                </h2>

                                <span className="shrink-0 rounded-full bg-white p-1.5 text-primary sm:p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 leading-relaxed font-medium text-gray-600 text-[15px]">
                                {item.answer}
                            </p>
                        </details>
                    )
                })
            }

        </div>
    )
}
