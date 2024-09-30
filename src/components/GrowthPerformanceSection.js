import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

const GrowthPerformanceSection = () => {
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        const sections = document.querySelectorAll('.step-section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveStep(Number(entry.target.getAttribute('data-step')));
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <section className="py-8 md:py-16 bg-white relative">
            <div className="container mx-auto px-4 relative">
                {/* Animated Scroll Bar - Optimized for mobile */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2">
                    <div
                        className="absolute w-0.5 bg-blue-500 transition-all duration-500 ease-in-out"
                        style={{
                            top: '0',
                            height: `${((activeStep - 0.5) / 3) * 100}%`
                        }}
                    />
                    {[1, 2, 3].map((step) => (
                        <div
                            key={step}
                            className={`absolute w-8 h-8 rounded-full -left-[15px] flex items-center justify-center text-lg font-bold ${activeStep >= step ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-2 border-blue-500'
                                }`}
                            style={{ top: `${((step - 0.5) / 3) * 100}%`, transform: 'translateY(-50%)' }}
                        >
                            {step}
                        </div>
                    ))}
                </div>

                {/* Mobile Step Indicators */}
                <div className="flex justify-center mb-8 md:hidden">
                    {[1, 2, 3].map((step) => (
                        <div
                            key={step}
                            className={`w-8 h-8 mx-2 rounded-full flex items-center justify-center text-lg font-bold ${activeStep >= step ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-2 border-blue-500'
                                }`}
                        >
                            {step}
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="flex flex-col space-y-16 md:space-y-32">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center step-section" data-step="1">
                        <div className="order-1 md:order-1">
                            <img
                                src="assets/consultant_tackeling_ai.webp"
                                alt="Make-or-Buy Decision Support"
                                className="w-full h-48 md:h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="order-2 md:order-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-blue-500 font-bold text-lg">Expert AI Decision Support</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                                Make-or-Buy Decision Support
                            </h2>
                            <p className="text-gray-600 mb-6">
                                nAIxt Technologies helps companies navigate the complex landscape of AI implementation, addressing concerns about expertise and data security.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">Comprehensive assessment of in-house AI capabilities</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">Evaluation of external AI solutions and their fit</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">Data security and privacy considerations</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">Tailored recommendations for optimal AI strategy</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center step-section" data-step="2">
                        <div className="order-2 md:order-1">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-blue-500 font-bold text-lg">Smart AI Investments</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                                Protection Against Poor AI Investments
                            </h2>
                            <p className="text-gray-600 mb-6">
                                nAIxt Technologies helps businesses avoid the pitfalls of hasty AI adoption, ensuring that investments are strategic, actionable, and aligned with company goals.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">Thorough analysis of AI needs and potential impacts</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">Custom AI strategy development</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">ROI projections for AI implementations</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">Guidance on ethical and responsible AI adoption</p>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src="assets/agency_presentation_to_managers.webp"
                                alt="Protection Against Poor AI Investments"
                                className="w-full h-48 md:h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center step-section" data-step="3">
                        <div className="order-1 md:order-1">
                            <img
                                src="assets/agency_presentation_to_managers2.webp"
                                alt="AI Strategy Partner"
                                className="w-full h-48 md:h-auto object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="order-2 md:order-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-blue-500 font-bold text-lg">Your Strategic Partner in AI Investments</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                                Navigate AI Partnerships with Confidence
                            </h2>
                            <p className="text-gray-600 mb-6">
                                nAIxt Technologies acts as your strategic partner when engaging with software agencies and AI developers, ensuring you get the best solutions for your investment.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">Vendor-neutral assessment of AI solutions and providers</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">Technical due diligence on proposed AI implementations</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">Negotiation support for optimal terms and deliverables</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <p className="text-gray-600">Ongoing project oversight and quality assurance</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthPerformanceSection;
