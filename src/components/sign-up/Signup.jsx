import React, { useState } from 'react';
import { StyledButton, StyledError, StyledForm, StyledRegistrationPage } from './Signup.styled';
import LabelInput from '../Lable-input/LableInput';
import { Link } from "react-router-dom";


function RegistrationPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Please enter your email');
    } else {
      setEmailError('');
    }
    if (!password) {
      setPasswordError('Please enter your password');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
    if (email && !passwordError && password.length >= 8 && confirmPassword === password) {
      const formData = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      console.log([formData]);
      localStorage.setItem('registrationData', JSON.stringify(formData));
      console.log(JSON.parse(localStorage.getItem('registrationData')));
      window.location.href = "/";
      
    }
  }

  return (
    <StyledRegistrationPage>
      <h1>Registration Page</h1>
      <StyledForm onSubmit={handleSubmit}>
        <LabelInput
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          text="Email:"
          required
        />
        {emailError && <StyledError>{emailError}</StyledError>}
        <LabelInput
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          text="Password:"
          required
        />
        {passwordError && <StyledError>{passwordError}</StyledError>}
        <LabelInput
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          text="Confirm Password:"
          required
        />
        {confirmPasswordError && <StyledError>{confirmPasswordError}</StyledError>}
        <StyledButton type="submit">Register</StyledButton>
        <p>Already have an account?  <Link to='/'>Sign In</Link></p>
      </StyledForm>
    </StyledRegistrationPage>

  );
}

export default RegistrationPage;