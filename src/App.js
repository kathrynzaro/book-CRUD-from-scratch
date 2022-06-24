import React from 'react';
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

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/">Sign In</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/create">Create</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/books/1">Update</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/books">Books List</Link>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <AuthPage />
          </Route>
          <Route exact path="/books/:id">
            <UpdatePage />
          </Route>
          <Route exact path="/books">
            <ListPage />
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