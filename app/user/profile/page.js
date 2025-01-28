'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaCalendarAlt, FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa'
import Link from 'next/link'

// Function to format date to DD-MM-YYYY
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Get month, ensuring it's 2 digits
  const year = date.getFullYear()

  return `${day}-${month}-${year}`
}

export default function PatientProfile() {
  const [patient, setPatient] = useState({})

  useEffect(() => {
    // Get the patient data from localStorage
    const patientData = localStorage.getItem('user')
    if (patientData) {
      // Parse the JSON data from localStorage and set it to the state
      setPatient(JSON.parse(patientData))
    } else {
      console.log("Patient data not found in localStorage.")
    }
  }, [])

  if (!patient || Object.keys(patient).length === 0) {
    return (
      <div className="text-center my-10">
        <p>Loading patient data...</p>
      </div>
    )
  }

  return (
    <div className="mx-auto text-gray-700 max-w-3xl my-10">
      <div className="bg-white shadow-md rounded-lg p-14">
        <div>
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src={patient.image || '/default-avatar.png'} alt={patient.name} />
            <AvatarFallback>{patient.name ? patient.name.split(' ').map(n => n[0]).join('') : 'P'}</AvatarFallback>
          </Avatar>
          <div className='mt-2'>
            <p className="text-2xl font-bold text-center">{patient.name}</p>
            <div className="space-y-2.5 mt-7">
              <div className="flex items-center gap-5">
                <FaEnvelope className="text-gray-500 w-4 h-4" />
                <span>{patient.email}</span>
              </div>
              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-gray-500 w-4 h-4" />
                <span>{patient.address}</span>
              </div>
              <div className="flex items-center gap-5">
                <FaUser className="text-gray-500 w-4 h-4" />
                <span>{patient.gender}</span>
              </div>
              <div className="flex items-center gap-5">
                <FaCalendarAlt className="text-gray-500 w-4 h-4" />
                <span>{formatDate(patient.dob)}</span> {/* Format DOB */}
              </div>
              <div className="flex items-center gap-5">
                <FaPhone className="text-gray-500 w-4 h-4" />
                <span>{patient.phone}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Medical History</h2>
          <div className="space-y-6">
            {patient.medicalHistory && patient.medicalHistory.length > 0 ? (
              patient.medicalHistory.map((item, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <p className="font-medium text-lg">{item.condition}</p>
                  <p className="text-gray-600 mt-1 text-[15px]">Diagnosed On: {formatDate(item.diagnosisDate)}</p> {/* Format diagnosis date */}
                  <p className="text-gray-600 text-[15px]">{item.notes}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No medical history available.</p>
            )}
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Link href={"/user/profile/update"}>
            <Button>Edit Profile</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}