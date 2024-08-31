import React, { useState, useEffect } from 'react';

const industries = [
    {
        title: 'Logistics',
        description: 'We provide AI solutions for the healthcare industry, improving patient outcomes and operational efficiency.',
        image: '/assets/industry_logistics_2.png',
    },
    {
        title: 'Manufacturing',
        description: 'Our AI-driven financial services help businesses enhance decision-making and optimize performance.',
        image: '/assets/industry_manufacturing.png',
    },
    {
        title: 'Procurement',
        description: 'We transform retail with AI, delivering personalized experiences and increasing customer loyalty.',
        image: '/assets/industry_procurement.png',
    },
    {
        title: 'Energy',
        description: 'Our AI solutions streamline manufacturing processes, boosting productivity and reducing costs.',
        image: '/assets/industry_energy.png',
    },
    {
        title: 'Space',
        description: 'We empower the energy sector with AI to optimize resource use and improve sustainability.',
        image: '/assets/industry_remote_sensing.png',
    },
    {
        title: 'Quality Control',
        description: 'We empower the energy sector with AI to optimize resource use and improve sustainability.',
        image: '/assets/industry_quality_control.png',
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
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-base text-[#010C80] font-semibold tracking-wide uppercase">CURRENT & PAST</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Experience
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Over the years, we have helped players in a wide range of industries gain traction for their AI efforts. Developing the right AI strategy means understanding the business of our partners.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:h-96 mt-8 space-y-0 md:space-y-0">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden transition-all duration-500
                                        h-16 md:h-full w-full
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
                            <div
                                className={`absolute inset-0 bg-black transition-opacity duration-500
                                            ${isMobile || (activeIndex !== null && activeIndex !== index)
                                        ? 'bg-opacity-50'
                                        : 'bg-opacity-0'
                                    }`}
                            ></div>
                            <div className="absolute bottom-0 left-0 w-full p-4">
                                <h3 className="text-white text-xl font-bold mb-2">
                                    {industry.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageAccordion;
