import Image from "next/image";

const EquityJobs = () => (
    <div className="mt-12">
      <h2 className="text-4xl font-bold mb-6 text-center">Equity Jobs</h2>
      <p className="text-center text-xs">See companies and startups offering equity or a mix of cash and equity for very important position in their company</p>
      <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 gap-6 px-7">
        {[
          {
            url:'/assets/c4.png',
            company: 'This company is a SAAS Startup that builds AI copy generator...',
            position: 'Chief Executive Officer',
            location: 'Abuja, Nigeria',
            industry: 'On-demand print',
            equity: 'stipend',
            stipend: 'NGN 200,000/mth',
            deadline: 'ROLE TYPE',
            type: 'Full-time',
          },
          {
            url:'/assets/c3.png',
            company: 'This company is a SAAS Startup that builds AI copy generator...',
            position: 'UX Strategist',
            location: 'Abuja, Nigeria',
            industry: 'E-commerce',
            equity: 'stipend',
            stipend: 'NGN 200,000/mth',
            deadline: 'ROLE TYPE',
            type: 'Full-time',
          },
          {
            url:'/assets/c2.png',
            company: 'This company is a SAAS Startup that builds AI copy generator...',
            position: 'CTO & Head of innovations',
            location: 'Abuja, Nigeria',
            industry: 'Fintech',
            equity: 'stipend',
            stipend: 'NGN 200,000/mth',
            deadline: 'ROLE TYPE',
            type: 'Full-time',
          },
          {
            url:'/assets/c1.png',
            company: 'This company is a SAAS Startup that builds AI copy generator...',
            position: 'Backend Developer',
            location: 'Abuja, Nigeria',
            industry: 'Transportation',
            equity: 'stipend',
            stipend: 'NGN 200,000/mth',
            deadline: 'ROLE TYPE',
            type: 'Full-time',
          },
        ].map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <Image src={job.url} width={100} height={100} />
            <p className="text-xs">{job.company}</p>
            <h3 className="text-sm font-bold py-2">{job.position}</h3>
            <p className="text-xs flex gap-6  text-gray-600 py-1"><span>LOCATION</span><span>INDUSTRY</span></p>
            <p className="text-xs flex gap-6  text-gray-600 py-1"><span>{job.location}</span><span>{job.industry}</span></p>
            <p className="text-xs flex gap-6  text-gray-600 py-1"><span>Equity</span><span>{job.equity}</span> </p>
            <p className="text-xs flex gap-6  text-gray-600 py-1"><span>12%</span><span>{job.stipend}</span> </p>
            <p className="text-xs flex gap-6  text-gray-600 py-1"><span>Deadline:</span><span>{job.deadline}</span> </p>
            <p className="text-xs flex gap-6  text-gray-600 py-1"><span>24th, january 2024 </span><span>{job.type}</span></p>
            <button className="mt-4 bg-neutral-800 text-white px-4 py-2 rounded-full">View Details</button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 mb-7">
        <button className="px-6 py-2 underline text-black rounded">See More Equity Jobs &rarr;</button>
      </div>
    </div>
  );
  
  export default EquityJobs;
  