import Image from 'next/image';
import React, { useState } from 'react';
import portfolio from '../../../public/assets/Portfolio.png';
import allCompanies from '../../../public/assets/allCompanies.png'; 

const StudioPortfolio = () => {
  const [viewAll, setViewAll] = useState(false); 

  const handleViewAllClick = () => {
    setViewAll(!viewAll); 
  };

  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-4">Our Studio Portfolio</h2>
        <p className="mb-8">Our 2024 Service Incubator Portfolio Companies</p>
        <Image
          src={viewAll ? allCompanies : portfolio} // Display image based on the state
          width={1200}
          height={600}
        />
        <button onClick={handleViewAllClick} className="mt-8 px-6 py-2 text-black underline rounded">
          {viewAll ? 'Hide All Companies' : 'View All Companies'} &rarr;
        </button>
      </div>
    </div>
  );
};
export default StudioPortfolio;
