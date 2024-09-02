import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const services = [
    {
        number: '01',
        title: 'AI Strategy Consulting',
        description: 'Develop comprehensive AI roadmaps aligned with your business objectives and industry trends.',
        details: [
            'Discover High-Impact AI Opportunities: Identify and leverage AI technologies that can transform your business and give you a competitive edge.',
            'Tailored AI Roadmaps: Develop custom AI implementation strategies that align with your business goals and market trends.',
            'Strategic Alignment with Business Objectives: Ensure every AI initiative is fully integrated with your broader business strategy, driving measurable results and sustainable growth.',
        ],
    },
    {
        number: '02',
        title: 'AI Project Lead',
        description: 'Guide the development and implementation of AI projects from concept to deployment.',
        details: [
            'End-to-End Project Management: Oversee the entire AI project lifecycle, from initial concept through to full deployment.',
            "Innovative AI Design & Prototyping: Create groundbreaking AI solutions that drive business success.",
            'Proven Leadership: Lead your AI initiatives with expertise, ensuring on-time, on-budget delivery and optimal outcomes.',
            'Seamless Integration: Ensure flawless integration of AI technologies and concepts into your current systems, maximizing efficiency and performance.',
        ],
    },
    {
        number: '03',
        title: 'AI Management Consulting',
        description: 'Maximize ROI with Continuous AI Excellence.',
        details: [
            'Proactive Performance Optimization: Regularly review and refine your AI initiatives to enhance efficiency, effectiveness, and profitability.',
            'Cost-Effective AI Management: Optimize your AI systems to ensure maximum performance while controlling costs, delivering the best value for your investment.',
            'mpower Your Team: Provide ongoing training and hands-on support to your team, ensuring they are equipped to leverage AI technologies for sustained success.',
        ],
    },
    {
        number: '04',
        title: 'Executive AI Education',
        description: 'Offer tailored AI education programs for C-level executives to enhance decision-making in AI investments.',
        details: [
            'Exclusive Insights on AI Trends for your industry: Stay ahead of the curve with expert-led sessions on the latest AI developments and industry best practices.',
            'Strategic Decision-Making Enhancement: Equip your leadership team with the AI knowledge needed to make informed, impactful decisions.',
            'Ongoing AI Intelligence Briefings: Regular updates and briefings to keep your executive team informed about the dynamic landscape of AI, ensuring continuous leadership excellence.',
            'Tailored AI Masterclasses for Executives: Customized workshops designed specifically for C-level leaders to master AI strategies that drive business growth.'
        ],
    },
];

const ServicesSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="services" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-base text-[#010C80] font-semibold tracking-wide uppercase">What we provide</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Our Services
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We help Decision Makers efficiently succeed in their AI endeavors.
                    </p>
                </div>
                <div className="space-y-12">
                    {services.map((service, index) => (
                        <div key={index} className="border-t border-gray-300 pt-8">
                            <div className="flex flex-col md:flex-row md:items-start justify-between space-y-4 md:space-y-0">
                                <div className="md:w-2/3 flex flex-col justify-start">
                                    <span className="text-sm font-medium text-gray-500">{service.number}</span>
                                    <h3 className="text-5xl font-light text-[#010C80]">{service.title}</h3>
                                </div>
                                <div className="md:w-1/3 flex flex-col items-start justify-start">
                                    <p className="text-gray-500 text-lg mb-4">
                                        {service.description}
                                    </p>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="text-[#010C80] flex items-center hover:underline"
                                    >
                                        {openIndex === index ? "Hide details" : "Show details"}
                                        {openIndex === index ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                                    </button>
                                </div>
                            </div>
                            {openIndex === index && (
                                <div className="mt-8 w-full">
                                    <ul className="list-disc list-inside text-gray-600 space-y-4">
                                        {service.details.map((detail, i) => (
                                            <li key={i} className="text-lg">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-12 flex justify-center">
                <a
                    href="#pricing"
                    className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#010C80] hover:bg-opacity-90 md:py-4 md:text-lg md:px-10"
                >
                    Get in Touch
                </a>
            </div>
        </section>
    );
};

export default ServicesSection;
