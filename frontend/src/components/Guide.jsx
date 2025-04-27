import React from 'react';
import { FaArrowRight, FaCheck, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

const Guide = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#00ABE4] mb-6">User Guide</h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Step-by-step instructions for using the Employee Attrition Prediction System
                    </p>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-12">
                    <h2 className="text-2xl font-bold text-[#00ABE4] mb-6">Getting Started</h2>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-[#00ABE4]">
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <FaArrowRight className="mr-3 text-[#00ABE4]" /> Access the System
                            </h3>
                            <p className="text-gray-400">
                                Open the web application in your browser and navigate to the prediction form by clicking "Get Started" on the landing page.
                            </p>
                        </div>
                        
                        <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-[#00ABE4]">
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <FaArrowRight className="mr-3 text-[#00ABE4]" /> Input Employee Data
                            </h3>
                            <p className="text-gray-400">
                                Fill in all available employee information in the form fields. Required fields are marked with an asterisk (*).
                            </p>
                        </div>
                        
                        <div className="bg-gray-700 p-6 rounded-lg border-l-4 border-[#00ABE4]">
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <FaArrowRight className="mr-3 text-[#00ABE4]" /> Generate Predictions
                            </h3>
                            <p className="text-gray-400">
                                Click "Predict Attrition" button to process the data and view the results showing attrition risk level and key factors.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-12">
                    <h2 className="text-2xl font-bold text-[#00ABE4] mb-6">Interpreting Results</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {[
                            { 
                                level: "High Risk", 
                                color: "bg-red-500", 
                                icon: <FaExclamationTriangle />,
                                action: "Immediate intervention recommended"
                            },
                            { 
                                level: "Medium Risk", 
                                color: "bg-yellow-500", 
                                icon: <FaInfoCircle />,
                                action: "Monitor and consider preventive measures"
                            },
                            { 
                                level: "Low Risk", 
                                color: "bg-green-500", 
                                icon: <FaCheck />,
                                action: "Standard engagement practices sufficient"
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-700 p-6 rounded-lg">
                                <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-4`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.level}</h3>
                                <p className="text-gray-400">{item.action}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-semibold text-[#00ABE4] mb-3">Best Practices</h3>
                    <ul className="list-disc pl-5 text-gray-400 space-y-2 mb-6">
                        <li>Ensure accurate and complete employee information for best results</li>
                        <li>Input new data periodically for current predictions</li>
                        <li>Use system recommendations to develop retention strategies</li>
                        <li>Share insights with relevant managers for coordinated action</li>
                    </ul>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                    <h2 className="text-2xl font-bold text-[#00ABE4] mb-6">Frequently Asked Questions</h2>
                    
                    <div className="space-y-6">
                        {[
                            {
                                question: "How accurate are the predictions?",
                                answer: "The system achieves 88.4% accuracy based on validation testing with the IBM HR Analytics dataset."
                            },
                            {
                                question: "What data is required for predictions?",
                                answer: "Minimum required fields are marked in the form. More complete data improves prediction accuracy."
                            },
                            {
                                question: "Is employee data stored?",
                                answer: "No, the system processes data in real-time without permanent storage to ensure privacy."
                            },
                            {
                                question: "Can we use our own HR data?",
                                answer: "Currently the system uses the IBM HR Analytics dataset structure. Future versions will support custom datasets."
                            },
                            {
                                question: "How often should we run predictions?",
                                answer: "We recommend monthly analysis for most organizations, or quarterly at minimum."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-700 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-[#00ABE4] mb-2">{faq.question}</h3>
                                <p className="text-gray-400">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;