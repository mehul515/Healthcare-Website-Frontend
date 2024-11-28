'use client'; // Make sure this is a client-side component
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'; // Assuming Button is your UI component

// Import Caregiver Data (assuming caregiverData.json is in the public folder)
import caregiverData from '../../caregiverData.json';

// Import Icons
import {
  FaMapMarkerAlt,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaUserTie,
  FaHandsHelping,
  FaHeart,
  FaCalendarAlt,
  FaBriefcase,
  FaWallet,
  FaInfoCircle,
} from 'react-icons/fa';
import { HelpingHand } from 'lucide-react';

const CaregiverDetails = ({ params }) => {
  const { id } = React.use(params); // Get the caregiver ID from URL params

  const [caregiver, setCaregiver] = useState(null); // State to hold the caregiver data
  const [slotIndex, setSlotIndex] = useState(0); // Selected day slot
  const [slotTime, setSlotTime] = useState(''); // Selected time slot

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Get current date and month
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  // Get current date's weekday
  const currentWeekday = currentDate.getDay();

  useEffect(() => {
    // Find the caregiver data based on the `id` from the params
    const selectedCaregiver = caregiverData.find(c => c.id == id);
    if (selectedCaregiver) {
      setCaregiver(selectedCaregiver); // Set caregiver data in state
    } else {
      console.error("Caregiver not found for ID:", id);
    }
  }, [id]);

  if (!caregiver) {
    return <div>Loading...</div>; // Show loading message if caregiver data is not ready
  }

  // Render rating stars
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];
    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    for (let i = 0; i < halfStars; i++) stars.push(<FaStarHalfAlt key={`half-${i}`} className="text-yellow-500" />);
    for (let i = 0; i < emptyStars; i++) stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />);
    return stars;
  };

  // Generate the next 7 days based on the current date
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
      {/* Caregiver Details */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1 border border-gray-200 max-w-[1100px] shadow-md rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <div className="md:flex items-center gap-7">
            <div>
              <img className="w-36 rounded-lg" src={caregiver.image} alt={caregiver.name} />
            </div>
            <div>
              <p className="flex items-center gap-2 text-2xl font-semibold text-gray-700">
                {caregiver.name}
                <img className="w-5" src="/verified_icon.png" alt="verified" />
              </p>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center text-sm text-gray-700">
                  <FaHandsHelping className="mr-1.5 text-primary" />
                  <span>{caregiver.category}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <FaMapMarkerAlt className="mr-1.5 text-primary" />
                  <span>{caregiver.location}</span> {/* Location */}
                </div>
              </div>
              <div className="flex items-center text-gray-600 mt-4">{renderRating(caregiver.rating)}</div>
            </div>
          </div>

          {/* About the Caregiver */}
          <div className="mt-6">
            <p className="flex items-center gap-1 text-sm font-semibold text-gray-700">
              <FaInfoCircle className="w-4 h-4 text-primary" /> About
            </p>
            <p className="text-sm text-gray-500 max-w-[900px] mt-1">{caregiver.about}</p>
          </div>

          {/* Caregiving Experience */}
          <div className="mt-4">
            <p className="flex items-center gap-1 text-sm font-semibold text-gray-700">
              <FaBriefcase className="w-4 h-4 text-primary" /> Experience
            </p>
            <p className="text-sm text-gray-500">{caregiver.experience} years of caregiving experience</p>
          </div>

          {/* Fee */}
          <div className="mt-6 flex items-center gap-2 text-lg font-semibold text-gray-700">
            <FaWallet className="w-5 h-5 text-primary" />
            <span>₹{caregiver.price} per day</span>
          </div>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-10 font-medium flex justify-center items-center text-gray-700">
        <div className="w-full max-w-4xl">
          <p className="text-center text-xl font-semibold mb-6">Booking Slots</p>
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
          <div className="text-center mt-6">
            <Button className="px-14 py-3 rounded-full">Book a Session</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverDetails;
