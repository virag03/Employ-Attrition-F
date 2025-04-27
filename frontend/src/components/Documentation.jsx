import React from 'react';
import { FaBook, FaQuestionCircle, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const Documentation = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#00ABE4] mb-6">System Documentation</h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Comprehensive technical details about the HR Analytics Employee Attrition Prediction System
                    </p>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-12">
                    <h2 className="text-2xl font-bold text-[#00ABE4] mb-6">System Overview</h2>
                    <p className="text-gray-300 mb-6">
                        The HR Analytics for Employee Attrition using Machine Learning is a predictive system designed to help organizations identify employees at risk of leaving. The system leverages the Random Forest algorithm to analyze various employee attributes and provide actionable insights to HR professionals.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold text-[#00ABE4] mb-3">Key Features</h3>
                            <ul className="list-disc pl-5 text-gray-400 space-y-2">
                                <li>Predictive Analytics using machine learning</li>
                                <li>Real-time Dashboard for HR managers</li>
                                <li>Feature Importance Analysis</li>
                                <li>Secure data handling compliant with regulations</li>
                                <li>Scalable architecture for growing organizations</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#00ABE4] mb-3">Technical Specifications</h3>
                            <ul className="list-disc pl-5 text-gray-400 space-y-2">
                                <li>Frontend: React.js with Bootstrap/CSS3</li>
                                <li>Backend: Flask (Python) framework</li>
                                <li>Machine Learning: Random Forest classifier</li>
                                <li>Data Processing: Pandas and NumPy</li>
                                {/* <li>Visualization: Chart.js</li> */}
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold text-[#00ABE4] mb-3">System Architecture</h3>
                    <p className="text-gray-300 mb-4">
                        The system follows a modular architecture with four main layers:
                    </p>
                    <div className="grid md:grid-cols-4 gap-4 mb-6">
                        {[
                            { name: "User Interface", desc: "Web-based form for data input" },
                            { name: "Application", desc: "Flask server handling requests" },
                            { name: "Model", desc: "Pre-trained Random Forest model" },
                            { name: "Output", desc: "Prediction results and visualizations" }
                        ].map((layer, index) => (
                            <div key={index} className="bg-gray-700 p-4 rounded-lg">
                                <h4 className="font-semibold text-[#00ABE4] mb-2">{layer.name}</h4>
                                <p className="text-gray-400 text-sm">{layer.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-semibold text-[#00ABE4] mb-3">Data Requirements</h3>
                    <p className="text-gray-300 mb-2">
                        The system accepts the following employee attributes:
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "Demographic information",
                            "Job-related factors",
                            "Compensation details",
                            "Work history",
                            "Performance metrics",
                            "Work-life balance"
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                    <h2 className="text-2xl font-bold text-[#00ABE4] mb-6">Support</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <div className="flex items-center text-gray-300 mb-3">
                                <FaEnvelope className="mr-3 text-[#00ABE4]" />
                                <span>viraghote2020@gmail.com</span>
                            </div>
                            <div className="flex items-center text-gray-300 mb-3">
                                <FaGlobe className="mr-3 text-[#00ABE4]" />
                                <span>www.workplacecompass.com/help</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <FaPhone className="mr-3 text-[#00ABE4]" />
                                <span>+91 9158822133 (9am-5pm EST)</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>Browser: Chrome, Firefox, Edge (latest versions)</li>
                                <li>Internet Connection: Minimum 5Mbps recommended</li>
                                <li>Screen Resolution: 1280x720 or higher</li>
                                <li>Permissions: JavaScript must be enabled</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Documentation;