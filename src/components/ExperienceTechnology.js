import React from 'react';

const aiApplications = [
    {
        title: 'Computer Vision',
        description: 'Strategic consulting for implementing AI-powered visual data analysis. We guide businesses in leveraging computer vision for enhanced decision-making, from facial recognition to quality control optimization.',
    },
    {
        title: 'Generative AI (GenAI)',
        description: 'Expert guidance in harnessing generative AI for innovation. Our consultants help integrate AI-driven content creation and ideation into your business processes, boosting creativity and efficiency.',
    },
    {
        title: 'Forecasting',
        description: 'Tailored strategies for implementing predictive AI models. We assist in developing and deploying forecasting solutions that drive data-informed decision-making across your organization.',
    },
    {
        title: 'Anomaly Detection',
        description: 'Customized consulting for robust AI-driven security systems. Our experts design and implement anomaly detection strategies to safeguard your operations and data integrity.',
    },
    {
        title: 'AI-Driven Optimization',
        description: 'Specialized advice on leveraging AI for process optimization. We help businesses identify and implement AI solutions that maximize efficiency and ROI across various operations.',
    },
    {
        title: 'Natural Language Processing',
        description: 'Strategic NLP integration consulting. Our team guides the development and deployment of AI language solutions to enhance communication and automate content analysis.',
    },
    {
        title: 'MLOps',
        description: 'Expert consulting on streamlining the machine learning lifecycle. We assist in establishing efficient MLOps practices, ensuring smooth collaboration and accelerated AI deployment.',
    },
    {
        title: 'Many more',
        description: "Tailored AI consulting for unique business challenges. Our expertise extends beyond listed categories – if your specific AI needs aren't mentioned, we're equipped to provide bespoke strategies and solutions to address your distinct requirements.",
    },
];

const ExperienceByTechnology = () => {
    return (
        <section id="technology-experience" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-xl font-semibold text-[#010C80] uppercase mb-2">Technologies</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Experience by Technology
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From Computer Vision to MLOps, explore the wide range of technologies we specialize in to drive your AI initiatives forward.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {aiApplications.map((application, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h4 className="text-xl font-semibold text-[#010C80] mb-3">
                                {application.title}
                            </h4>
                            <p className="text-lg text-gray-600">
                                {application.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceByTechnology;