'use client';  // Make sure this is a client-side component

import React from 'react';

const CaretakerDetail = ({ params }) => {

  const { id } = React.use(params);

  if (!id) {
    return <div>Loading...</div>;  // Handle loading state if id is undefined
  }

  return (
    <div>
      <h1>Caretaker Details</h1>
      <p>Caretaker ID: {id}</p>
      {/* Display the caretaker's detailed information here */}
    </div>
  );
};

export default CaretakerDetail;
