import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const CallToAction = () => {
    const svgMask = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgdmlld0JveD0iMCAwIDc4OCA3MjUiPjxkZWZzLz48cGF0aCBkPSJNMTY2LjgzMyA2MzUuMTgybDM1MC02MDYuMjE4IDEwMy45MjMgNjAtMzUwIDYwNi4yMTh6TTc3LjU4MyA1MjkuNzY3TDM4MC45MTcgNC4zOGwxMDMuOTIzIDYwLTMwMy4zMzQgNTI1LjM4OHpNMCA0MDQuMTQ1TDIzMy4zMzMgMGwxMDMuOTIzIDYwLTIzMy4zMzMgNDA0LjE0NXpNNDUwLjMzMyA2NjQuMTQ1TDY4My42NjYgMjYwbDEwMy45MjMgNjAtMjMzLjMzMyA0MDQuMTQ1ek0zMDIuNzUgNjU5Ljc2N0w2MDYuMDgzIDEzNC4zOGwxMDMuOTIzIDYwLTMwMy4zMzMgNTI1LjM4OHoiLz48L3N2Zz4=";

    return (
        <section className="bg-white py-8 md:py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:gap-16">
                    {/* Left column - Text and Form */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Elevate Your Business with Expert AI Consulting
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Transform your operations and stay ahead of the competition with tailored AI solutions from nAIxt Technologies. Our team of specialists is ready to help you harness the power of AI to achieve your business goals.
                        </p>

                        {/* Buttons */}
                        <div className="flex justify-center md:justify-start mb-6">
                            <div className="relative inline-block group">
                                <a
                                    href="#ContactUs"
                                    className="bg-[#010C80] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center space-x-2 text-lg group-hover:pl-16 relative z-10 no-underline"
                                >
                                    <span>Schedule Your Free Consultation</span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
                                </a>
                                <span className="absolute inset-0 rounded-full bg-[#010C80] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                            {['Results Driven', 'RoI Focus', 'Executive Tailored'].map((feature, index) => (
                                <li key={index} className="flex items-center text-lg text-gray-700">
                                    <Check className="w-5 h-5 text-green-500 mr-2" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right column - Masked Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-3/4 md:w-full max-w-md aspect-square relative">
                            <img
                                src="assets/abstract_waves_1.webp"
                                alt="Agency presentation"
                                className="w-full h-full object-cover"
                                style={{
                                    WebkitMaskImage: `url(${svgMask})`,
                                    maskImage: `url(${svgMask})`,
                                    WebkitMaskSize: 'contain',
                                    maskSize: 'contain',
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'center',
                                    maskPosition: 'center'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;