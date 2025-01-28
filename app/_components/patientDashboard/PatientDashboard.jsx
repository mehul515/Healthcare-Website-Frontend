"use client";

import React, { useState, useEffect } from 'react';

export default function PatientDashboard() {
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user data from localStorage", error);
      }
    }
  }, []);

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <p>User Name: {user.name || 'Not Available'}</p>
      <p>User Phone: {user.phone || 'Not Available'}</p>
      <p>User Email: {user.email || 'Not Available'}</p>
    </div>
  );
}