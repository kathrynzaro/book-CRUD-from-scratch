import React from 'react';

export default function AuthPage() {
  return (
    <div>
      <h2>Boooooks</h2>
      <div className='auth'>
        <form>
          <h4>Sign Up</h4>
          <label>
            Email
            <input></input>
          </label>
          <label>
            Password
            <input></input>
          </label>
          <button>Sign Up</button>
        </form>
        <form>
          <h4>Sign In</h4>
          <label>
            Email
            <input></input>
          </label>
          <label>
            Password
            <input></input>
          </label>
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
}

// AuthPage({ setUser }) : tracks user form state and allows users to sign up and sign in	2
// AuthPage({ setUser }) : Sets the user in App.js state, using the setUser function passed down from the parent