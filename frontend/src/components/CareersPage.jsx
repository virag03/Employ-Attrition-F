import React from "react";
import { FaBriefcase, FaGraduationCap, FaUsers, FaChartLine, FaHandshake } from "react-icons/fa";

const CareersPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Machine Learning Engineer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      description: "Develop and optimize our employee attrition prediction models using cutting-edge ML techniques."
    },
    {
      id: 2,
      title: "Frontend Developer",
      type: "Full-time",
      location: "Thane, India",
      department: "Engineering",
      description: "Build intuitive interfaces for our HR analytics dashboard using React and modern web technologies."
    },
    {
      id: 3,
      title: "HR Data Analyst",
      type: "Full-time",
      location: "Remote",
      department: "Data Science",
      description: "Analyze workforce data to uncover insights and improve our predictive models."
    },
    {
      id: 4,
      title: "Product Manager",
      type: "Full-time",
      location: "Thane, India",
      department: "Product",
      description: "Lead the development of features that help companies retain their top talent."
    }
  ];

  const benefits = [
    {
      icon: <FaBriefcase className="text-3xl text-[#00ABE4]" />,
      title: "Flexible Work",
      description: "Remote and hybrid work options to suit your lifestyle"
    },
    {
      icon: <FaGraduationCap className="text-3xl text-[#00ABE4]" />,
      title: "Learning Budget",
      description: "Annual stipend for professional development and courses"
    },
    {
      icon: <FaUsers className="text-3xl text-[#00ABE4]" />,
      title: "Team Culture",
      description: "Collaborative environment with regular team events"
    },
    {
      icon: <FaChartLine className="text-3xl text-[#00ABE4]" />,
      title: "Growth Opportunities",
      description: "Clear career paths and promotion tracks"
    },
    {
      icon: <FaHandshake className="text-3xl text-[#00ABE4]" />,
      title: "Competitive Benefits",
      description: "Health insurance, retirement plans, and generous PTO"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center border-b border-gray-700 sticky top-0 z-50">
        {/* <h1 className="text-2xl font-bold text-[#00ABE4]">Workplace Compass</h1> */}
        {/* <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-[#00ABE4] text-white rounded-md hover:bg-blue-600 transition shadow-sm"
        >
          Go Back
        </button> */}
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Hero Section */}
        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#00ABE4] mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Help us revolutionize employee retention through data and AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Why Work With Us */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-bold text-[#00ABE4] mb-4">Why Work With Us?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-300">
                  We believe that every employee deserves a fulfilling work experience. Our technology helps
                  organizations identify attrition risks early and take proactive steps to retain their best talent.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Culture</h3>
                <p className="text-gray-300">
                  We foster a culture of innovation, collaboration, and continuous learning. Our team values
                  transparency, work-life balance, and making a real impact in the HR tech space.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-[#00ABE4] mb-4">Employee Benefits</h3>
              <div className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-8">
            {/* Job Openings */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-[#00ABE4] mb-6">Current Openings</h2>
              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-[#00ABE4] transition">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-[#00ABE4]">{job.title}</h3>
                      <div className="flex space-x-4 mt-2 md:mt-0">
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">{job.type}</span>
                        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">{job.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="bg-[#00ABE4]/10 text-[#00ABE4] px-3 py-1 rounded-full text-sm">{job.department}</span>
                      <button className="px-4 py-2 bg-[#00ABE4] text-white rounded-md hover:bg-blue-600 transition text-sm">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hiring Process */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-[#00ABE4] mb-6">Our Hiring Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { step: "1", title: "Application Review", description: "We review your application and resume" },
                  { step: "2", title: "Initial Screen", description: "30-minute call with our HR team" },
                  { step: "3", title: "Technical Assessment", description: "Role-specific skills evaluation" },
                  { step: "4", title: "Final Interviews", description: "Meet the team and leadership" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-[#00ABE4] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General Application */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
              <h3 className="text-xl font-bold text-[#00ABE4] mb-4">Don't See Your Dream Job?</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our mission.
              </p>
              <button className="px-6 py-3 bg-[#00ABE4] text-white rounded-lg hover:bg-blue-600 transition font-semibold">
                Submit General Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;