import React, { useState } from 'react';
import { StyledLoginPage,StyledForm,StyledButton,StyledError } from './Signin.styled';
import { Link } from "react-router-dom";
function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  

    const handleSubmit = (e) => {
      e.preventDefault();
    
      if (!email) {
        setEmailError('Please enter your email');
      } else {
        setEmailError('');
      }
      if (!password) {
        setPasswordError('Please enter your password');
      } else {
        setPasswordError('');
      }
    
 
      if (email && password) {
       
        setEmail('');
        setPassword('');

        const formData = {
          email: email,
          password: password,
        };
    
        console.log([formData]);
        window.location.href = "ExpenseIncome";
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
          />
          {passwordError && <StyledError>{passwordError}</StyledError>}
          <StyledButton type="submit">Login</StyledButton>
           <p>Dont have an account?  <Link to='Signup'>Sign Up</Link></p>
        </StyledForm>
      </StyledLoginPage>
    );
  }
  
  export default LoginPage;