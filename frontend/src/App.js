import React, { useState } from 'react';
import { Audio } from 'react-loader-spinner'
import EmployeeForm from './components/EmployeeForm';
import AttritionChart from './components/AttritionChart';
import RetentionPolicy from './components/RetentionPolicy';
import Login from './components/Login';
import Header from './components/header'
import PolicyD from './components/PolicyD';
import RetentionPolicyPage from './components/RetentionPolicyPage';
import LandingPage from './components/LandingPage';
import ContactPage from "./components/ContactPage";
import Documentation from './components/Documentation'
import Guide from './components/Guide'


import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CareersPage from './components/CareersPage';


function App() {
  const [attritionResult, setAttritionResult] = useState(null);

  const handlePrediction = (result) => {
    setAttritionResult(result);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/attrition-predictor" element={
            <>
              {attritionResult !== null && (
                <div>
                  <h2>Prediction Result: {attritionResult === 1 ? 'Attrition' : 'No Attrition'}</h2>
                </div>
              )}
              <EmployeeForm onPrediction={handlePrediction} />
              {/* <AttritionChart />  */}
            </>
          } />
          <Route path="/components/LandingPage" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} /> {/* Update to use 'element' prop */}
          <Route path="/retention-policy" element={<RetentionPolicyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/components/PolicyD" element={<PolicyD/>} />
          <Route path="/components/RetentionPolicyPage" element={<RetentionPolicyPage />} />

          <Route path="/contact" element={<ContactPage />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;