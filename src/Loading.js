import React, { useEffect, useState } from "react";
import "./Loading.css"; // Create a CSS file for loading styles

const Loading = ({ onLoadComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoadComplete(); // Call the function to load the form
    }, 3000); // Adjust the duration as needed (3000ms = 3 seconds)

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className="loading-container">
      {loading && <h1 className="loading-text">SNET</h1>}
    </div>
  );
};

export default Loading;
