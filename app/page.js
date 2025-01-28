"use client";

import { useEffect, useState } from "react";
import AdminDashboard from "./_components/adminDashboard/AdminDashboard";
import DoctorDashboard from "./_components/doctorDashboard/DoctorDashboard";
import LandingPage from "./_components/landingPage/LandingPage";
import PatientDashboard from "./_components/patientDashboard/PatientDashboard";
import CareGiver from "./_components/careGiver/CareGiver";

export default function Home() {
  const [user, setUser] = useState(null);
  const [isClient, setIsClient] = useState(false); // To ensure it's client-side

  useEffect(() => {
    // Only set the state on the client-side to avoid hydration issues
    setIsClient(true);

    // Fetch user from sessionStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user data from sessionStorage
    }
  }, []);

  const renderDashboard = () => {
    return <PatientDashboard />;
  };

  // Client-side rendering check
  if (!isClient) {
    return <div>Loading...</div>;
  }

  // If user exists (logged in), render dashboard, otherwise show the landing page
  return (
    <div className="min-h-[80vh]">
      {user ? renderDashboard() : <LandingPage />}
    </div>
  );
}