import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#212121] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left">
                    <h2 className="text-5xl font-semibold">Newsletter</h2>
                    <p className="mt-2 text-gray-400 text-xs">
                        Get the latest about SINC Partners, our startup incubator program, Portfolio 
                        company offerings - straight into your inbox.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0">
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="px-4 py-2 rounded-full sm:rounded-l-full text-white bg-transparent ring-1 ring-neutral-300 focus:outline-none flex-1"
                        />
                        <button className="px-4 py-2 bg-white text-black rounded-full sm:rounded-r-full ring-1 ring-neutral-300">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-xs">
                    <div>
                        <Image src="/assets/logo2.png" alt="SINC Partners Logo" width={100} height={50} className="mb-4" />
                        <p className="mt-2 text-gray-400">
                            SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold">Platforms</h3>
                        <ul className="mt-2 text-gray-400">
                            <li>Kofoundme</li>
                            <li>InResidency</li>
                            <li>Service Market</li>
                            <li>Founders School</li>
                            <li>Metty</li>
                            <li>Grantify</li>
                            <li>Boldtell</li>
                            <li>Chekwa</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold">Initiatives</h3>
                        <ul className="mt-2 text-gray-400">
                            <li>Jabi Plains</li>
                            <li>Local Pricing Initiative</li>
                            <li>Scholarship Program</li>
                            <li>SSMN Pricing</li>
                            <li>University STEM</li>
                            <li>University InResidency</li>
                            <li className="flex items-center space-x-1">
                                <span>1M Nigeria</span>
                                <Image src="/assets/nigeria.png" width={15} height={15} alt="Nigeria" />
                                <span>Products</span>
                            </li>
                            <li>Founders Festival</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold">About Us</h3>
                        <ul className="mt-2 text-gray-400">
                            <li>Who We Are</li>
                            <li>Our People</li>
                            <li>Concept Innovations</li>
                            <li>For Our Process</li>
                            <li>Investors Network</li>
                            <li>CSR & Events</li>
                            <li>Career</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold">More</h3>
                        <ul className="mt-2 text-gray-400">
                            <li>Services</li>
                            <li>Equity Jobs</li>
                            <li>EIR Program</li>
                            <li>Offers</li>
                            <li>Innovation News</li>
                            <li>FAQ</li>
                            <li>Blog & Resources</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-5 text-sm font-bold">Locations:</p>
                        <p className="text-gray-400">Abuja, Nigeria</p>
                        <p className="text-gray-400">Lagos, Nigeria</p>
                        <p className="text-gray-400">Philadelphia, USA</p>
                        <div className="flex gap-4 items-center mt-4">
                            <span>
                                <Image src="/assets/accredited.png" alt="Accredited" width={80} height={50} />
                                <p>Trusted Business</p>
                            </span>
                            <span>
                                <Image src="/assets/whatsapp.png" alt="WhatsApp" width={20} height={20} />
                                <p className="text-xs">Chat with us</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex flex-col lg:flex-row justify-between gap-10 items-center text-gray-400 text-sm">
                    <p className="text-xs">
                        Guaranteed 2x on your service or cash investment, usually being the first to invest.
                        <br/> Get in early and SINC your guaranty!
                    </p>
                    <div>
                        <div className="flex items-center gap-3">
                            <Image src="/assets/gasus1.png" alt="Certification" width={100} height={50} />
                            <p className="text-xs">We are a business built on the foundation of Christian values and belief</p>
                        </div>
                        <div className="flex justify-center mt-3">
                            <Image src="/assets/socials.png" alt="Socials" width={180} height={100} />
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center text-gray-400 text-xs">
                    <p>&copy; 2023 SINC Partners Ltd. All rights reserved</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Security</a>
                    </div>
                </div>
                <div className="mt-2 flex justify-center text-gray-400 text-xs">
                    <p className="flex items-center">Web in Nigeria <span className="px-1"><Image src="/assets/nigeria.png" width={15} height={15} alt="Nigeria" /></span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
