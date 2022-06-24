import React from 'react';
import { useState } from 'react';
import { signUp } from './services/fetch-utils';

export default function AuthPage({ setUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignUpSubmit(e) {
    e.preventDefault();

    const user = await signUp(signUpEmail, signUpPassword);
    console.log(user);

    setUser(user);
  }

  return (
    <div className='auth-page'>
      <h1>Boooooks</h1>
      <div className='auth-forms'>
        <form onSubmit={handleSignUpSubmit}>
          <h3>Sign Up</h3>
          <label>
            Email
            <input onChange={e => setSignUpEmail(e.target.value)} value={signUpEmail} type="email"></input>
          </label>
          <label>
            Password
            <input onChange={e => setSignUpPassword(e.target.value)} value={signUpPassword} type="password"></input>
          </label>
          <button>Sign Up</button>
        </form>
        <form>
          <h3>Sign In</h3>
          <label>
            Email
            <input onChange={e => setSignInEmail(e.target.value)} value={signInEmail} type="email"></input>
          </label>
          <label>
            Password
            <input onChange={e => setSignInPassword(e.target.value)} value={signInPassword} type="password"></input>
          </label>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
}

// AuthPage({ setUser }) : tracks user form state and allows users to sign up and sign in	2
// AuthPage({ setUser }) : Sets the user in App.js state, using the setUser function passed down from the parent