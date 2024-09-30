import React from 'react';
import { FaBrain, FaPuzzlePiece, FaPiggyBank, FaBullseye } from 'react-icons/fa';

const reasons = [
    {
        icon: <FaBrain />,
        title: "Leverage AI for your Competitive Advantage",
        text: "You're struggling to effectively leverage AI in your business."
    },
    {
        icon: <FaPiggyBank />,
        title: "Maximize ROI with Cost-Effective AI Solutions",
        text: "Your AI projects are not delivering the expected ROI or are too costly."
    },
    {
        icon: <FaPuzzlePiece />,
        title: "Simplify AI Complexity with Expert Guidance",
        text: "You're overwhelmed by the complexity of AI technologies and strategies."
    },
    {
        icon: <FaBullseye />,
        title: "Tailored AI Strategies Aligned with Your Business Goals",
        text: "You need tailored AI solutions that align with your business goals."
    }
];

const WhyHireUsSection = () => {
    return (
        <section id="whyhireus" className="py-16 bg-white relative">
            {/* Gradient Background */}
            <div className="absolute inset-x-1/4 top-1/4 bottom-1/4 pointer-events-none" style={{ width: '50%' }}>
                <div className="h-full bg-gradient-to-r from-transparent via-[#010C80] to-transparent opacity-50 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent rounded-lg"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
                    <div className="lg:w-1/3 mb-12 lg:mb-0 sm:text-center lg:text-left lg:flex lg:flex-col lg:justify-center px-10">
                        <h3 className="text-[#010C80] font-semibold mb-2">Why Hire Us</h3>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">If You Need Help With</h2>
                        <p className="text-gray-600 sm:max-w-full lg:max-w-lg">
                            With extensive AI consulting experience, we empower decision-makers to achieve results that align with their business goals, ensuring market competitiveness.
                        </p>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {reasons.map((reason, index) => (
                            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-[#010C80] text-3xl">
                                        {reason.icon}
                                    </div>
                                    <span className="text-4xl font-light text-[#010C80]">0{index + 1}</span>
                                </div>
                                <h4 className="text-lg font-semibold text-black mb-2">{reason.title}</h4>
                                <p className="text-gray-600">{reason.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex justify-center">
                    <a
                        href="#ContactUs"
                        className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#010C80] hover:bg-opacity-90 md:py-4 md:text-lg md:px-10"
                    >
                        Contact us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyHireUsSection;
