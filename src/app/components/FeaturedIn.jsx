import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const FeaturedIn = ({ publications }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">As Featured In</h2>
        <div className="mt-6">
          <Slider {...settings}>
            {publications.map((pub, index) => (
              <div key={index} className="px-4 shadow-md rounded-lg">
                <div className="flex flex-col items-center py-4 gap-4 md:flex-row">
                  <Image width={200} height={200} src={pub.imageUrl} alt={pub.name} className="mx-auto" />
                  <div className="text-center md:text-left">
                    <img className="h-8 w-auto mb-4 mx-auto md:mx-0" src={pub.logoUrl} alt={pub.name} />
                    <p className="mt-2 text-gray-600 text-xs font-bold">{pub.description}</p>
                    <p className="mt-2 text-gray-600 text-xs mb-3">{pub.word}</p>
                    <p className="text-xs">Reported by:</p>
                    <p className="text-xs">veil mera</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex flex-col items-center py-10 space-y-10">
          <h1 className="text-3xl md:text-5xl text-center">Let us build companies that <br/> help everyone succeed</h1>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link href="/contact" passHref className="font-bold py-2 px-4 rounded-full ring-1 ring-neutral-700 text-neutral-800 text-center">SINC With Us
            </Link>
            <Link href="/apply" passHref className="btn bg-neutral-700 hover:bg-neutral-900 ease-in-out text-center">Apply to SIP 1.0
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedIn;
