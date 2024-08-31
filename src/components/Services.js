import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const services = [
    {
        number: '01',
        title: 'AI Strategy Consulting',
        description: 'Develop comprehensive AI roadmaps aligned with your business objectives and industry trends.',
        details: [
            'Identify key AI opportunities for your business.',
            'Create a strategic AI implementation roadmap.',
            'Align AI initiatives with overall business goals.',
        ],
    },
    {
        number: '02',
        title: 'AI Project Lead',
        description: 'Guide the development and implementation of AI projects from concept to deployment.',
        details: [
            'Design and prototype AI solutions.',
            'Manage full lifecycle development of AI projects.',
            'Ensure smooth deployment and integration with existing systems.',
        ],
    },
    {
        number: '03',
        title: 'AI Management Consulting',
        description: 'Provide ongoing support and optimization for AI initiatives to ensure long-term success and ROI.',
        details: [
            'Regular performance reviews of AI initiatives.',
            'Optimize AI systems for cost-efficiency and performance.',
            'Provide ongoing training and support to your team.',
        ],
    },
    {
        number: '04',
        title: 'Executive AI Education',
        description: 'Offer tailored AI education programs for C-level executives to enhance decision-making in AI investments.',
        details: [
            'Customized AI workshops for executives.',
            'Provide insights on AI trends and best practices.',
            'Enhance decision-making capabilities with AI knowledge.',
            'Recurring informative meetings and briefings about the fast changing world of AI'
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
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="md:flex md:items-start md:space-x-6 w-full">
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm font-medium text-gray-500">{service.number}</span>
                                        <h3 className="text-5xl font-light text-[#010C80] ">{service.title}</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 cursor-pointer" onClick={() => handleToggle(index)}>
                                    <p className="text-gray-500 text-lg max-w-md">
                                        {service.description}
                                    </p>
                                    {openIndex === index ? (
                                        <FaChevronUp className="ml-6 text-[#010C80]" size={50} />
                                    ) : (
                                        <FaChevronDown className="ml-6 text-[#010C80]" size={50} />
                                    )}
                                </div>
                            </div>
                            {openIndex === index && (
                                <div className="mt-4">
                                    <ul className="list-disc list-inside text-gray-600 pl-10"> {/* Added pl-10 for indentation */}
                                        {service.details.map((detail, i) => (
                                            <li key={i} className="mt-2">
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
