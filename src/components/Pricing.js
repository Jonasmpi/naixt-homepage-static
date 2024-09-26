import React from 'react';

const ConsultationSection = () => {
    return (
        <section id="ContactUs" className="py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                {/* Left Side: Main Content */}
                <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                    <p className="text-sm font-medium text-gray-600">Get in Touch with us</p>
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-4 leading-tight">
                        Elevate Your AI with Expert Strategy Guidance
                    </h2>
                    <p className="text-lg text-gray-700 mt-4">
                        Discover how our AI consulting services can drive you and the business forward. Arrange your free initial consultation with one of our AI experts to explore how AI can optimize your strategy, projects, and investments.
                    </p>
                    <div className="mt-8">
                        <a
                            href="https://tally.so/r/nrVM92"
                            className="inline-block px-8 py-4 font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl duration-300"
                        >
                            Book Your Free Intitial Consultation
                        </a>
                    </div>
                </div>

                {/* Right Side: Points and Image */}
                <div className="md:w-1/2 flex flex-col md:flex-row items-start space-x-6">
                    {/* Steps */}
                    <div className="w-full md:w-2/3">
                        <ol className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <div className="text-2xl font-extrabold text-gray-900">1</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">AI Strategy Consulting</h4>
                                    <p className="text-sm text-gray-600">Develop an AI roadmap aligned with your business goals and industry trends.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="text-2xl font-extrabold text-gray-900">2</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">AI Project Leadership</h4>
                                    <p className="text-sm text-gray-600">From concept to deployment, we guide your AI projects to success.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="text-2xl font-extrabold text-gray-900">3</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">AI Management Consulting</h4>
                                    <p className="text-sm text-gray-600">Maximize ROI by implementing continuous AI excellence strategies.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="text-2xl font-extrabold text-gray-900">4</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">Executive AI Education</h4>
                                    <p className="text-sm text-gray-600">Tailored programs to empower C-level executives with AI decision-making skills.</p>
                                </div>
                            </li>
                        </ol>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 relative">
                        <img
                            src="assets/profile_picture_ceo-wo_bg.png"
                            alt="CEO"
                            className="w-full md:w-96 object-contain"
                            style={{ zIndex: 10, position: 'relative' }}
                        />
                        <div
                            className="absolute bg-white rounded-full"
                            style={{
                                width: '80%',
                                height: '60%',
                                bottom: 0,
                                right: '-10%',
                                zIndex: 5
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationSection;
