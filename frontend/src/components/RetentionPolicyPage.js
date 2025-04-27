import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RetentionPolicyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const policies = location.state?.policies || ["No policies available."];
  const empdata = location.state?.empdata || {};

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center border-b border-gray-700 sticky top-0 z-50">
        {/* <h1 className="text-2xl font-bold text-[#00ABE4]">Workplace Compass</h1> */}
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-[#00ABE4] text-white rounded-md hover:bg-blue-600 transition shadow-sm"
        >
          Go Back
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Employee Summary Card */}
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h2 className="text-xl font-bold text-[#00ABE4] mb-4">Employee Summary</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400">Job Role</p>
                <p className="font-medium">{empdata.JobRole || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Department</p>
                <p className="font-medium">{empdata.Department || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Years at Company</p>
                <p className="font-medium">{empdata.YearsAtCompany || '0'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Job Satisfaction</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
                  <div 
                    className="bg-yellow-400 h-2.5 rounded-full" 
                    style={{width: `${(empdata.JobSatisfaction || 0) * 25}%`}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Retention Policy Section */}
          <div className="md:col-span-2">
            <div className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-[#00ABE4] mb-2">Retention Policy Recommendations</h2>
              <p className="text-gray-400 mb-6">Customized strategies to improve employee retention</p>

              {/* Retention Policies List */}
              <ul className="space-y-4">
                {policies.flatMap((policy, index) => 
                  policy.split('+').filter(part => part.trim()).map((part, subIndex) => (
                    <li
                      key={`${index}-${subIndex}`}
                      className="p-4 bg-gray-700 rounded-lg border-l-4 border-[#00ABE4] hover:bg-gray-700/80 transition"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 text-[#00ABE4] mt-0.5 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-100">{part.trim()}</p>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>

            {/* Additional Resources */}
            <div className="mt-8 bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-[#00ABE4] mb-4">Additional Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="#" className="p-4 bg-gray-700 rounded-lg hover:bg-gray-700/80 transition flex items-center">
                  <div className="bg-[#00ABE4]/10 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#00ABE4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span>Employee Engagement Guide</span>
                </a>
                <a href="#" className="p-4 bg-gray-700 rounded-lg hover:bg-gray-700/80 transition flex items-center">
                  <div className="bg-[#00ABE4]/10 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#00ABE4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>Schedule One-on-One Meeting</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetentionPolicyPage;