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
        <section id="technology-experience" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-base text-[#010C80] font-semibold tracking-wide uppercase">Technologies</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Experience by Technology
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        From Computer Vision to MLOps, explore the wide range of technologies we specialize in.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {aiApplications.slice(0, -1).map((application, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-2 mt-4">
                                {application.title}
                            </h3>
                            <p className="text-gray-600 text-base">
                                {application.description}
                            </p>
                        </div>
                    ))}
                    <div className="bg-gray-100 rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {aiApplications[aiApplications.length - 1].title}
                        </h3>
                        <p className="text-gray-600 text-base">
                            {aiApplications[aiApplications.length - 1].description}
                        </p>
                    </div>
                    <div className="bg-gray-100 rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300 lg:col-span-1 lg:h-64">
                        <img
                            src="/assets/computer_vision.png"
                            alt="AI Technologies"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceByTechnology;