import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RetentionPolicy = ({ p, empdata }) => {
  const [policy, setPolicy] = useState([]);
  const navigate = useNavigate();

  // Function to fetch retention policy data from the backend
  async function fetchRetentionPolicy(employeeData) {
    try {
      const response = await axios.post(
        'http://localhost:5000/retention',
        employeeData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log(response);
      const policyResponse = response.data || {};
      const prediction = policyResponse.prediction;

      setPolicy(prediction ? [prediction] : ["Employee retention is currently stable."]);
    } catch (error) {
      console.error('Error fetching data from backend:', error);
      setPolicy(["Error fetching retention policies."]);  
    }
  }

  // Fetch the data whenever `p` or `empdata` changes
  useEffect(() => {
    if (p === 1) {
      fetchRetentionPolicy(empdata);
    }
  }, [p, empdata]);

  function redirectToPolicyPage() {
    navigate('/retention-policy', { state: { policies: policy, empdata } });
  }

  return (
    <div className="policies bg-slate-300 px-9 p-7 m-3 rounded-md">
      

      <button onClick={redirectToPolicyPage} className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
        View Detailed Policies
      </button>
    </div>
  );
};

export default RetentionPolicy;
