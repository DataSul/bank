import React, { useState } from 'react';
import { StyledLoginPage, StyledForm, StyledButton, StyledError } from './Signin.styled';
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const registrationDataFromLocalStorage = JSON.parse(localStorage.getItem('registrationData'));

    if (email === registrationDataFromLocalStorage.email && password === registrationDataFromLocalStorage.password) {
      setEmail('');
      setPassword('');
      setLoggedIn(true);
      setErrorMessage('');
      navigate('/ExpenseIncome');
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };


  return (
    <StyledLoginPage>
      <h1>Login Page</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <StyledError>{emailError}</StyledError>}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="8"
        />
        {passwordError && <StyledError>{passwordError}</StyledError>}
        {errorMessage && <div>{errorMessage}</div>}
        <StyledButton type="submit">Login</StyledButton>
        <p>Dont have an account?  <Link to='/signup'>Sign Up</Link></p>
      </StyledForm>
    </StyledLoginPage>
  );
}

export default LoginPage;