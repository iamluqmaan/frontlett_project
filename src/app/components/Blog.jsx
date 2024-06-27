import BlogCard from './BlogCard';
import FeaturedIn from './FeaturedIn';

export default function Blog() {
  const publications = [
    {
      name: 'The Guardian',
      description: 'SINC Partners invests over 200 million naira in 5 startups',
      word:'SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....',
      logoUrl: '/assets/guardian.png',
      imageUrl:'/assets/g.png'
    },
    {
      name: 'Punch',
      description: 'SINC Partners invests over 200 million naira in 5 startups',
      word:'SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....',
      logoUrl: '/assets/punch.png',
      imageUrl:'/assets/p.png'
    },
    {
      name: 'The Guardian',
      description: 'SINC Partners invests over 200 million naira in 5 startups',
      word:'SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....',
      logoUrl: '/assets/guardian.png',
      imageUrl:'/assets/g.png'
    },
    {
      name: 'Punch',
      description: 'SINC Partners invests over 200 million naira in 5 startups',
      word:'SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....',
      logoUrl: '/assets/punch.png',
      imageUrl:'/assets/p.png'
    },
    {
      name: 'BUJ',
      description: 'SINC Partners invests over 200 million naira in 5 startups',
      word:'SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....',
      logoUrl: '/assets/buj.png',
      imageUrl:'/assets/b.png'
    },
    {
      name: 'Ontecx',
      description: 'SINC Partners invests over 200 million naira in 5 startups',
      word:'SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....',
      logoUrl: '/assets/ontecx.png',
      imageUrl:'/assets/o.png'
    },
    // More publications
  ];

  return (
    <div>
      <main>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 text-center">Blogs & Resources</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <BlogCard
                url="/assets/vid1.png"
                title="Top Ten Most Powerful Startup"
                description="Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup."
                imageUrl="/assets/book.png"
                videoUrl="/path-to-video"
              />
              <BlogCard
                url="/assets/vid2.png"
                title="Top Ten Most Powerful Startup"
                description="Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup."
                imageUrl="/assets/book2.png"
                videoUrl="/path-to-video"
              />
              <BlogCard
                url="/assets/vid2.png"
                title="Top Ten Most Powerful Startup"
                description="Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup."
                imageUrl="/assets/book3.png"
                videoUrl="/path-to-video"
              />
              {/* More BlogCards */}
            </div>
            <div className="flex justify-center mt-8 mb-7">
              <button className="px-6 py-2 underline text-black rounded">See More & Resources</button>
            </div>
          </div>
        </section>
        <FeaturedIn publications={publications} />
      </main>
    </div>
  );
}
