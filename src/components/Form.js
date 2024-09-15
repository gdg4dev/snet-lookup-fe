import React, { useState } from "react";
import "./Form.css";

const Form = ({ onSubmit }) => {
  const [activeSection, setActiveSection] = useState("name");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleSectionChange = (section) => {
    setActiveSection(section);
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
        <span style={{ color: "#007bff" }}>MNET</span> Find
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
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="input-field"
                  autoFocus
                />
                <div className="inline-fields">
                  {["city", "state", "pincode"].map((field) => (
                    <input
                      key={field}
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      className="input-field"
                    />
                  ))}
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
