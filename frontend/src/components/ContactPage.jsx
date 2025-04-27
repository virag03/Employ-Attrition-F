import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Navbar */}
            <nav className="w-full bg-gray-800 py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center border-b border-gray-700 sticky top-0 z-50">
                {/* <h1 className="text-2xl font-bold text-[#00ABE4]">Workplace Compass</h1>
                <button
                    onClick={() => window.history.back()}
                    className="px-4 py-2 bg-[#00ABE4] text-white rounded-md hover:bg-blue-600 transition shadow-sm"
                >
                    Go Back
                </button> */}
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Contact Information Sidebar */}
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                        <h2 className="text-xl font-bold text-[#00ABE4] mb-6">Contact Information</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-[#00ABE4]/10 p-3 rounded-lg mr-4">
                                    <FaPhone className="text-[#00ABE4] text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-gray-400">+91 9158822133</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-[#00ABE4]/10 p-3 rounded-lg mr-4">
                                    <FaEnvelope className="text-[#00ABE4] text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-gray-400">contact@workplacecompass.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-[#00ABE4]/10 p-3 rounded-lg mr-4">
                                    <FaMapMarkerAlt className="text-[#00ABE4] text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Address</h3>
                                    <p className="text-gray-400">Harmony, Owale, Thane west</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-[#00ABE4] mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-[#00ABE4]/10 p-3 rounded-full text-[#00ABE4] hover:bg-[#00ABE4]/20 transition">
                                    <FaLinkedin className="text-xl" />
                                </a>
                                <a href="#" className="bg-[#00ABE4]/10 p-3 rounded-full text-[#00ABE4] hover:bg-[#00ABE4]/20 transition">
                                    <FaTwitter className="text-xl" />
                                </a>
                                <a href="#" className="bg-[#00ABE4]/10 p-3 rounded-full text-[#00ABE4] hover:bg-[#00ABE4]/20 transition">
                                    <FaGithub className="text-xl" />
                                </a>
                                <a href="#" className="bg-[#00ABE4]/10 p-3 rounded-full text-[#00ABE4] hover:bg-[#00ABE4]/20 transition">
                                    <FaFacebook className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:col-span-2">
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <h2 className="text-2xl font-bold text-[#00ABE4] mb-2">Send Us a Message</h2>
                            <p className="text-gray-400 mb-6">We'll get back to you as soon as possible</p>

                            {submitted ? (
                                <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg text-center">
                                    <p className="text-green-400 font-medium">Thank you for your message! We'll get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-gray-800 mb-2">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="message" className="block text-gray-800 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 bg-[#00ABE4] text-white font-semibold rounded-lg hover:bg-blue-600 transition mt-6"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Additional Information */}
                        <div className="mt-8 bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-xl font-bold text-[#00ABE4] mb-4">Business Hours</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-2">Support</h4>
                                    <p className="text-gray-400">Monday - Friday: 9AM - 6PM IST</p>
                                    <p className="text-gray-400">Saturday: 10AM - 2PM IST</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Sales</h4>
                                    <p className="text-gray-400">Monday - Friday: 8AM - 7PM IST</p>
                                    <p className="text-gray-400">Closed on weekends</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;