import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import ListPage from './ListPage';
import UpdatePage from './UpdatePage';
import { client } from './services/client';
import { logout } from './services/fetch-utils';
import './App.css';

export default function App() {
  const [user, setUser] = useState(client.auth.user());

  async function handleLogout() {
    await logout();
    setUser('');
  }

  return (
    <Router>
      <div>
        {
          user &&
          <nav>
            <ul>
              <li>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/create">Create</Link>
              </li>
              {/* <li>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/books/:id">Update</Link>
              </li> */}
              <li>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/books">Books List</Link>
              </li>
              <li>
                {user && <button onClick={handleLogout}>Logout</button>}
              </li>
            </ul>
          </nav>
        }

        <Switch>
          <Route exact path="/">
            {
              !user
                ? <AuthPage setUser={setUser} />
                : <Redirect to="/books" />
            }
          </Route>
          <Route exact path="/books/:id">
            <UpdatePage />
          </Route>
          <Route exact path="/books">
            {
              user
                ? <ListPage />
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/create">
            <CreatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


// App() : contains routes for home/auth page, create, items/:id, /items	1
// App() : tracks user state, passing the setUser callback to the AuthPage	1
// App(): If user is logged in, header contains logout button and links to the Create and List pages.	1
// App(): Use a ternary to decide whether to let users visit particular routes, depending on whether there is a user in App.js state