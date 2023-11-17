import React, { useState } from 'react';
import ZipCodeForm from './CodeInform';
import LocationInfo from './LocationInfo';


const App = () => {
  const [location, setLocation] = useState(null);

  const handleFetchData = (data) => {
    setLocation(data);
  };

  const handleClearData = () => {
    setLocation(null);
  };

  return (
    <div className="App">
      <div className="container">
       <h1 className="mb-4">Zip Code Information App</h1>
      <ZipCodeForm onFetchData={handleFetchData} />
      <LocationInfo location={location} />
      <button className="btn" onClick={handleClearData}>
        Clear Data
      </button> 
      </div>
    </div>
  );
};

export default App;
