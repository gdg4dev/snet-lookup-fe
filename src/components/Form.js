import React, { useState } from "react";
import "./Form.css";

const Form = ({ onSubmit }) => {
  const [activeSection, setActiveSection] = useState("name");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    place: "",
  });

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setFormData({ name: "", email: "", phone: "", place: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">
        <span style={{ color: "#007bff" }}>SNET</span> LOOKUP
      </h2>
      <div className="form-layout">
        <div className="options">
          {["name", "email", "phone"].map((section) => (
            <button
              key={section}
              onClick={() => handleSectionChange(section)}
              className={`option-btn ${
                activeSection === section ? "active" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            {activeSection === "name" && (
              <>

                <div className="inline-fields">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="input-field"
                  autoFocus
                />
                                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  placeholder="place"
                  className="input-field"
                  autoFocus
                />
                </div>
              </>
            )}
            {activeSection === "email" && (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input-field"
                autoFocus
              />
            )}
            {activeSection === "phone" && (
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="input-field"
                autoFocus
              />
            )}
            <button type="submit" className="submit-btn">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
