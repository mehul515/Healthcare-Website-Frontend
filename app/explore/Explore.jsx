"use client"

import { useState } from 'react';

const Tabs = ({ tab1Label, tab2Label, tab1Content, tab2Content }) => {
  const [activeTab, setActiveTab] = useState(1);  // 1 for tab1, 2 for tab2

  return (
    <div>
      {/* Tabs for larger screens */}
      <div className="flex w-full justify-center items-center">
        <nav className="flex gap-6" aria-label="Tabs">
          <a
            href="#"
            onClick={() => setActiveTab(1)}
            className={`text-center rounded-lg p-2 text-sm font-semibold ${
              activeTab === 1
                ? 'bg-[#E3F7F8] text-primary'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {tab1Label}
          </a>

          <a
            href="#"
            onClick={() => setActiveTab(2)}
            className={` text-center rounded-lg p-2 text-sm font-semibold ${
              activeTab === 2
                ? 'bg-[#E3F7F8] text-primary'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {tab2Label}
          </a>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 1 && <div>{tab1Content}</div>}
        {activeTab === 2 && <div>{tab2Content}</div>}
      </div>
    </div>
  );
};

export default Tabs;
