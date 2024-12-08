"use client";

import { useEffect, useState } from "react";
import AdminDashboard from "./_components/adminDashboard/AdminDashboard";
import DoctorDashboard from "./_components/doctorDashboard/DoctorDashboard";
import LandingPage from "./_components/landingPage/LandingPage";
import PatientDashboard from "./_components/patientDashboard/PatientDashboard";
import CareGiver from "./_components/careGiver/CareGiver";

export default function Home() {
  const [user, setUser] = useState(null);

  const demoUser = {
    name: "John Dane",
    role: "patient",
  };

  useEffect(() => {
    setUser(demoUser);
  }, []);

  const renderDashboard = () => {
    switch (user?.role) {
      case "patient":
        return <PatientDashboard />;
      case "doctor":
        return <DoctorDashboard />;
      case "careGiver":
        return <CareGiver />;
      case "admin":
        return <AdminDashboard />;
      default:
        return (
          <div className="flex flex-col items-center justify-center gap-4 min-h-[80vh]">
            <h1 className="text-5xl font-bold text-red-600">Error!</h1>
            <p className="text-2xl font-medium text-center text-gray-600">
              User role not recognized. Please contact support.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-[80vh]">
      {user ? renderDashboard() : <LandingPage />}
    </div>
  );
}
