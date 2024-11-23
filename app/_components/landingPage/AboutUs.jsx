import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-12 px-6 flex flex-wrap items-center justify-center border-primary rounded-3xl overflow-hidden">
        {/* Main Heading Section */}
        <div className="w-full flex justify-center items-center mb-6">
          <h2 className="text-3xl md:text-3xl font-bold text-center sm:text-4xl text-gray-700">
            <span className="text-primary">HealthNexus’s Story:</span> Get To Know About 
            Us
          </h2>
        </div>

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
          <p className="text-gray-600 font-medium mb-4">
            HealNet is more than just an online medical service; it’s a movement
            towards accessible, efficient, and compassionate healthcare for all.
            Founded by a team of visionary doctors,
          </p>
          <p className="text-gray-600 font-medium mb-6">
            Our platform is built on the pillars of trust, innovation, and
            patient-centricity, ensuring that every interaction is personalized
            and every treatment plan is tailored to your unique
          </p>

          <Button>Learn more about us</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;