const InvestorsNetwork = () => (
  <div className="mt-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl text-center font-bold mb-6">SINC Investors Network</h2>
    <p className="mb-3 text-center text-xs">
      Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. 
      <br /> 
      Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually being the first to invest.
    </p>
    <p className="mb-6 text-center text-xs">
      <span className="font-bold">Disclaimer:</span> 
      These deal flows are a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest.
    </p>
    <p className="mt-4 text-center font-semibold">Micro Angel Investors & Service incubators (Invest from $500 & above)</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: 'Deal 1',
          stage: '✓ Idea Stage: $5k for 5% Equity',
          details: [
            '✓ Expected Revenue at This Stage: $0/mth',
            '✓ Duration of Raise: 1mth',
            '✓ Who Can Invest: People with Domain Expertise and Advisors',
          ]
        },
        {
          title: 'Deal 2',
          stage: '✓ Build Stage: $25k worth of service for 10% Equity',
          details: [
            '✓ Expected Revenue at This Stage: $100+/mth',
            '✓ Duration of Raise: 1-3mths',
            '✓ Who Can Invest: Developers, Engineers, Growth Marketers',
          ]
        },
        {
          title: 'Deal 3',
          stage: '✓ Validation Stage: $50k for 5% Equity',
          details: [
            '✓ Expected Revenue at This Stage: $1k+/mth',
            '✓ Duration of Raise: 3-6mths',
            '✓ Who Can Invest: Everyone',
            '✓ Duration of Raise: 1-3mths',
            '✓ Who Can Invest: Developers, Engineers, Growth Marketers',
          ]
        },
        {
          title: 'Deal 4',
          stage: '✓ Traction Stage: $125k worth of service for 5% Equity',
          details: [
            '✓ Expected Revenue at This Stage: $5k+/mth',
            '✓ Duration of Raise: 6-12mths',
            '✓ Who Can Invest: Media, Influencers, Celebrity, Platform Owners',
          ]
        },
        // Add other deals here...
      ].map((deal, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">{deal.title}</h3>
          <p className="font-semibold">{deal.stage}</p>
          <ul className="list-disc mt-2">
            {deal.details.map((detail, idx) => (
              <li key={idx} className="text-xs list-none">{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default InvestorsNetwork;
