"use client";

import { useState } from 'react';

const Tabs = ({ tab1Label, tab2Label, tab1Content, tab2Content }) => {
  const [activeTab, setActiveTab] = useState(1);  // 1 for tab1, 2 for tab2

  return (
    <div>
      {/* Tabs for larger screens */}
      <div className="flex justify-center items-center">
        <nav className="flex gap-8" aria-label="Tabs">
          <a
            href="#"
            onClick={() => setActiveTab(1)}
            className={`text-center px-6 py-3 text-[15px] font-semibold relative transition-all duration-300 ease-in-out transform ${
              activeTab === 1
                ? 'text-primary font-bold'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            {tab1Label}

            {/* Line Below Tab */}
            <span
              className={`absolute bottom-0 left-0 w-full h-[3px] transition-all duration-300 ease-in-out transform ${
                activeTab === 1 ? 'bg-primary scale-x-100' : 'bg-transparent scale-x-0'
              }`}
            ></span>
          </a>

          <a
            href="#"
            onClick={() => setActiveTab(2)}
            className={`text-center px-6 py-3 text-[15px] font-semibold relative transition-all duration-300 ease-in-out transform ${
              activeTab === 2
                ? 'text-primary font-bold'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            {tab2Label}

            {/* Line Below Tab */}
            <span
              className={`absolute bottom-0 left-0 w-full h-[3px] transition-all duration-300 ease-in-out transform ${
                activeTab === 2 ? 'bg-primary scale-x-100' : 'bg-transparent scale-x-0'
              }`}
            ></span>
          </a>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 1 && <div>{tab1Content}</div>}
        {activeTab === 2 && <div>{tab2Content}</div>}
      </div>
    </div>
  );
};

export default Tabs;
