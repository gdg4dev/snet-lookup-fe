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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const mockResults = [
      {
        name: "D. S.",
        phone: "abc@gmail.com",
        street: "Jhghghg",
        city: "Fgffgfgh",
        state: "AZ",
        zip: "85281",
        age: "27",
        birthday: "March 1997",
      },
      // Add more mock results if needed
    ];
    setResults(mockResults);
    setStatus("fetched");
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
