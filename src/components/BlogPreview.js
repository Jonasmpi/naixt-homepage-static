import React from 'react';

const BlogLinkSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <img
                            src="assets/naixt_blog_teaser.webp"
                            alt="nAIxt Technologies Blog"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <span className="text-xl font-semibold text-[#010C80] uppercase">Our Blog</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
                            Insights on AI Strategy and Implementation
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Stay ahead in the world of AI with our latest articles, case studies, and expert insights.
                            Discover how AI is transforming businesses and learn strategies to leverage its power for your organization.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            Find out why having an AI strategy is essential and sign up for weekly updates to your inbox.
                        </p>
                        <a
                            href="https://blog.naixt-technologies.de"
                            className="inline-block px-8 py-3 text-lg font-medium rounded-md text-[#010C80] bg-white border-2 border-[#010C80] hover:bg-[#010C80] hover:text-white transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogLinkSection;