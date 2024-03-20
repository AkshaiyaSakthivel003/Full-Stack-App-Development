import React, { useState, useEffect } from 'react';
import videoSrc from '../../assets/vid1.mp4';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Register.css';  

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({}); // Separate error state for each field
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  useEffect(() => {
    const savedPassword = localStorage.getItem('password');
    if (savedPassword) {
      setFormData({ ...formData, oldPassword: savedPassword });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.oldPassword || !formData.newPassword || !formData.confirmPassword) {
      errors.password = 'All fields are required';
    } else if (formData.oldPassword !== formData.oldPassword) {
      errors.oldPassword = 'Old password does not match';
    } else if (formData.newPassword === formData.oldPassword) {
      errors.newPassword = 'New password must be different from the old password';
    } else if (formData.newPassword.length < 6) {
      errors.newPassword = 'New password must be at least 6 characters long';
    } else if (formData.newPassword !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      localStorage.setItem('password', formData.newPassword);
      setFormData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="register-form-container">
        <h1>FORGOT PASSWORD</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="password-field">
            <input
              type={showPassword.oldPassword ? "text" : "password"}
              placeholder="Old Password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
            />
            <i
              className={`fas ${showPassword.oldPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={() => togglePasswordVisibility('oldPassword')}
            ></i>
          </div>
          {errors.oldPassword && <div className="error-popup">{errors.oldPassword}</div>}
          <div className="password-field">
            <input
              type={showPassword.newPassword ? "text" : "password"}
              placeholder="New Password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
            <i
              className={`fas ${showPassword.newPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={() => togglePasswordVisibility('newPassword')}
            ></i>
          </div>
          {errors.newPassword && <div className="error-popup">{errors.newPassword}</div>}
          <div className="password-field">
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="Confirm New Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <i
              className={`fas ${showPassword.confirmPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={() => togglePasswordVisibility('confirmPassword')}
            ></i>
          </div>
          {errors.confirmPassword && <div className="error-popup">{errors.confirmPassword}</div>}
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
