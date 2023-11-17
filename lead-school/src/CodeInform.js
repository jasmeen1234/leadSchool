import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
const CodeInform = ({ onFetchData }) => {
  const [placeName, setPlaceName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.zippopotam.us/in/${placeName}`);
      onFetchData(response.data);
    } catch (error) {
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }

  };
  if(loading){
    return <>
    Loading,,,,,
    </>
  }

  return (
    <div className="mt-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Place Name"
          value={placeName}
          onChange={(e) => setPlaceName(e.target.value)}
        />
        <button className="btn" onClick={handleFetchData} disabled={loading}>
          {loading ? 'Fetching...' : 'Fetch Data'}
        </button>
      </div>
      {error && <p className="mt-2 text-danger">{error}</p>}
    </div>
  );
};

export default CodeInform;
