import { useState } from "react";
import validator from "validator"; // Import the "validator" library

function FormValidation() {
  // use useState to create 2 state variables named formData and formError and assign them an object
  // with properties of username, email and password

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      errors.username = "Username is required";
      isValid = false;
    }

    if (!validator.isEmail(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form data
      alert("Form data submitted:", formData);
    } else {
      alert("Form submission failed due to validation errors.");
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            // value={formData.username}
            onChange={handleInputChange}
          />
          {/* <span className="error">{formErrors.username}</span> */}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            onChange={handleInputChange}
          />
          {/* <span className="error">{formErrors.email}</span> */}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            // value={formData.password}
            onChange={handleInputChange}
          />
          {/* <span className="error">{formErrors.password}</span> */}
        </div>

        <button
          className="border rounded py-1 px-2 hover:bg-blue-200 active:bg-teal-200"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
