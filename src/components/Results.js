import React from "react";
import "./Results.css";

const Results = ({ results, status }) => {
  return (
    <div className="results-container">
      <h2 className="results-title">Search Results</h2>
      {status === "fetching" && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Fetching data...</p>
        </div>
      )}
      {status === "fetched" && results.length === 0 && (
        <p className="no-results">No results found.</p>
      )}
      {status === "fetched" && results.length > 0 && (
        <div className="results-grid">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              <h3>{result.name}</h3>
              <p>
                <strong>Phone:</strong> {result.phone}
              </p>
              <p>
                <strong>Email:</strong> {result.email}
              </p>
              <p>
                <strong>Address:</strong> {result.street}, {result.city},{" "}
                {result.state} {result.zip}
              </p>
              <p>
                <strong>Age:</strong> {result.age}
              </p>
              <p>
                <strong>Birthday:</strong> {result.birthday}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
