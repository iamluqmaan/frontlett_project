// components/CoFoundWithUs.js

import Image from "next/image";
import one from '../../../public/assets/one.png'
import two from '../../../public/assets/two.png'
import three from '../../../public/assets/three.png'

const CoFoundWithUs = () => {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Co-found With Us</h2>
          <p className="text-sm mb-3">We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-4 rounded shadow space-y-4">
                <Image
                    src={one}
                    width={40}
                    height={40}
                />
              <h3 className="text-xl font-bold mb-2">We Ideate</h3>
              <p>
                We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow space-y-4">
                <Image
                    src={two}
                    width={40}
                    height={40}
                />    
              <h3 className="text-xl font-bold mb-2">You Validate</h3>
              <p>
                You join our 3 months inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow space-y-4">
                <Image
                    src={three}
                    width={40}
                    height={40}
                />
              <h3 className="text-xl font-bold mb-2">You Co-own</h3>
              <p>
                After successful validation and demo day at the end of the EIR program, we move those with a perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CoFoundWithUs;
  