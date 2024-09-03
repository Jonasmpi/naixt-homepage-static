import React from 'react';

const ThankYouForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <img
                        className="mx-auto w-auto"
                        src="/assets/pinnacle_blue_white.webp" // Replace with your preferred image path
                        alt="Thank you illustration"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        You made it! Thank You for Completing Our Survey!
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        We appreciate your time and feedback. We will get back to you as soon as possible.
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <div>
                        <a
                            href="/"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#010C80] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Return to Homepage
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYouForm;