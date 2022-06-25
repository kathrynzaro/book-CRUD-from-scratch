import React from 'react';
import { useState } from 'react';
import { signUp, signIn } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSignUpSubmit(e) {
    e.preventDefault();
    
    try {
      const user = await signUp(signUpEmail, signUpPassword);
  
      setUser(user);
    } catch (e) {
      setError(e.message);
    }
  }
  
  async function handleSignInSubmit(e) {
    e.preventDefault();

    const user = await signIn(signInEmail, signInPassword);

    setUser(user);
  }

  return (
    <div className='auth-page'>
      <h1>Boooooks</h1>
      <h3 className='error'>{error}</h3>
      <div className='auth-forms'>
        <form onSubmit={handleSignUpSubmit}>
          <h3>Sign Up</h3>
          <label>
            Email
            <input onChange={e => setSignUpEmail(e.target.value)} value={signUpEmail} type="email" />
          </label>
          <label>
            Password
            <input onChange={e => setSignUpPassword(e.target.value)} value={signUpPassword} type="password" />
          </label>
          <button>Sign Up</button>
        </form>
        <form onSubmit={handleSignInSubmit}>
          <h3>Sign In</h3>
          <label>
            Email
            <input onChange={e => setSignInEmail(e.target.value)} value={signInEmail} type="email" />
          </label>
          <label>
            Password
            <input onChange={e => setSignInPassword(e.target.value)} value={signInPassword} type="password" />
          </label>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
}

// AuthPage({ setUser }) : tracks user form state and allows users to sign up and sign in	2
// AuthPage({ setUser }) : Sets the user in App.js state, using the setUser function passed down from the parent