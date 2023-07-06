import React, { useState, useContext } from 'react';
import { navigate } from "gatsby"
import * as styles from './loginForm.module.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error data:', errorData);
        throw new Error(`${errorData.message}`);
    }
  
      if (response.ok) {
        console.log('Login successful!');
        console.log(response);
        const { token } = await response.json();
        sessionStorage.setItem('token', token);
        console.log('Token:', token);
        setError(''); // Clear any previous error
        navigate("/dashboard")
      } else {
        // Set error message based on status code
        if (response.status === 401) {
          setError('Incorrect email or password');
        } else {
          setError('An unexpected error occurred');
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Sign In</h2>
        <div className={styles.inputBox}>
            <input type='text' value={username} onChange={e => setUsername(e.target.value)} required></input>
            <span>Email</span>
            <i></i>
        </div>
        <div className={styles.inputBox}>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} required></input>
            <span>Enter Password</span>
            <i></i>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <input type='submit' value='Login'></input>
        <div className={styles.links}>
            <a href='#'>Forgot Password?</a>
            <a href='#'>Join TaskSuite</a>
        </div>
    </form>
  );
};

export default LoginForm;






{/* <label>
Email:
<input 
  type="email" 
  value={email} 
  onChange={e => setEmail(e.target.value)} 
  required 
  pattern="\S+@\S+\.\S+" // Simple regex for email validation
/>
</label>
<label>
Password:
<input 
  type="password" 
  value={password} 
  onChange={e => setPassword(e.target.value)} 
  required 
  minLength="8" // Require at least 8 characters
/>
</label>
<button type="submit">Log in</button>
{error && <p>{error}</p>} */}
