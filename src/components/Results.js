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
          {results.map((result, index) => {
         
            return (
              <div key={index} className="result-card">
                <h3>{result.name}</h3>
               {result.offenderLink && (<h6 style={{color: 'white'}}>Similar profile has been found on <a style={{color: 'white'}} href="https://vspsor.com/Offender/Details/94983283-7402-4e07-9999-53084e5ff094">Sex offender lookup</a></h6>)} 
                <div className="result-field">
                  {result.phone && (
                    <p>
                      <strong>Phone:</strong> {result.phone}
                    </p>
                  )}
                </div>
                <div className="result-field">
                  {result.email && (
                    <p>
                      <strong>Email:</strong> {result.email}
                    </p>
                  )}
                </div>
                <div className="result-field">
                  {result.street && result.city && result.state && result.zip && (
                    <p>
                      <strong>Address:</strong> {result.street}, {result.city},{" "}
                      {result.state} {result.zip}
                    </p>
                  )}
                </div>
                <div className="result-field">
                  {result.age && (
                    <p>
                      <strong>Age:</strong> {result.age}
                    </p>
                  )}
                </div>
                <div className="result-field">
                  {result.birthday && (
                    <p>
                      <strong>Birthday:</strong> {result.birthday}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
};

export default Results;