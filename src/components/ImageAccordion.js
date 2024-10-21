import React, { useState, useEffect } from 'react';

const industries = [
    {
        title: 'Logistics',
        description: 'We provide AI solutions for the logistics industry, improving operational efficiency and supply chain management.',
        image: '/assets/industry_logistics_2.webp',
    },
    {
        title: 'Manufacturing',
        description: 'Our AI-driven manufacturing solutions help businesses enhance production processes and optimize performance.',
        image: '/assets/industry_manufacturing.webp',
    },
    {
        title: 'Procurement',
        description: 'We transform procurement with AI, delivering intelligent sourcing strategies and increasing cost-effectiveness.',
        image: '/assets/industry_procurement.webp',
    },
    {
        title: 'Energy',
        description: 'Our AI solutions streamline energy management, boosting efficiency and promoting sustainability.',
        image: '/assets/industry_energy.webp',
    },
    {
        title: 'Space',
        description: 'We empower the space sector with AI to optimize resource use and improve data analysis from remote sensing.',
        image: '/assets/industry_remote_sensing.webp',
    },
    {
        title: 'Quality Control',
        description: 'Our AI-powered quality control solutions ensure high standards and reduce defects in various industries.',
        image: '/assets/industry_quality_control.webp',
    },
];

const ImageAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleInteraction = (index) => {
        if (isMobile) {
            setActiveIndex(activeIndex === index ? null : index);
        }
    };

    return (
        <section id="experience" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-xl font-semibold text-[#010C80] uppercase mb-2">CURRENT & PAST</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Experience by Industry
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Over the years, we have helped players in a wide range of industries gain traction for their AI efforts. Developing the right AI strategy means understanding the business of our partners.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:h-96 mt-8 space-y-4 md:space-y-0 space-x-1">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden transition-all duration-500
                                        h-64 md:h-full w-full
                                        ${!isMobile && activeIndex === index ? 'md:flex-[3]' : 'md:flex-[1]'}`}
                            onMouseEnter={() => !isMobile && setActiveIndex(index)}
                            onMouseLeave={() => !isMobile && setActiveIndex(null)}
                            onClick={() => handleInteraction(index)}
                        >
                            <img
                                src={industry.image}
                                alt={industry.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h4 className="text-xl font-semibold mb-2">{industry.title}</h4>
                                <p className={`text-sm transition-opacity duration-300 ${activeIndex === index || !isMobile ? 'opacity-100' : 'opacity-0'}`}>
                                    {industry.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageAccordion;