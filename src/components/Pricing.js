import React from 'react';
import { ArrowRight } from 'lucide-react';

const ConsultationSection = () => {
    return (
        <section id="ContactUs" className="py-16 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Left Side: Main Content */}
                <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                    <h2 className="text-xl font-semibold text-[#010C80] uppercase mb-2">Get in Touch with us</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Elevate Your AI Strategy with Expert Guidance
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                        Discover how our AI consulting services can drive your business forward. Schedule a no-obligation consultation with our experts to explore how AI can optimize your strategy, projects, and investments.
                    </p>
                    {/* Buttons */}
                    <div className="flex justify-center md:justify-start mb-6">
                        <div className="relative inline-block group">
                            <a
                                href="https://tally.so/r/3XBxkj"
                                className="bg-[#010C80] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center space-x-2 text-lg group-hover:pl-16 relative z-10 no-underline"
                            >
                                <span>Schedule Your Free Consultation</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300" />
                            </a>
                            <span className="absolute inset-0 rounded-full bg-[#010C80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Points and Image */}
                <div className="md:w-1/2 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 w-full">
                    {/* Steps */}
                    <div className="w-full md:w-2/3">
                        <ol className="space-y-6">
                            {[
                                { title: "AI Strategy Consulting", desc: "Develop an AI roadmap aligned with your business goals and industry trends." },
                                { title: "AI Project Leadership", desc: "From concept to deployment, we guide your AI projects to success." },
                                { title: "AI Management Consulting", desc: "Maximize ROI by implementing continuous AI excellence strategies." },
                                { title: "Executive AI Education", desc: "Tailored programs to empower C-level executives with AI decision-making skills." }
                            ].map((item, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#010C80] text-white flex items-center justify-center text-lg font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h4>
                                        <p className="text-lg text-gray-600">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Image */}
                    {/* Image and CEO Info */}
                    <div className="w-full md:w-1/3 flex flex-col items-center">
                        <div className="w-64 h-64 md:w-full md:h-auto aspect-square relative overflow-hidden">
                            <img
                                src="assets/profile_picture_ceo-wo_bg.png"
                                alt="Jonas Szalanczi, CEO and Founder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-4 text-center w-full">
                            <h4 className="text-xl font-semibold text-gray-900 text-center">Jonas Szalanczi</h4>
                            <p className="text-lg text-gray-600 text-center">CEO and Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationSection;