import React from 'react';

const ConceptInnovations = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center">Our Concept Innovations</h2>
        <p className="mt-4 text-sm md:text-base text-gray-900 text-center">
          We have proprietary concept innovations that will support the startup ecosystem, support
          solution-providers/entrepreneurs and ultimately help democratize success;
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conceptInnovations.map((innovation, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 md:p-8 bg-white rounded-lg shadow"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center">{innovation.title}</h3>
              <p className="mt-4 text-sm md:text-base text-gray-500 text-center">{innovation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const conceptInnovations = [
  {
    title: 'Service Incubator',
    description: 'A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP',
  },
  {
    title: 'Virtualting',
    description: 'A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource',
  },
  {
    title: 'Diiming',
    description: 'A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice',
  },
];

export default ConceptInnovations;
