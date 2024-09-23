import React from 'react';

const PricingSection = () => {


    return (
        <section id="pricing" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch </h2>
                </div>
                <div className="max-w-3xl mx-auto text-gray-700 space-y-3">
                    <p>
                        To get started, fill out this form to schedule a meeting with us. If you have any questions, feel free to reach out at <a href="mailto:info@naixt-technologies.de" className="text-[#010C80] underline">info@naixt-technologies.de</a>.
                    </p>
                    <p>
                        We attach a great deal of importance to the data, projects, and information of our clients in order to guarantee their success and can easily operate in this environment.
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <a
                        href="https://tally.so/r/nrVM92"
                        className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#010C80] hover:bg-opacity-90 md:py-4 md:text-lg md:px-10"
                    >
                        Schedule a Meeting
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
