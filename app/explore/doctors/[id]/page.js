'use client';  // Make sure this is a client-side component
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';  // Assuming Button is your UI component

// Assuming doctorData.json is located in the public folder
import doctorData from '../../doctorData.json';

// Import React Icons for visual appeal
import { FaMapMarkerAlt, FaStar, FaStarHalfAlt, FaRegStar, FaStethoscope, FaGraduationCap, FaWallet, FaInfoCircle } from 'react-icons/fa';

const DoctorDetails = ({ params }) => {
  const { id } = React.use(params); // Get the doctor ID from the URL params

  const [doctor, setDoctor] = useState(null);  // State to hold the doctor data
  const [slotIndex, setSlotIndex] = useState(0);  // State for selected day slot
  const [slotTime, setSlotTime] = useState('');  // State for selected time slot

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const timeSlots = [
    "09:00 am",
    "11:00 am",
    "02:00 pm",
    "04:00 pm",
    "06:00 pm",
  ];

  // Get current date and month
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  useEffect(() => {
    // Find the doctor data based on the `id` from the params
    const selectedDoctor = doctorData.find(doctor => doctor.id == id);
    if (selectedDoctor) {
      setDoctor(selectedDoctor);  // Set the doctor data in state
    } else {
      console.error("Doctor not found for ID:", id);
    }
  }, [id]);

  if (!doctor) {
    return <div>Loading...</div>;  // Display loading if doctor data is not loaded
  }

  // Function to render the stars based on the rating
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // One half star if the decimal part is >= 0.5
    const emptyStars = 5 - fullStars - halfStars; // Remaining stars are empty

    const stars = [];

    // Push full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }

    // Push half stars
    for (let i = 0; i < halfStars; i++) {
      stars.push(<FaStarHalfAlt key={`half-${i}`} className="text-yellow-500" />);
    }

    // Push empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
    }

    return stars;
  };


  const generateBookingDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date();
      nextDay.setDate(currentDay + i);
      const dayOfWeek = nextDay.getDay();
      const dayOfMonth = nextDay.getDate();
      const fullDate = nextDay.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric' }); // Full date format (e.g., "Monday, November 28")
      const month = nextDay.toLocaleString('default', { month: 'long' }); // Extract month
      const date = nextDay.getDate(); // Extract day of the month
      dates.push({ dayOfWeek, fullDate, month, date });
    }
    return dates;
  };

  const bookingDates = generateBookingDates();

  return (
    <div className="p-4 my-24 md:my-2">
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Doctor Image and Information */}
        <div className="flex-1 border border-gray-200 max-w-[1100px] shadow-md rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          {/* Doctor Info: name, degree, experience */}
          <div className="md:flex items-center gap-7">
            <div>
              <img
                className="w-36 rounded-lg"
                src={doctor.image}
                alt={doctor.name}
              />
            </div>

            <div>
              <p className="flex items-center gap-2 text-2xl font-semibold text-gray-700">
                {doctor.name}
                <img className="w-5" src="/verified_icon.png" alt="verified" />
              </p>

              {/* Specialty, Location, Rating */}
              <div className="flex gap-4 mt-4">
                <div className="flex items-center text-sm text-gray-700">
                  <FaStethoscope className="mr-1.5 text-primary" />
                  <span>{doctor.speciality}</span> {/* Specialty with icon */}
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <FaMapMarkerAlt className="mr-1.5 text-primary" />
                  <span>{doctor.location}</span> {/* Location with icon */}
                </div>
              </div>

              <div className="flex items-center text-gray-600 mt-4">
                {renderRating(doctor.rating)} {/* Display the rating with stars */}
              </div>
            </div>
          </div>

          {/* About the Doctor */}
          <div className="mt-6">
            <p className="flex items-center gap-1 text-sm font-semibold text-gray-700">
              <FaInfoCircle className="w-4 h-4 text-primary" /> About
            </p>
            <p className="text-sm text-gray-500 max-w-[900px] mt-1">{doctor.about}</p>
          </div>

          {/* Education */}
          <div className="mt-4">
            <p className="flex items-center gap-1 text-sm font-semibold text-gray-700">
              <FaGraduationCap className="w-4 h-4 text-primary" /> Education
            </p>
            <p className="text-sm text-gray-500">{doctor.education}</p>
          </div>

          {/* Appointment Fee */}
          <div className="mt-6 flex items-center gap-2 text-lg font-semibold text-gray-700">
            <FaWallet className="w- h-5 text-primary" />
            <div>
              <span className="font-bold">₹{doctor.price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking slots */}
      <div className="mt-10 font-medium flex justify-center items-center text-gray-700">
        <div className="w-full max-w-4xl">
          <p className="text-center text-xl font-semibold mb-6">Booking Slots</p>

          {/* Days of the week (Responsive: stack on small screens, row on larger) */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
          {bookingDates.map((date, idx) => (
              <div
                key={idx}
                onClick={() => setSlotIndex(idx)}
                className={`text-center shadow-md flex justify-center items-center w-28 h-28 rounded-full cursor-pointer 
                            ${slotIndex === idx ? "bg-primary text-white" : "border text-gray-600 border-gray-200"}`}
              >
                <div className='text-sm font-semibold'>
                  <p>{daysOfWeek[date.dayOfWeek]}</p> {/* Day of the month */}
                  <p className='text-base'>{date.date}</p> {/* Day of the month */}
                  <p>{date.month}</p> {/* Month on a separate line */}
                </div>
              </div>
            ))}
          </div>

          {/* Time Slots (Responsive: stack on small screens, row on larger) */}
          <div className="flex flex-wrap justify-center gap-3">
            {timeSlots.map((time, idx) => (
              <div
                key={idx}
                onClick={() => setSlotTime(time)}
                className={`text-sm shadow-md font-normal px-6 py-2 rounded-full cursor-pointer 
                            ${slotTime === time ? "bg-primary text-white" : "border border-gray-200"}`}
              >
                {time}
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button className="px-14 py-3 rounded-full">Book an appointment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
