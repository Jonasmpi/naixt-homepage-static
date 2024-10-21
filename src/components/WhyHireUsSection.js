import React from 'react';
import { Search, Briefcase, Brain, Target } from 'lucide-react';

const WhyHireUsSection = () => {
    const reasons = [
        {
            icon: <Search className="w-16 h-16 text-[#010C80]" />,
            title: "Leverage AI for Advantage",
            description: "You're struggling to effectively leverage AI in your business. We help you identify and implement AI solutions that give you a significant competitive edge in your industry."
        },
        {
            icon: <Briefcase className="w-16 h-16 text-[#010C80]" />,
            title: "Maximize AI ROI",
            description: "Your AI projects are not delivering the expected ROI or are too costly. We optimize your AI investments, ensuring maximum return and aligning them with your business objectives."
        },
        {
            icon: <Brain className="w-16 h-16 text-[#010C80]" />,
            title: "Simplify AI Complexity",
            description: "You're overwhelmed by the complexity of AI technologies and strategies. Our expert guidance helps you navigate the AI landscape, making complex concepts accessible and actionable."
        },
        {
            icon: <Target className="w-16 h-16 text-[#010C80]" />,
            title: "Tailored AI Solutions",
            description: "You need AI solutions that align perfectly with your business goals. We develop customized strategies and implementations that fit your unique requirements and industry context."
        }
    ];

    return (
        <section id="whyhireus" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-xl font-semibold text-[#010C80] uppercase mb-2">Why Hire Us</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Empowering Your AI Journey
                    </h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        With extensive AI consulting experience, we empower decision-makers to achieve results
                        that align with their business goals, ensuring market competitiveness. Our expertise
                        helps you navigate the complex AI landscape and implement solutions that drive real value.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-white p-6 flex flex-col items-center text-center h-full">
                            <div className="mb-4">
                                {reason.icon}
                            </div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h4>
                            <p className="text-lg text-gray-600 flex-grow">{reason.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#ContactUs"
                        className="inline-block px-8 py-3 text-lg font-medium rounded-md text-white bg-[#010C80] hover:bg-opacity-90 transition-colors duration-300"
                    >
                        Contact Us for AI Consulting
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyHireUsSection;