import React, { useState } from 'react';
import '../../assets/css/Register.css';
import validator from 'validator';
import videoSrc from '../../assets/vid1.mp4';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    role: ''
  });
  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.username) {
      errors.username = 'Username Is Required';
    } 
    else if (!formData.email) {
      errors.email = 'Email ID Is Required';
    } else if (!validator.isEmail(formData.email)) {
      errors.email = 'Invalid Email ID';
    } 
    else if (!formData.password) {
      errors.password = 'Password Is Required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    } 
    else if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm Password Is Required';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords Do Not Match';
    } 
    else if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone Number Is Required';
    } else if (!validator.isNumeric(formData.phoneNumber)) {
      errors.phoneNumber = 'Enter Valid Phone Number';
    } else if (formData.phoneNumber.length !== 10) {
      errors.phoneNumber = 'Phone Number Must Be 10 Digits';
    } 
    else if (!formData.role) { 
      errors.role = 'Role Is Required';
    }
    setErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      setRegistrationSuccess(true);
      
      localStorage.setItem('formData', JSON.stringify(formData));
      
      setTimeout(() => {
        navigate("/login");
      }, 200);
      
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        role: ''
      });
    }
  };  

  return (
    <div className="register-container">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="register-form-container">
        <h1>REGISTER</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <div className={`error-popup ${errors.username ? 'active' : ''}`}>{errors.username}</div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className={`error-popup ${errors.email ? 'active' : ''}`}>{errors.email}</div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className={`error-popup ${errors.password ? 'active' : ''}`}>{errors.password}</div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className={`error-popup ${errors.confirmPassword ? 'active' : ''}`}>{errors.confirmPassword}</div>
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <div className={`error-popup ${errors.phoneNumber ? 'active' : ''}`}>{errors.phoneNumber}</div>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <div className={`error-popup ${errors.role ? 'active' : ''}`}>{errors.role}</div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
