import React from "react";
import { FaChartLine, FaUserShield, FaLightbulb, FaChevronRight } from "react-icons/fa";
import { FiBarChart2, FiUsers, FiAward, FiClock, FiDollarSign } from "react-icons/fi";
import "./css/LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      {/* Navigation */}

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#00ABE4] to-[#0083B0] text-white py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-white"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Reduce Employee Turnover with <span className="text-yellow-300">ML-Powered</span> Predictions
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Our advanced machine learning models identify at-risk employees before they leave, giving you time to take action and retain your top talent.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/attrition-predictor">
                <button className="px-8 py-3 bg-white text-[#00ABE4] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                  Try Free Demo
                </button>
              </Link>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition">
                Watch Video
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-300 rounded-full opacity-20"></div>
              <div className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white border-opacity-30">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Sample Prediction</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Employee Satisfaction</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Retention Probability</p>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-red-500 h-2.5 rounded-full" style={{width: '30%'}}></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Risk Level</p>
                      <div className="flex items-center">
                        <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                        <span className="font-medium">High Risk</span>
                      </div>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-2 bg-[#00ABE4] text-white rounded-md hover:bg-blue-600 transition">
                    View Recommendations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <p className="text-center text-gray-500 mb-8">TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            <div className="text-2xl font-bold text-gray-700">Techspire</div>
            <div className="text-2xl font-bold text-gray-700">InnoWave</div>
            <div className="text-2xl font-bold text-gray-700">CloudSpring</div>
            <div className="text-2xl font-bold text-gray-700">Quantifi</div>
            <div className="text-2xl font-bold text-gray-700">Salesforce</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features to Retain Your Best Talent</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform provides everything you need to understand and prevent employee attrition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FiBarChart2 className="text-[#00ABE4] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">
                Advanced machine learning models predict attrition risk with 92% accuracy, giving you time to intervene.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FiUsers className="text-[#00ABE4] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Employee Insights</h3>
              <p className="text-gray-600">
                Understand key factors driving attrition in your organization with detailed analytics and reporting.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FiAward className="text-[#00ABE4] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Retention Strategies</h3>
              <p className="text-gray-600">
                Personalized recommendations to improve employee satisfaction and reduce turnover based on your data.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FiClock className="text-[#00ABE4] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Get instant alerts when employee risk factors change, allowing for timely interventions.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FaUserShield className="text-[#00ABE4] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">HR System Integration</h3>
              <p className="text-gray-600">
                Seamlessly connect with your existing HRIS, ATS, and performance management systems.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <FiDollarSign className="text-[#00ABE4] text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">ROI Calculator</h3>
              <p className="text-gray-600">
                See exactly how much you can save by reducing turnover with our built-in cost calculator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to predict and prevent employee attrition in your organization.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#00ABE4] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Connect Your Data</h3>
                      <p className="text-gray-600">
                        Securely integrate with your HR systems or upload employee data. We support all major HR platforms.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#00ABE4] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">ML based Analysis</h3>
                      <p className="text-gray-600">
                        Our models analyze hundreds of factors to identify at-risk employees and key retention drivers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#00ABE4] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Get Insights</h3>
                      <p className="text-gray-600">
                        Receive clear, actionable reports and dashboards highlighting retention risks and opportunities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#00ABE4] text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Take Action</h3>
                      <p className="text-gray-600">
                        Implement personalized retention strategies with our step-by-step guidance and tracking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex items-center">
              <div className="bg-gradient-to-br from-[#00ABE4] to-[#0083B0] rounded-xl p-8 text-white h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
                <p className="mb-6">
                  The average cost of replacing an employee is 6-9 months of their salary. Our solution helps you:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaChevronRight className="flex-shrink-0 mt-1 mr-2 text-yellow-300" />
                    <span>Reduce turnover costs by up to 40%</span>
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="flex-shrink-0 mt-1 mr-2 text-yellow-300" />
                    <span>Improve employee satisfaction scores</span>
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="flex-shrink-0 mt-1 mr-2 text-yellow-300" />
                    <span>Identify retention issues before they become problems</span>
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="flex-shrink-0 mt-1 mr-2 text-yellow-300" />
                    <span>Make data-driven HR decisions</span>
                  </li>
                </ul>
                <button className="mt-8 px-6 py-3 bg-white text-[#00ABE4] font-semibold rounded-lg hover:bg-gray-100 transition self-start">
                  Calculate Your Savings
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by HR professionals at leading companies worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">HR Director, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Workplace Compass helped us reduce employee turnover by 35% in the first year. The insights were incredibly accurate and actionable."
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-500 text-sm">VP People, StartUp Inc.</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The predictive analytics are spot-on. We've been able to intervene early with at-risk employees and improve retention significantly."
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">David Wilson</h4>
                  <p className="text-gray-500 text-sm">Chief People Officer, Global Enterprises</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The ROI was clear within months. We saved over $2M in recruitment costs in the first year of using Workplace Compass."
              </p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#00ABE4] to-[#0083B0] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Employee Retention Strategy?</h2>
          <p className="text-xl mb-8">
            Join hundreds of companies using Workplace Compass to retain top talent and reduce turnover costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/attrition-predictor">
              <button className="px-8 py-3 bg-white text-[#00ABE4] font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
                Start Free Trial
              </button>
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Workplace Compass</h3>
            <p className="mb-4">
              AI-powered employee attrition prediction to help companies retain top talent and reduce turnover costs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">Working</a></li>
              {/* <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition">Updates</a></li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/documentation" className="hover:text-white transition">Documentation</a></li>
              <li><a href="/guide" className="hover:text-white transition">Guides</a></li>
              {/* <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition">Case Studies</a></li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:text-white transition">About Us</a></li>
              <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Workplace Compass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;