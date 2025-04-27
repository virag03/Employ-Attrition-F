import React, { useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import "./css/employerformcss.css";
import RetentionPolicy from './RetentionPolicy';
import AttritionChart from './AttritionChart';
import PolicyD from './PolicyD';

function EmployeeForm() {
    const [formData, setFormData] = useState({
        Age: 30,
        DailyRate: 100,
        DistanceFromHome: 0,
        Education: 1,
        EnvironmentSatisfaction: 1,
        Gender: 'Male',
        HourlyRate: 60,
        JobInvolvement: 1,
        JobLevel: 1,
        JobSatisfaction: 1,
        MonthlyIncome: 5000,
        NumCompaniesWorked: 0,
        OverTime: 'No',
        TotalWorkingYears: 1,
        YearsAtCompany: 0,
        WorkLifeBalance: 1,
        YearsInCurrentRole: 0,
        YearsSinceLastPromotion: 0,
        YearsWithCurrManager: 0,
        BusinessTravel: 'Travel_Rarely',
        JobRole: 'Sales Executive',
        MaritalStatus: 'Single',
        EducationField: 'Life Sciences',
        Department: 'Research & Development'
    });

    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setPrediction(data.prediction);
            setLoading(false);
        } catch (error) {
            console.error("There was an error making the prediction request:", error);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#00ABE4]">Employee Attrition Predictor</h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Fill in the employee details to predict attrition risk
                    </p>
                </div>

                {loading && (
                    <div className="flex justify-center items-center min-h-[300px]">
                        <DNA 
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                    </div>
                )}

                {!loading && (
                    <div className="grid md:grid-cols-2 gap-8">
                        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Column 1 */}
                                <div className="space-y-4">
                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="Age">Age</label>
                                        <input
                                            type="number"
                                            name="Age"
                                            id="Age"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="18"
                                            max="100"
                                            value={formData.Age}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="DailyRate">Daily Rate</label>
                                        <input
                                            type="number"
                                            name="DailyRate"
                                            id="DailyRate"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="0"
                                            value={formData.DailyRate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="DistanceFromHome">Distance from Home (miles)</label>
                                        <input
                                            type="number"
                                            name="DistanceFromHome"
                                            id="DistanceFromHome"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="0"
                                            value={formData.DistanceFromHome}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="Education">Education Level (1-5)</label>
                                        <input
                                            type="number"
                                            name="Education"
                                            id="Education"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="1"
                                            max="5"
                                            value={formData.Education}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="EnvironmentSatisfaction">Environment Satisfaction (1-4)</label>
                                        <input
                                            type="number"
                                            name="EnvironmentSatisfaction"
                                            id="EnvironmentSatisfaction"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="1"
                                            max="4"
                                            value={formData.EnvironmentSatisfaction}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="Gender">Gender</label>
                                        <select
                                            name="Gender"
                                            id="Gender"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            onChange={handleChange}
                                            value={formData.Gender}
                                            required
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="JobInvolvement">Job Involvement (1-4)</label>
                                        <input
                                            type="number"
                                            name="JobInvolvement"
                                            id="JobInvolvement"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="1"
                                            max="4"
                                            value={formData.JobInvolvement}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="space-y-4">
                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="JobLevel">Job Level (1-5)</label>
                                        <input
                                            type="number"
                                            name="JobLevel"
                                            id="JobLevel"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="1"
                                            max="5"
                                            value={formData.JobLevel}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="JobSatisfaction">Job Satisfaction (1-4)</label>
                                        <input
                                            type="number"
                                            name="JobSatisfaction"
                                            id="JobSatisfaction"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="1"
                                            max="4"
                                            value={formData.JobSatisfaction}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="MonthlyIncome">Monthly Income</label>
                                        <input
                                            type="number"
                                            name="MonthlyIncome"
                                            id="MonthlyIncome"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="0"
                                            value={formData.MonthlyIncome}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="NumCompaniesWorked">Number of Companies Worked</label>
                                        <input
                                            type="number"
                                            name="NumCompaniesWorked"
                                            id="NumCompaniesWorked"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="0"
                                            value={formData.NumCompaniesWorked}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="OverTime">OverTime</label>
                                        <select
                                            name="OverTime"
                                            id="OverTime"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            onChange={handleChange}
                                            value={formData.OverTime}
                                            required
                                        >
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="TotalWorkingYears">Total Working Years</label>
                                        <input
                                            type="number"
                                            name="TotalWorkingYears"
                                            id="TotalWorkingYears"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="0"
                                            value={formData.TotalWorkingYears}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="YearsAtCompany">Years at Company</label>
                                        <input
                                            type="number"
                                            name="YearsAtCompany"
                                            id="YearsAtCompany"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="0"
                                            value={formData.YearsAtCompany}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Second Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                {/* Column 1 */}
                                <div className="space-y-4">
                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="WorkLifeBalance">Work Life Balance (1-4)</label>
                                        <input
                                            type="number"
                                            name="WorkLifeBalance"
                                            id="WorkLifeBalance"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="1"
                                            max="4"
                                            value={formData.WorkLifeBalance}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="YearsInCurrentRole">Years in Current Role</label>
                                        <input
                                            type="number"
                                            name="YearsInCurrentRole"
                                            id="YearsInCurrentRole"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="0"
                                            value={formData.YearsInCurrentRole}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="YearsSinceLastPromotion">Years Since Last Promotion</label>
                                        <input
                                            type="number"
                                            name="YearsSinceLastPromotion"
                                            id="YearsSinceLastPromotion"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="0"
                                            value={formData.YearsSinceLastPromotion}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className="space-y-4">
                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="YearsWithCurrManager">Years with Current Manager</label>
                                        <input
                                            type="number"
                                            name="YearsWithCurrManager"
                                            id="YearsWithCurrManager"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            min="0"
                                            value={formData.YearsWithCurrManager}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="BusinessTravel">Business Travel</label>
                                        <select
                                            name="BusinessTravel"
                                            id="BusinessTravel"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            onChange={handleChange}
                                            value={formData.BusinessTravel}
                                            required
                                        >
                                            <option value="Travel_Rarely">Travel Rarely</option>
                                            <option value="Travel_Frequently">Travel Frequently</option>
                                            <option value="Non-Travel">Non-Travel</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label className="block text-gray-300 mb-2" htmlFor="JobRole">Job Role</label>
                                        <select
                                            name="JobRole"
                                            id="JobRole"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                            onChange={handleChange}
                                            value={formData.JobRole}
                                            required
                                        >
                                            <option value="Sales Executive">Sales Executive</option>
                                            <option value="Research Scientist">Research Scientist</option>
                                            <option value="Laboratory Technician">Laboratory Technician</option>
                                            <option value="Human Resources">Human Resources</option>
                                            <option value="Manufacturing Director">Manufacturing Director</option>
                                            <option value="Manager">Manager</option>
                                            <option value="Research Director">Research Director</option>
                                            <option value="Sales Representative">Sales Representative</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Third Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="form-group">
                                    <label className="block text-gray-300 mb-2" htmlFor="MaritalStatus">Marital Status</label>
                                    <select
                                        name="MaritalStatus"
                                        id="MaritalStatus"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                        onChange={handleChange}
                                        value={formData.MaritalStatus}
                                        required
                                    >
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="block text-gray-300 mb-2" htmlFor="EducationField">Education Field</label>
                                    <select
                                        name="EducationField"
                                        id="EducationField"
                                        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                        onChange={handleChange}
                                        value={formData.EducationField}
                                        required
                                    >
                                        <option value="Life Sciences">Life Sciences</option>
                                        <option value="Medical">Medical</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Technical Degree">Technical Degree</option>
                                        <option value="Human Resources">Human Resources</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group mt-6">
                                <label className="block text-gray-300 mb-2" htmlFor="Department">Department</label>
                                <select
                                    name="Department"
                                    id="Department"
                                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#00ABE4]"
                                    onChange={handleChange}
                                    value={formData.Department}
                                    required
                                >
                                    <option value="Research & Development">Research & Development</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Human Resources">Human Resources</option>
                                </select>
                            </div>

                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-[#00ABE4] text-white font-semibold rounded-lg hover:bg-blue-600 transition shadow-lg"
                                >
                                    Predict Attrition
                                </button>
                            </div>
                        </form>

                        {/* Results Section */}
                        <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                            <h2 className="text-2xl font-bold mb-6 text-[#00ABE4]">Prediction Results</h2>
                            
                            {prediction !== null ? (
                                <div>
                                    <div className={`p-6 rounded-lg mb-6 ${prediction === 1 ? 'bg-red-900/30 border border-red-700' : 'bg-green-900/30 border border-green-700'}`}>
                                        <h3 className="text-xl font-bold mb-2">
                                            {prediction === 1 ? (
                                                <span className="text-red-400">High Risk - Employee May Leave</span>
                                            ) : (
                                                <span className="text-green-400">Low Risk - Employee Likely to Stay</span>
                                            )}
                                        </h3>
                                        <p className="text-gray-300">
                                            {prediction === 1 
                                                ? "This employee shows characteristics that may lead to attrition." 
                                                : "This employee appears satisfied and is likely to remain with the company."}
                                        </p>
                                    </div>

                                    {prediction === 1 && (
                                        <div className="mt-6">
                                            <h3 className="text-xl font-bold mb-4 text-[#00ABE4]">Retention Recommendations</h3>
                                            <RetentionPolicy p={1} empdata={formData} />
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-gray-500 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-400">Submit the form to see the prediction results</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EmployeeForm;