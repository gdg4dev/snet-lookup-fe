import React, { useState } from "react";
import Loading from "./Loading";
import Form from "./components/Form";
import Results from "./components/Results";

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("idle");

  const handleLoadComplete = () => {
    setLoadingComplete(true);
  };

  const handleFormSubmit = async (formData) => {
    setShowResults(true);
    setStatus("fetching");
    
    // Determine the API endpoint based on filled fields
    const baseurl = "http://localhost:3333"
    let apiUrl = "";
    formData.place = formData.place || "VA"
    if (formData.name && formData.place) {
        apiUrl = `${baseurl}/name/${formData.name}/${!formData.place}`;
    } else if (formData.email) {
        apiUrl = `${baseurl}/email/${formData.email}`;
    } else if (formData.phone) {
        apiUrl = `${baseurl}/phone/${formData.phone}`;
    }

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const mockResults = await response.json(); // Process the JSON response
        setResults(mockResults);
        setStatus("fetched");
    } catch (error) {
        console.error("Error fetching data:", error);
        setStatus("error");
    }
};

  return (
    <div className="main_container">
      {!loadingComplete ? (
        <Loading onLoadComplete={handleLoadComplete} />
      ) : showResults ? (
        <Results results={results} status={status} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
