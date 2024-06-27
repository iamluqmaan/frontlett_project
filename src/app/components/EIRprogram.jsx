import Image from "next/image";
import { useRef } from "react";

const EIRProgram = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <> 
      <div className="space-y-4 py-4">
        <h1 className="text-3xl text-center text-black">Join Our Entrepreneur In Residence (EIR) Program</h1>
        <p className="text-sm text-center">
          Our EIR program is our structured 3 months un-paid program designed to help us have
          <br/> 
          a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.
        </p>
      </div>

      <div ref={scrollContainerRef} className="overflow-x-auto py-4 hide-scrollbar">
        <div className="flex gap-6 px-4">
          {[
            {
              url: '/assets/first.png',
              title: 'Application and Selection',
              description: 'Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.'
            },
            {
              url: '/assets/second.png',
              title: 'Alignment Meeting and Proposal Submission',
              description: 'If your application stands out, we\'ll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies. Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.'
            },
            {
              url: '/assets/third.png',
              title: 'Negotiation and Agreement',
              description: 'Upon successful alignment and proposal review, we\'ll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we\'ll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.'
            },
            {
              url: '/assets/fourth.png',
              title: 'Onboarding and Integration',
              description: "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members. Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration."
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow min-w-[300px]">
              <Image src={item.url} width={40} height={40} alt={item.title} />
              <h2 className="text-lg font-bold mb-4">{item.title}</h2>
              <p className="text-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 mb-7">
        <button className="px-6 py-2 underline text-black rounded">Support the Future &rarr;</button>
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <button onClick={scrollLeft} className="px-4 py-2 rounded-full">
          <Image src='/assets/left.png' width={40} height={40} alt="Scroll Left" />
        </button>
        <button onClick={scrollRight} className="px-4 py-2 rounded-full">
          <Image src='/assets/right.png' width={40} height={40} alt="Scroll Right" />
        </button>
      </div>
    </>
  );
};

export default EIRProgram;
