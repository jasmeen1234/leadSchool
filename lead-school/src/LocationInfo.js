import React from 'react';

const LocationInfo = ({ location ={}}) => {
  console.log(location);
  

  return (
    <div className="mt-4">
      <h2 className="mb-3">Location Information</h2>
      {location ? (
        <ul className="list-group">
          <li className="list-group-item">Country: {location.country}</li>
          <li className="list-group-item">State: {location?.places[0]?.state}</li>
          <li className="list-group-item">Place Name: {location?.places[0]["place name"]}</li>
          <li className="list-group-item">Latitude: {location?.places[0]?.latitude}</li>
          {/* Add more information from the API response as needed */}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default LocationInfo;
