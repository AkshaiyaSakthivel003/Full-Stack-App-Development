import React, { useState, useEffect } from 'react';
import '../../assets/css/Register.css';
import { useNavigate } from 'react-router-dom';
import videoSrc from '../../assets/vid2.mp4';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [registeredData, setRegisteredData] = useState(null);

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setRegisteredData(JSON.parse(savedFormData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.email || !formData.password) {
      errors.username = 'Fill All The Required Data';
    } else if (!registeredData || formData.email !== registeredData.email || formData.password !== registeredData.password) {
      errors.username = 'Invalid Email or Password';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Login Successful:', formData);
      setFormData({
        email: '',
        password: '',
      });
      navigate("/dashboard")
    }
  };

  return (
    <div className="register-container">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="register-form-container">
        <h1>Login</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className={`error-popup ${errors.username ? 'active' : ''}`}>{errors.username || errors.email}</div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className={`error-popup ${errors.password ? 'active' : ''}`}>{errors.password}</div>
          <button type="submit" style={{ backgroundColor: '#800080' }}>LOGIN</button>
        </form>
      </div>
    </div>
  );
  }  

export default AdminLogin;