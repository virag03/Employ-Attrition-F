import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#00ABE4] mb-6">About Workplace Compass</h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Empowering businesses with AI-driven solutions to predict and prevent employee attrition.
                    </p>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-12">
                    <h2 className="text-2xl font-bold text-[#00ABE4] mb-4">Our Mission</h2>
                    <p className="text-gray-300 mb-6">
                        We leverage cutting-edge machine learning to help companies retain top talent and foster 
                        work environments where employee satisfaction and business growth thrive together.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-[#00ABE4]">
                            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                            <p className="text-gray-400">
                                Staying ahead with advanced predictive analytics and AI tools to solve real HR challenges.
                            </p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-[#00ABE4]">
                            <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                            <p className="text-gray-400">
                                Building solutions that strengthen employee-manager relationships and workplace culture.
                            </p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-[#00ABE4]">
                            <h3 className="text-xl font-semibold mb-3">Data-Driven</h3>
                            <p className="text-gray-400">
                                Empowering organizations with actionable insights derived from comprehensive data analysis.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-12">
                    <h2 className="text-2xl font-bold text-[#00ABE4] mb-6">Our Team</h2>
                    <p className="text-gray-300 mb-8">
                        We're a passionate group of data scientists, developers, and HR experts dedicated to transforming
                        how companies approach employee retention and satisfaction.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { name: "Deepak Singh", role: "Lead Developer" },
                            { name: "Jane Smith", role: "Data Scientist" },
                            { name: "Alex Johnson", role: "UX Designer" },
                            { name: "Sarah Williams", role: "HR Consultant" },
                            { name: "Michael Brown", role: "Backend Engineer" },
                            { name: "Emily Davis", role: "Product Manager" }
                        ].map((member, index) => (
                            <div key={index} className="bg-gray-700 p-6 rounded-lg text-center">
                                <div className="w-20 h-20 bg-[#00ABE4] rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                    <h2 className="text-2xl font-bold text-[#00ABE4] mb-6">Connect With Us</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <p className="text-gray-300 mb-2">📧 Email: support@workplacecompass.com</p>
                            <p className="text-gray-300 mb-6">📍 Location: Harmony, Owale, Thane west</p>
                            
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-[#00ABE4] transition">
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#00ABE4] transition">
                                    <FaTwitter className="text-2xl" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#00ABE4] transition">
                                    <FaGithub className="text-2xl" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Visit Our Website</h3>
                            <a 
                                href="https://workplacecompass.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#00ABE4] hover:underline"
                            >
                                www.workplacecompass.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;